import Header from '../components/layout/Header'
import TaskForm from '../components/tasks/TaskForm'
import TaskList from '../components/tasks/TaskList'

export default function Dashboard() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <TaskForm />
        <TaskList />
      </main>
    </div>
  )
}
