import addIcon from '../assets/add-icon.svg'

import styles from './inputTodo.module.css'

export function InputTodo() {
  return (
    <form action="" className={styles.formAddTodo}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <img src={addIcon} alt="" />
      </button>
    </form>
  )
}
