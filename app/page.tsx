import Image from "next/image"
import styles from "./page.module.css"
import Button from "../components/button"

export default function Home() {
  return (
    <main className={styles.main}>
      <Button>Click Here</Button>
      <Button>Do not Click Here</Button>
      <Button>Click Here only if you want to</Button>
    </main>
  )
}
