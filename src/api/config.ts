import { BASE_URL } from "../constants"
import { Univer } from "../types"

const getUniverList = async (): Promise<Univer[]> => {
  const url = [ BASE_URL, 'univers'].join('/')
  const res = await fetch(url)
  return await res.json()
}

const config = {
  getUniverList,
}

export default config