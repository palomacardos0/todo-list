import styles from './todoList.module.css'
import ListIcon from '../assets/list-icon.svg'

import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { Check, Trash } from 'phosphor-react'

interface todoListProps {
  title: string
  id: string
  isComplet: boolean
}

export function TodoList() {
  const [listTodo, setListTodo] = useState([
    {
      title: 'tarefa 1',
      id: uuidv4(),
      isComplet: true
    },
    {
      title: 'tarefa 2',
      id: uuidv4(),
      isComplet: false
    }
  ])

  return (
    <section className={styles.todoContent}>
      <div className={styles.todoContent__header}>
        <div>
          Tarefas criadas
          <span>0</span>
        </div>

        <div>
          Concluídas
          <span>0</span>
        </div>
      </div>

      {listTodo.length === 0 ? (
        <div className={styles.todoContent__empty}>
          <img src={ListIcon} alt="" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      ) : (
        <div>
          {listTodo.map(task => {
            return (
              <div
                className={`${styles.todoContent__task} ${
                  task.isComplet
                    ? styles.todoContent__taskDisabled
                    : styles.todoContent__taskActive
                }`}
                key={task.id}
              >
                <button
                  className={`${styles.todoContent__buttomCheck}  ${
                    task.isComplet
                      ? styles.todoContent__buttomDisabled
                      : styles.todoContent__buttomActive
                  }`}
                >
                  {task.isComplet && (
                    <Check size={12} weight="bold" color="white" />
                  )}
                </button>
                <p
                  className={`${styles.todoContent__paragraph} ${
                    task.isComplet
                      ? styles.todoContent__paragraphDisabled
                      : styles.todoContent__paragraphActive
                  }`}
                >
                  {task.title}
                </p>
                <Trash size={16} />
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
