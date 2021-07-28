import { MAIN_PANEL, SCHEDULE_PANEL, SEARCH_PANEL, SETTINGS_PANEL } from "../constants";

export type PanelType =
  | typeof SCHEDULE_PANEL
  | typeof MAIN_PANEL
  | typeof SEARCH_PANEL
  | typeof SETTINGS_PANEL

export type PanelProps = {
  id: PanelType
}


export type DayRange = 0 | 1 | 2 | 3 | 4 | 5
export type LessonRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type LessonType = 0 | 1 | 2
export type WeekRange = 0 | 1 | 2
export type GroupRange = 0 | 1 | 2
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

export type UniverData = {
  id: number
  title: string
  subtitle: string
  code: string
  baseUrl: string
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