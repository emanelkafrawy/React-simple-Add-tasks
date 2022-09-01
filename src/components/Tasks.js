import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {tasks.map((task) => {
                return <Task task={task} key={task.id} onDelete={onDelete} onToggle={onToggle} />
            })}
        </>
    )
}

export default Tasks;