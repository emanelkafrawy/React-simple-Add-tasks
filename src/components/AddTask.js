import React, { useState } from 'react'

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('please add a text')
            return;
        }
        onAddTask({ text, reminder });
        setReminder('')
        setText('')
    }
    return (
        <form className='add-form ' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input placeholder='Add Taxt' type='text' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className=' form-control form-control-check'>
                <label>Set Reminder</label>
                <input checked={reminder} value={reminder} type='checkbox' onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input

                type='submit'
                className='btn btn-block'
                value='save' />
        </form>
    )
}

export default AddTask