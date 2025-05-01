import { useState } from 'react'
import { register } from '../../api/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function RegisterForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await register({ name, email, password })
            toast.success('Registro exitoso. Inicia sesión.')
            navigate('/login')
        } catch (error) {
            
            if (error.response && error.response.data) {
                const errorData = error.response.data;
                
                if (errorData.errors) {
                    errorData.errors.forEach(err => {
                        toast.error(err.message); 
                    });
                } 
                
                else if (errorData.message) {
                    toast.error(errorData.message); 
                } else {
                    
                    toast.error('Error desconocido');
                }
            } else {
                toast.error('Error desconocido');
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 space-y-4">
        <h2 className="text-xl font-bold">Crear cuenta</h2>
        <input className="w-full border p-2" placeholder="Name" onChange={e => setName(e.target.value)} />
        <input className="w-full border p-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="w-full border p-2" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
        <button className="w-full bg-green-500 text-white p-2 rounded">Registrarse</button>

        <p className="text-sm text-center">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">Inicia sesión</Link>
        </p>
    </form>
    )
}
