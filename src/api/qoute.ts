import { BASE_URL } from "../constants"
import { Qoute } from "../types"

const getQoute = async (): Promise<Qoute | null> => {
  const url = [ BASE_URL, 'qoute', new Date().getTime()].join('/')
  const res = await fetch(url)
  return await res.json()
}

const qoute = {
  getQoute,
}

export default qoute