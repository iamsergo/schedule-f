import { DayRange, HrefTitle, Lesson, Stats, Univer, WeekRange, WeekTypeRange } from "../types";

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

export const getCurrentDay = (): DayRange => {
  const dayId = new Date().getDay()

  return (dayId > 0 ? dayId - 1 : dayId) as DayRange
}

export const getDaysStats = (
  startDate: number,
  endDate: number,
): {
  passDays: number,
  countDays: number,
  toEndDays: number,
} => {
  const DAYS = 1000 * 60 * 60 * 24
  const now = new Date().getTime()
  const start = new Date(startDate).getTime()
  const end = new Date(endDate).getTime()

  const countDays = Math.ceil((end - start) / DAYS)
  const passDays = Math.ceil((now - start) / DAYS)
  const toEndDays = Math.ceil((end - now) / DAYS)

  return { passDays: passDays < 0 ? 0 : passDays, countDays, toEndDays }
}

export const isPassWeek = (weekEnd: number): boolean => {
  const now = new Date().getTime()
  return now > weekEnd
}

export const isCurrentWeek = (week: WeekTypeRange): boolean => {
  const now = new Date().getTime()
  const [start,end] = week.range
  return start <= now && now <= end
}

export const getCurrentWeek = (weeks: WeekTypeRange[]): WeekRange => {
  const currentWeek = weeks.find(week => isCurrentWeek(week))

  if(!currentWeek) return 0

  return currentWeek.weekType
}

export const getDiff = (their: Lesson[], my: Lesson[]): Lesson[] => {
  const isIntersection = (a: Lesson, b: Lesson) => {
    const dayEqual = a.day === b.day
    const lessonNumEqual = a.lesson === b.lesson
    const weekEqual = a.week === b.week || a.week === 2 || b.week === 2
    const groupEqual = a.group === b.group || a.group === 2 || b.group === 2

    return dayEqual && lessonNumEqual && weekEqual && groupEqual
  }

  return their.filter(theirLesson => !my.find(myLesson => isIntersection(theirLesson, myLesson)))
}

export const getStatsForLesson = ({
  lesson,
  lessons,
  currentUniver,
}: {
  lesson: Lesson,
  lessons: Lesson[],
  currentUniver: Univer
}): { stats: Stats, fromWhoms: HrefTitle[] } => {
  const { subject, time } = lesson
  const { weeks, startDate } = currentUniver

  const stats: Stats = {
    lec: {pass:0,total:0},
    pr: {pass:0,total:0},
    lab: {pass:0,total:0},
  }

  const thisLessons = lessons.filter(lesson => lesson.subject === subject)
  const thisLessons0 = thisLessons.filter(l => l.week === 0)
  const thisLessons1 = thisLessons.filter(l => l.week === 1)
  const thisLessons2 = thisLessons.filter(l => l.week === 2)

  const weeks0Count = weeks.filter(w => w.weekType === 0).length
  const weeks1Count = weeks.filter(w => w.weekType === 1).length

  stats.lec.total =
    weeks0Count * thisLessons0.filter(l => l.type === 0).length +
    weeks1Count * thisLessons1.filter(l => l.type === 0).length +
    (weeks0Count + weeks1Count) * thisLessons2.filter(l => l.type === 0).length

  stats.pr.total =
    weeks0Count * thisLessons0.filter(l => l.type === 1).length +
    weeks1Count * thisLessons1.filter(l => l.type === 1).length +
    (weeks0Count + weeks1Count) * thisLessons2.filter(l => l.type === 1).length

  stats.lab.total =
    weeks0Count * thisLessons0.filter(l => l.type === 2).length +
    weeks1Count * thisLessons1.filter(l => l.type === 2).length +
    (weeks0Count + weeks1Count) * thisLessons2.filter(l => l.type === 2).length


  const now = new Date()
  const nowMs = now.getTime()
  const startMs = new Date(startDate).getTime()

  if(nowMs - startMs < 0)
  {
    return {
      fromWhoms: getFromWhomsList(thisLessons),
      stats: {
        lec: {pass:0,total:stats.lec.total},
        pr: {pass:0,total:stats.pr.total},
        lab: {pass:0,total:stats.lab.total},
      }
    }
  }

  const currentWeekIdx = weeks.findIndex(w => {
    const [start, end] = w.range
    return start <= nowMs && nowMs <= end
  })
  const passedWeeks = weeks.slice(0, currentWeekIdx)

  const weeksPassed0Count = passedWeeks.filter(w => w.weekType === 0).length
  const weeksPassed1Count = passedWeeks.filter(w => w.weekType === 1).length

  stats.lec.pass =
    weeksPassed0Count * thisLessons0.filter(l => l.type === 0).length +
    weeksPassed1Count * thisLessons1.filter(l => l.type === 0).length +
    (weeks0Count + weeksPassed1Count) * thisLessons2.filter(l => l.type === 0).length

  stats.pr.pass =
    weeksPassed0Count * thisLessons0.filter(l => l.type === 1).length +
    weeksPassed1Count * thisLessons1.filter(l => l.type === 1).length +
    (weeksPassed0Count + weeksPassed1Count) * thisLessons2.filter(l => l.type === 1).length

  stats.lab.pass =
    weeksPassed0Count * thisLessons0.filter(l => l.type === 2).length +
    weeksPassed1Count * thisLessons1.filter(l => l.type === 2).length +
    (weeksPassed0Count + weeksPassed1Count) * thisLessons2.filter(l => l.type === 2).length


  const currentWeek = weeks[currentWeekIdx]
  if(currentWeek)
  {
    const d = now.getDay()
    const currentDay = d === 0 ? 6 : d - 1
    
    const thisLessonsEarlier = thisLessons
      .filter(lesson => {
        if(lesson.week !== currentWeek.weekType && lesson.week !== 2) return false
        if(lesson.day < currentDay) return true
        if(lesson.day === currentDay)
        {
          const n = now.getTime()
          const [start, end] = time
  
          const [startHours, startMinutes] = start.split(':').map(s=>+s)
          const s = new Date(n).setHours(startHours, startMinutes)
          if(s > n) return false
  
          const [endHours, endMinutes] = end.split(':').map(s=>+s)
          const e = new Date(n).setHours(endHours, endMinutes)
          if(n > e) return false
  
          return true
        }
        return false
      })
  
    thisLessonsEarlier.forEach(lesson => {
      const typeLesson = (['lec','pr','lab'][lesson.type]) as keyof Stats
      stats[typeLesson].pass++
    })
  }

  const fromWhoms = getFromWhomsList(thisLessons)

  return { stats, fromWhoms }
}

export const isCurrentLesson = (lessonTime: number[][]): boolean => {
  const TEN_MINUTES = 10 * 60 * 1000
  const now = new Date().getTime()

  const [start, end] = lessonTime
  
  const [startHours, startMinutes] = start
  const lessonStart = new Date().setHours(startHours, startMinutes) - TEN_MINUTES
  if(lessonStart > now) return false

  const [endHours, endMinutes] = end
  const lessonEnd = new Date().setHours(endHours, endMinutes)
  if(lessonEnd < now) return false

  return true
}