import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onToggle }) => {
    // console.log(task);
    return (
        <div onDoubleClick={() => onToggle(task.id)}>
            <h3 key={task.id}>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
        </div>
    )
}

export default Task
