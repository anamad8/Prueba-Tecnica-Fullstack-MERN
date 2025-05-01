import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authenticate = async (req, res, next) => {
    // Obtener el token del header
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        console.log(error)
        return res.status(401).json({ 
            success: false,
            message: 'No autorizado - Token no proporcionado' 
        });
    }

    try {
        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Obtener el usuario del token (sin password)
        req.user = await User.findById(decoded.id).select('-password');
        
        if (!req.user) {
            return res.status(401).json({ 
                success: false,
                message: 'No autorizado - Usuario no existe' 
            });
        }

        next();
    } catch (error) {
        console.error('Error en autenticación:', error.message);
        res.status(401).json({ 
            success: false,
            message: 'No autorizado - Token inválido' 
        });
    }
};