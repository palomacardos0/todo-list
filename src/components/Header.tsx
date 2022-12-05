import LogoImage from '../assets/todo-logo.svg'

import styles from './header.module.css'
import { InputTodo } from './InputTodo'

export function Header() {
  return (
    <header>
      <div className={styles.logoContainer}>
        <img src={LogoImage} alt="" />
        <span className={styles.logoText}>
          to<span>do</span>
        </span>
      </div>
      <InputTodo />
    </header>
  )
}
