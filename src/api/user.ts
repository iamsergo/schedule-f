import { BASE_URL } from "../constants"
import { User } from "../types"

const getUser = async (id: number): Promise<User> => {
  const url = [ BASE_URL, 'users', id].join('/')
  const res = await fetch(url)
  const user = await res.json()

  if(user) return user

  const addUrl = [ BASE_URL, 'users', id ].join('/')
  const addRes = await fetch(addUrl, { method: 'POST' })
  return await addRes.json()  
}

export default {
  getUser,
}