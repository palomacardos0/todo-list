import { PlusCircle } from 'phosphor-react'

import styles from './inputTodo.module.css'

export function InputTodo() {
  return (
    <form action="" className={styles.formAddTodo}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  )
}
