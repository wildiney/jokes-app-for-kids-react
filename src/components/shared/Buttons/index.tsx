import type { FC, ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonsProps {
  children: ReactNode
  action: () => void
}

const Buttons: FC<ButtonsProps> = ({ children, action }) => {
  return (
      <button className={styles.btn} onClick={action}>{children}</button>
  )
}
export default Buttons
