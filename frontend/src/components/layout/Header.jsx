import { useAuthStore } from '../../stores/authStore'

export default function Header() {
    const logout = useAuthStore(state => state.logout)

    return (
        <header className="p-4 bg-blue-600 text-white flex justify-between">
            <h1 className="text-lg font-bold">Tus Tareas</h1>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
                Cerrar sesión
            </button>
        </header>
    )
}
