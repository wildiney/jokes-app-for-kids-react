import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <span className={styles.title}>
        <h1>Uncle's Jokes</h1>

      </span>
    </header>
  )
}

export default Header
