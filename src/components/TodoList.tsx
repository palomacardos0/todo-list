import styles from './todoList.module.css'
import ListIcon from '../assets/list-icon.svg'

export function TodoList() {
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

      <div className={styles.todoContent__empty}>
        <img src={ListIcon} alt="" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong> <br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </section>
  )
}
