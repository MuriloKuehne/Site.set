type ListProps = {
  id: number
  name: string
}

async function getUsers(): Promise<ListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" },
      ])
    }, 5000)
  })
}

async function UserList() {
  const userList = await getUsers()
  return (
    <div className="container mx-auto p-4 text-white">
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function UserPage() {
  return (
    <>
      <h2>User List</h2>
      <UserList />
    </>
  )
}
