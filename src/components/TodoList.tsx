import styles from './todoList.module.css'
import ListIcon from '../assets/list-icon.svg'

import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { Check, Trash } from 'phosphor-react'

interface ListTodoProps {
  listTodo: TaksProps[]
  handleDeleteTask: (id: string) => void
  handleChangeTaskStatus: (id: string) => void
}
interface TaksProps {
  title: string
  id: string
  isComplet: boolean
}

export function TodoList({
  listTodo,
  handleChangeTaskStatus,
  handleDeleteTask
}: ListTodoProps) {
  // const [listTodo, setListTodo] = useState([
  //   {
  //     title:
  //       'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  //     id: uuidv4(),
  //     isComplet: false
  //   },
  //   {
  //     title:
  //       'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  //     id: uuidv4(),
  //     isComplet: true
  //   },
  //   {
  //     title:
  //       'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  //     id: uuidv4(),
  //     isComplet: true
  //   }
  // ])

  return (
    <section className={styles.todoContent}>
      <div className={styles.todoContent__header}>
        <div>
          Tarefas criadas
          <span>{listTodo.length}</span>
        </div>

        <div>
          Concluídas
          <span>
            {listTodo.filter(task => task.isComplet).length} de{' '}
            {listTodo.length}
          </span>
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
                  onClick={() => handleChangeTaskStatus(task.id)}
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
                <button
                  className={styles.todoContent__deletTask}
                  onClick={() => {
                    handleDeleteTask(task.id)
                  }}
                >
                  <Trash size={16} />
                </button>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
