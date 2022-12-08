import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import styles from './inputTodo.module.css'

interface InputTodoProps {
  addTask: (task: TaksProps) => void
}

interface TaksProps {
  title: string
  id: string
  isComplet: boolean
}

export function InputTodo({ addTask }: InputTodoProps) {
  const [task, setTask] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const newTask = {
      title: task,
      id: uuidv4(),
      isComplet: false
    }
    addTask(newTask)
  }

  function handleNewTasKChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }
  return (
    <form action="" className={styles.formAddTodo} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        name="task"
        onChange={handleNewTasKChange}
      />
      <button type="submit">
        Criar <PlusCircle size={16} color={'white'} />
      </button>
    </form>
  )
}
