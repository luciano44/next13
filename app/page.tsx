import Image from "next/image"
import styles from "./page.module.css"
import Button from "../components/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <>
        <h1>Home Page</h1>
        <Link href="/about">About page</Link>
      </>
      <Button>Click Here</Button>
      <Button>Do not Click Here</Button>
      <Button>Click Here only if you want to</Button>
    </main>
  )
}
