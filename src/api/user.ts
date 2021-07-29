import { BASE_URL } from "../constants"
import { User } from "../types"

const getUser = async (id: number): Promise<User> => {
  const url = [ BASE_URL, 'users', id].join('/')
  const res = await fetch(url)
  const user = await res.json()

  return user  
}

const updateUserUniver = async ({
  id, univerId,
}: { id: number, univerId: number }): Promise<User> => {
  const url = [ BASE_URL, 'users', id, 'univer'].join('/')
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({univerId}),
  }
  const res = await fetch(url, options)
  const user = await res.json()

  return user  
}

const deleteUserUniver = async (id: number): Promise<User> => {
  const url = [ BASE_URL, 'users', id, 'univer'].join('/')
  const options = {
    method: 'DELETE',
  }
  const res = await fetch(url, options)
  const user = await res.json()

  return user  
}

const updateUserSchedule = async ({
  id, scheduleId,
}: { id: number, scheduleId: string }): Promise<User> => {
  const url = [ BASE_URL, 'users', id, 'schedule'].join('/')
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({scheduleId}),
  }
  const res = await fetch(url, options)
  const user = await res.json()

  return user  
}

const deleteUserSchedule = async (id: number): Promise<User> => {
  const url = [ BASE_URL, 'users', id, 'schedule'].join('/')
  const options = {
    method: 'DELETE',
  }
  const res = await fetch(url, options)
  const user = await res.json()

  return user  
}

const user = {
  getUser,
  updateUserSchedule,
  deleteUserSchedule,
  updateUserUniver,
  deleteUserUniver,
}

export default user