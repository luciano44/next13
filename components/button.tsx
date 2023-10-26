import React from "react"
import styles from "./button.module.css"

type Props = {
  children: String
}

function Button({ children }: Props) {
  return (
    <div className={styles.card}>
      <p>
        {children}
        <span className={styles.cardArrow}>➡️</span>
      </p>
    </div>
  )
}

export default Button
