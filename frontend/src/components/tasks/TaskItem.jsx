import { deleteTask, updateTask } from '../../api/tasks'
import { useTaskStore } from '../../stores/taskStore'
import { toast } from 'react-toastify'

export default function TaskItem({ task }) {

    // console.log(task.title)
    const removeTask = useTaskStore(state => state.deleteTask)
    const updateStoreTask = useTaskStore(state => state.updateTask)
    const setSelectedTask = useTaskStore(state => state.setSelectedTask)

    const toggleComplete = async () => {
        const updated = { ...task, completed: !task.completed }

        updateStoreTask(updated)

        try {
            const res = await updateTask(task.id || task._id, updated)

            const updatedFromServer = {
                ...res.data,
                id: res.data.id || res.data._id
            }

            updateStoreTask(updatedFromServer)
        } catch (error) {
            toast.error('Error al actualizar tarea')
        }
    }

    const handleDelete = async () => {
        try {
            await deleteTask(task.id || task._id)
            removeTask(task.id || task._id)
            toast.success('Tarea eliminada')
        } catch (error) {
            toast.error('Error al eliminar tarea')
        }
    }

    const handleEdit = () => {
        setSelectedTask(task)
    }

    return (
        <li className="flex justify-between items-center p-2 border-b hover:bg-gray-100 transition">
            <span
                onClick={toggleComplete}
                className={`flex-1 cursor-pointer transition-colors ` +
                    (task.completed
                        ? 'text-red-500 line-through' 
                        : 'text-green-600') 
                }>
                {task.title}
            </span>
            <div className="flex gap-2 ml-4">
                <button 
                    onClick={handleEdit}
                    className="text-blue-500 hover:underline"
                >
                    Editar
                </button>
                <button
                    onClick={handleDelete}
                    className="text-red-500 hover:underline"
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}
