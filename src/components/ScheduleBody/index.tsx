import React from 'react'
import { Icon56GhostOutline } from '@vkontakte/icons'
import { Card, Placeholder } from '@vkontakte/vkui'
import { Lesson } from '../../types'
import LessonRow from '../LessonRow'
import { isCurrentLesson } from '../../utils'

type ScheduleBodyProps = {
  today: boolean
  lessons: Lesson[]
  onGoToSchedule: (href: string) => void
  onGetStats?: (lesson: Lesson) => void
}

const ScheduleBody: React.FC<ScheduleBodyProps> = ({
  today,
  lessons,
  onGoToSchedule,
  onGetStats,
}) => {
  return (
    <Card className="schedule__body">
      {lessons.length === 0
        ? <Placeholder
            className="schedule__empty-placeholder"
            icon={<Icon56GhostOutline style={{color:"teal"}}/>}
          >Ничего нет</Placeholder>
        : lessons.map((lesson, j) => {
            const lessonTime = lesson.time.map(timeString => timeString.split(':').map(s=>+s))
            const current = today && isCurrentLesson(lessonTime)

            return <LessonRow
              key={j}
              lesson={lesson}
              onGoToSchedule={onGoToSchedule}
              current={current}
              getStats={() => onGetStats && onGetStats(lesson)}
            />
          })}
    </Card>
  )
}

export default ScheduleBody