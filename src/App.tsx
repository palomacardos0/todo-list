import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { v4 as uuidv4 } from 'uuid'

import './global.css'
import { useState } from 'react'
import { InputTodo } from './components/InputTodo'

interface TaksProps {
  title: string
  id: string
  isComplet: boolean
}

function App() {
  const [listTodo, setListTodo] = useState([
    {
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      id: uuidv4(),
      isComplet: false
    },
    {
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      id: uuidv4(),
      isComplet: true
    },
    {
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      id: uuidv4(),
      isComplet: true
    }
  ])

  function handleChangeTaskStatus(id: string) {
    const task = listTodo.map(tsk => {
      if (tsk.id === id) {
        return { ...tsk, isComplet: !tsk.isComplet }
      }
      return tsk
    })
    setListTodo(task)
  }

  function handleDeleteTask(id: string) {
    const task = listTodo.filter(task => task.id !== id)
    setListTodo(task)
  }

  function addTask(task: TaksProps) {
    setListTodo([task, ...listTodo])
  }
  return (
    <div className="App">
      <Header />
      <InputTodo addTask={addTask} />
      <TodoList
        listTodo={listTodo}
        handleChangeTaskStatus={handleChangeTaskStatus}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  )
}

export default App
