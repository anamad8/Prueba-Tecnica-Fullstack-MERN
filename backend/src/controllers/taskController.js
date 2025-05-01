import Task from '../models/Task.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener las tareas'
        });
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Tarea no encontrada'
            });
        }

        res.json({
            success: true,
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener la tarea'
        });
    }
};

export const createTask = async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        
        // Validación manual adicional (opcional)
        if (!title || title.trim() === '') {
            return res.status(400).json({
                success: false,
                errors: [{ field: 'title', message: 'El título es obligatorio' }]
            });
        }

        const task = await Task.create({
            title,
            description,
            completed: completed || false,
            user: req.user.id
        });

        res.status(201).json({
            success: true,
            data: task
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.entries(error.errors).map(([field, details]) => ({
                field,
                message: details.message
            }));
            
            return res.status(400).json({
                success: false,
                message: 'Error de validación',
                errors
            });
        }
        res.status(500).json({
            success: false,
            message: 'Error al crear la tarea',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { title, description, completed } = req.body;

        // Validación manual del título si se está actualizando
        if (title && title.trim() === '') {
            return res.status(400).json({
                success: false,
                errors: [{ field: 'title', message: 'El título no puede estar vacío' }]
            });
        }

        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            { title, description, completed },
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Tarea no encontrada'
            });
        }

        res.json({
            success: true,
            data: task
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.entries(error.errors).map(([field, details]) => ({
                field,
                message: details.message
            }));
            
            return res.status(400).json({
                success: false,
                message: 'Error de validación',
                errors
            });
        }
        res.status(500).json({
            success: false,
            message: 'Error al actualizar la tarea'
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Tarea no encontrada'
            });
        }

        res.json({
            success: true,
            message: 'Tarea eliminada correctamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar la tarea'
        });
    }
};