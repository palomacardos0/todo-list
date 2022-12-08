import LogoImage from '../assets/todo-logo.svg'

import styles from './header.module.css'

export function Header() {
  return (
    <header>
      <div className={styles.logoContainer}>
        <img src={LogoImage} alt="" />
        <span className={styles.logoText}>
          to<span>do</span>
        </span>
      </div>
    </header>
  )
}
