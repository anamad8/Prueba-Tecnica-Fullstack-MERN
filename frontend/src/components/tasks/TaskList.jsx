import { useEffect } from 'react'
import { getTasks } from '../../api/tasks'
import { useTaskStore } from '../../stores/taskStore'
import TaskItem from './TaskItem'
import { toast } from 'react-toastify'

export default function TaskList() {
    const tasks = useTaskStore(state => state.tasks)
    const setTasks = useTaskStore(state => state.setTasks)
    
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await getTasks()
                setTasks(res.data.data)  
            } catch (error) {
                toast.error('Error al cargar tareas')
            }
        }

        fetchTasks()
    }, [setTasks]) 

    return (
        <>
            <p>Mi lista de tareas</p>
            <ul>
                {tasks.length === 0 ? (
                    <p>No hay tareas disponibles</p>
                ) : (
                    tasks.map(task => (
                        <TaskItem key={task.id} task={task} />
                    ))
                )}
            </ul>
        </>
    )
}
