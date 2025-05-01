import { useState, useEffect } from 'react'
import { createTask, updateTask } from '../../api/tasks'
import { useTaskStore } from '../../stores/taskStore'
import { toast } from 'react-toastify'

export default function TaskForm() {
    const [title, setTitle] = useState('')
    const { addTask, updateTask: updateStoreTask, selectedTask, setSelectedTask } = useTaskStore()

    useEffect(() => {
        if (selectedTask) {
            setTitle(selectedTask.title)  
            
        } else {
            setTitle('')  
        }
    }, [selectedTask])  

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (selectedTask) {
                // Si estamos editando una tarea, actualizamos
                const updatedTask = { ...selectedTask, title }
    
                const res = await updateTask(updatedTask.id || updatedTask._id, updatedTask)
                updateStoreTask(updatedTask)  
                toast.success('Tarea actualizada')
    
                setSelectedTask(null)  
            } else {
                // Si estamos creando una nueva tarea, la agregamos
                const res = await createTask({ title })
                addTask(res.data.data)  // Aquí también se mantiene el acceso a `res.data.data`
                toast.success('Tarea creada')
            }
            setTitle('')  
        } catch (error) {
            if (error.response?.data?.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error('Error al guardar la tarea')
            }
        }
    }
    

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder="Nueva tarea..." 
                className="border p-2 flex-1" 
            />
            <button className="bg-blue-500 text-white px-4">
                {selectedTask ? 'Editar' : 'Agregar'}
            </button>
        </form>
    )
}
