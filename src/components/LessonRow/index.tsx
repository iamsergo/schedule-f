import React from 'react'
import { Lesson } from '../../types'
import './LessonRow.sass'

type LessonRowProps = {
  current: boolean
  lesson: Lesson
  onGoToSchedule: (href: string) => void
  getStats?: () => void
}

const LessonRow: React.FC<LessonRowProps> = ({
  current,
  lesson,
  onGoToSchedule,
  getStats,
}) => {
  return (
    <div className={`lesson-row${current ? ' lesson-row--current' : ''}`}>
      <div className="lesson-row__time">
        {lesson.time.map((time, i) => {
          return <div
            key={time}
            className={`lesson-row__time-item lesson-row__time-item--${i === 0 ? 'start' : 'end'}`}
          >{time}</div>
        })}
      </div>
      <div className={`lesson-row__body lesson-row__body--${lesson.type}`}>
        <div className="lesson-row__place">
          <span className={`lesson-row__type-title--${lesson.type}`}>
            {lesson.typeTitle}
          </span>
          {lesson.place}
        </div>
        <div onClick={() => getStats && getStats()} className="lesson-row__subject">
          {lesson.subject}
        </div>
        <div className="lesson-row__fromWhoms">
          {lesson.fromWhoms.map(fromWhom => {
            return <div
              key={fromWhom.href}
              className="lesson-row__fromWhoms-item"
              onClick={() => onGoToSchedule(fromWhom.href)}
            >{fromWhom.title}</div>
          })}
        </div>
      </div>
      <div className="lesson-row__after"></div>
    </div>
  )
}

export default LessonRow