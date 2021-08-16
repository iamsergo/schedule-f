import { BASE_URL } from "../constants"
import { HrefTitle, Schedule } from "../types"

const getSchedule = async ({
  univer,
  tail,
} : {
  univer: string,
  tail: string,
}): Promise<Schedule> => {
  const queryTail = new URLSearchParams(`tail=${tail}`).toString()
  const url = [BASE_URL, "schedule", univer].join("/") + '?' + queryTail
  const res = await fetch(url)
  return await res.json()
}

const searchSchedule = async ({
  univer,
  q,
} : {
  univer: string,
  q: string,
}) : Promise<HrefTitle[]> => {
  const url = [ BASE_URL, 'schedule/search', univer, q, ].join('/')
  const res = await fetch(url)
  return await res.json()
}

const schedule = {
  getSchedule,
  searchSchedule,
}

export default schedule