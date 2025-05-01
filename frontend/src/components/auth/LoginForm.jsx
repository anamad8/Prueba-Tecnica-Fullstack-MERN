import { useState } from 'react'
import { login } from '../../api/auth'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const setUser = useAuthStore(state => state.setUser)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await login({ email, password })
            setUser(res.data.user, res.data.token)
            toast.success('Bienvenido!')
            navigate('/')
        } catch (error) {
            if (error.response && error.response.data) {
                const errorData = error.response.data
    
                if (errorData.errors) {
                    errorData.errors.forEach(err => {
                        toast.error(err.message)
                    })
                } else if (errorData.message) {
                    toast.error(errorData.message)
                } else {
                    toast.error('Error desconocido')
                }
            } else {
                toast.error('Error de conexión con el servidor')
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 space-y-4">
            <h2 className="text-xl font-bold">Iniciar sesión</h2>
            <input 
                className="w-full border p-2" 
                placeholder="Email" 
                onChange={e => setEmail(e.target.value)} 
            />
            <input 
                className="w-full border p-2" 
                placeholder="Password" 
                type="password" 
                onChange={e => setPassword(e.target.value)} 
            />
            <button className="w-full bg-blue-500 text-white p-2 rounded">Entrar</button>

            {/* Enlace a la página de registro */}
            <p className="text-center mt-4">
                ¿No tienes cuenta? 
                <Link to="/register" className="text-blue-500 hover:underline">
                    Regístrate aquí
                </Link>
            </p>
        </form>
    )
}
