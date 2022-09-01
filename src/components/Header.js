// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title, onAdd, showAddTask }) => {
    return (
        <header>
            <div className='header' >{title}</div>
            <Button onClick={onAdd} showAddTask={showAddTask} />
        </header>
    )
}

Header.defaultProps = {
    title: 'default task'
}
Header.propTypes = {
    title: PropTypes.string,
}


//css in js
// const headStyle = {
//     color: "red",
//     background: "black"
// }
export default Header