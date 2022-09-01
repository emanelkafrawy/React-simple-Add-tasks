import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import React from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(
    false
  )
  const [tasks, setTasks] = useState(
    []
  )

  // use effect
  // useEffect(() => {
  //   const fetchTask = async () => {
  //     const response = await fetch('http://localhost:5000/tasks')
  //     const data = await response.json()
  //     // console.log(data);
  //   }
  //   fetchTask();
  // }, [])
  // end of use effect
  const deleteTask = (id) => {
    const deleted = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(deleted)
  }

  const OnAddTask = (task) => {
    let id = Math.floor(Math.random() * 10000) + 1
    tasks.push({ id, ...task })
    setTasks([...tasks])
  }
  const toggleReminder = (id) => {
    const changed = tasks.map((task) => {
      // return task.id === id ? task.text = "changed" : task.text
      return task.id === id ? { ...task, text: "changed" } : task
    })
    setTasks(changed)
  }
  // like if else  {showAddTask && <AddTask onAddTask={OnAddTask} />}
  return (
    <div>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAddTask={OnAddTask} showAddTask />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks exist'}
    </div>

  )
}

export default App