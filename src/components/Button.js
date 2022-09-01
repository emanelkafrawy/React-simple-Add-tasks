import React from 'react'

const Button = ({ onClick, showAddTask }) => {


    return (
        <button className='btn' onClick={onClick} > {!showAddTask ? 'Add' : 'close'}</button>
    )
}

export default Button