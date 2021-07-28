import { DayRange, HrefTitle, Lesson, WeekRange } from "../types";

export const getLessonsInDay = (
  lessons: Lesson[],
  day: DayRange,
  week: WeekRange
): Lesson[] => {
  return lessons.filter(lesson => {
    const inDay = lesson.day === day
    const inWeek = lesson.week === week || lesson.week === 2

    return inDay && inWeek
  })
}

export const getFromWhomsList = (lessons: Lesson[]): HrefTitle[] => {
  const lessonsMap: {
    [key: string]: HrefTitle
  } = {}
  lessons.forEach(lesson => {
    lesson.fromWhoms.forEach(fromWhom => {
      if(!lessonsMap[fromWhom.href])
      {
        lessonsMap[fromWhom.href] = fromWhom
      }
    })
  })

  return Object.values(lessonsMap)
}