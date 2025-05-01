import { create } from 'zustand'

export const useTaskStore = create((set) => ({
    tasks: [], 
    selectedTask: null, 

    setSelectedTask: (task) => set({ selectedTask: task }),

    addTask: (task) => set(state => ({
        tasks: [...state.tasks, task]
    })),

    setTasks: (newTasks) => set({ tasks: newTasks }),

    deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== id)
    })),

    updateTask: (updatedTask) =>
        set((state) => {
            const ids = state.tasks.map(t => t.id || t._id)
            const newTasks = state.tasks.map((task) =>
                (task.id || task._id) === (updatedTask.id || updatedTask._id)
                    ? updatedTask
                    : task
            )
            return { tasks: newTasks }
        }),
}))