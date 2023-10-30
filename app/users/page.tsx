import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Users",
}

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers()

  const users = await usersData

  console.log("Hello")

  return (
    <section>
      <h3>
        <Link href="/home">Back to Home</Link>
        <br />
        {users.map((user) => (
          <>
            <p key={user.id}>
              <Link href={`users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        ))}
      </h3>
    </section>
  )
}
