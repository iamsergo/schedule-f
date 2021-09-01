import React from "react";
import { MAIN_PANEL, SCHEDULE_PANEL, SEARCH_PANEL, SETTINGS_PANEL } from "../constants";

export type PanelType =
  | typeof SCHEDULE_PANEL
  | typeof MAIN_PANEL
  | typeof SEARCH_PANEL
  | typeof SETTINGS_PANEL

export type PanelProps = {
  id: PanelType
  setPopout?: (popout: React.ReactNode) => void
}


export type DayRange = 0 | 1 | 2 | 3 | 4 | 5
export type LessonRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type LessonType = 0 | 1 | 2
export type WeekRange = 0 | 1 | 2
export type GroupRange = 0 | 1 | 2 | 3
export type HrefTitle = { title: string, href: string }

export type Lesson = {
  day: DayRange
  lesson: LessonRange
  type: LessonType
  typeTitle: string
  subject: string
  week: WeekRange
  place: string
  group: GroupRange
  fromWhoms: HrefTitle[]
  time: string[]
}

export type Schedule = {
  title: string
  href: string
  lessons: Lesson[]
}

export type WeekTypeRange = {
  range: number[]
  weekType: WeekRange
}

export type Univer = {
  id: number
  title: string
  subtitle: string
  code: string
  baseUrl: string
  startDateStartOfWeek: number
  startDate: number
  firstWeekType: number
  endDate: number
  weeks: WeekTypeRange[]
  timeLessons: string[]
}

export type User = {
  id: number
  univer: UniverData | null
  schedule: Schedule | null
}

export type UserData = {
  id: number
  photo: string
  firstName: string
  lastName: string
}

export type StatsRecord = {
  pass: number
  total: number
}

export type Stats = {
  lec: StatRecord
  lab: StatRecord
  pr: StatRecord
}

export type Qoute = {
  text : string
  author: string
  day : number
  color: string
}