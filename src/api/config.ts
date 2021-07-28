import { BASE_URL } from "../constants"
import { UniverData } from "../types"

const getUniverList = async (): Promise<UniverData[]> => {
  const url = [ BASE_URL, 'config/univers'].join('/')
  const res = await fetch(url)
  return await res.json()
}

export default {
  getUniverList,
}