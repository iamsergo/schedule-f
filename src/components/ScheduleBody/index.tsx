import React from 'react'
import { Icon56GhostOutline } from '@vkontakte/icons'
import { Card, Placeholder } from '@vkontakte/vkui'
import { Lesson } from '../../types'
import LessonRow from '../LessonRow'

type ScheduleBodyProps = {
  lessons: Lesson[]
  onGoToSchedule: (href: string) => void
}

const ScheduleBody: React.FC<ScheduleBodyProps> = ({
  lessons,
  onGoToSchedule,
}) => {
  return (
    <Card className="schedule__body">
      {lessons.length === 0
        ? <Placeholder
            className="schedule__empty-placeholder"
            icon={<Icon56GhostOutline style={{color:"teal"}}/>}
          >Выходной</Placeholder>
        : lessons.map((lesson, j) => {
            return <LessonRow
              key={j}
              lesson={lesson}
              onGoToSchedule={onGoToSchedule}
            />
          })}
    </Card>
  )
}

export default ScheduleBody