import React from 'react'
import { Card, Cell, Div, Separator } from '@vkontakte/vkui'
import { Icon28ArrowDownOutline, Icon28ArrowUpOutline, Icon28ChevronDownOutline, Icon28ChevronUpOutline } from '@vkontakte/icons'
import { isCurrentWeek, isPassWeek } from '../../utils'
import { Univer } from '../../types'

type QouteProps = {
  univer: Univer
}

const UniverInfo: React.FC<QouteProps> = ({
  univer,
}) => {
  const [weeksIsOpen, setWeeksIsOpen] = React.useState(false)
  const toggleWeeks = () => {
    setWeeksIsOpen(!weeksIsOpen)
  }

  const [timeLessonsIsOpen, setTimeLessonsIsOpen] = React.useState(false)
  const toggleTimeLessons = () => {
    setTimeLessonsIsOpen(!timeLessonsIsOpen)
  }

  return (<>
    <Separator/>
    <Div>
      <Card>
        <Cell
          onClick={toggleWeeks}
          after={!weeksIsOpen ? <Icon28ChevronDownOutline /> : <Icon28ChevronUpOutline/>}
        >Учебные недели</Cell>
        {weeksIsOpen && <Separator/>}
        {weeksIsOpen && univer.weeks.map((week, i) => {
          const startRangString = new Date(week.range[0]).toLocaleDateString()
          const endRangeString = new Date(week.range[1]).toLocaleDateString()
          const rangeString = startRangString + ' - ' + endRangeString
          
          const weekPassed = isPassWeek(week.range[1])

          return <Cell
            key={i}
            disabled
            description={rangeString}
            after={
              week.weekType === 0
                ? <Icon28ArrowUpOutline fill={isCurrentWeek(week) ? 'tomato' : 'teal'}/>
                : <Icon28ArrowDownOutline fill={isCurrentWeek(week) ? 'tomato' : 'violet'}/>
            }
          >
            <span style={{
              textDecoration: weekPassed ? 'line-through': 'none',
              opacity: weekPassed ? 0.5 : 1,
              color: isCurrentWeek(week) ? 'tomato' : '',
            }}>
              {week.weekType === 0?'Числитель(четная)' : 'Знаменатель(нечетная)'}
            </span>
          </Cell>
        })}
      </Card>
    </Div>
    <Div style={{paddingTop:0}}>
      <Card>
        <Cell
          onClick={toggleTimeLessons}
          after={!timeLessonsIsOpen ? <Icon28ChevronDownOutline /> : <Icon28ChevronUpOutline/>}
        >Время занятий</Cell>
        {timeLessonsIsOpen && <Separator/>}
        {timeLessonsIsOpen && univer.timeLessons.map((time, i) => {
          return <Cell
            key={i}
            disabled
            description={`${i+1} пара`}
          >{time}</Cell>
        })}
      </Card>
    </Div>
  </>)
}

export default UniverInfo