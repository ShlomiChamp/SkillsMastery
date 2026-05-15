interface User {
  id: string
  name: string
  email: string
}

export const fetchUserById = async (id: string): Promise<User> => {
  const response = await fetch(`https://api.example.com/users/${id}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch user ${id}: ${response.status}`)
  }

  return response.json() as Promise<User>
}
