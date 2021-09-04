import React from 'react'
import { Card, Cell, CellButton, Div, Header, IconButton, Separator } from '@vkontakte/vkui'
import { User } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { requestSchedule } from '../../store/slices/schedule'
import { setActivePanel } from '../../store/slices/navigation'
import { requestDeleteUserSchedule } from '../../store/slices/user'
import { SCHEDULE_PANEL, SEARCH_PANEL } from '../../constants'
import { Icon28AddOutline, Icon28ChevronDownOutline, Icon28ChevronUpOutline, Icon28DeleteOutline } from '@vkontakte/icons'
import ScheduleBody from '../ScheduleBody'
import { getDayNameByIndex, getFromWhomsList, getLessonsInDay } from '../../utils'
import { RootState } from '../../store/rootReducer'

type QouteProps = {
  user: User
}

const UserSchedule: React.FC<QouteProps> = ({
  user,
}) => {
  const dispatch = useDispatch()

  const {
    currentWeek,
    currentDay,
  } = useSelector((s: RootState) => s.config)

  const goToSearchSchedule = () => {
    dispatch(setActivePanel(SEARCH_PANEL))
  }

  const goToSchedule = (tail: string) => {
    dispatch(requestSchedule({
      univer: user!.univer!.code,
      tail,
    }))
    dispatch(setActivePanel(SCHEDULE_PANEL))
  }

  const deleteSchedule = () => {
    dispatch(requestDeleteUserSchedule(user!.id))
  }

  const [fromWhomsIsOpen, setFromWhomsIsOpen] = React.useState(false)
  const toggleFromWhoms = () => {
    setFromWhomsIsOpen(!fromWhomsIsOpen)
  }

  if(!user.schedule)
  {
    return(
      <Div style={{paddingTop:0}}>
        <Card>
          <Cell
            after={<Icon28AddOutline fill="orange"/>}
            onClick={goToSearchSchedule}
          >Расписание не выбрано</Cell>
        </Card>
      </Div>
    )
  }

  const lessonsToday = getLessonsInDay(user.schedule.lessons, currentDay, currentWeek)
  const todayString = `${getDayNameByIndex(currentDay)}, ${new Date().toLocaleDateString()}`


  return (<>
    <Div style={{paddingTop:0}}>
      <Card>
        <Cell
          disabled
          after={
            <IconButton>
              <Icon28DeleteOutline fill="tomato" onClick={deleteSchedule}/>
            </IconButton>
          }
        >{user.schedule.title}</Cell>
        <Separator/>

        <Header subtitle={todayString}>
          Расписание на сегодня
        </Header>
        <div style={{padding:'0px 8px'}}>
          <ScheduleBody today lessons={lessonsToday} onGoToSchedule={goToSchedule} />
        </div>
        <br/><Separator/>
        
        <CellButton
          onClick={() => goToSchedule(user.schedule!.href)}
        >Полное расписание</CellButton>
      </Card>
    </Div>
    <Div style={{paddingTop:0}}>
      <Card>
        <Cell
          onClick={toggleFromWhoms}
          after={!fromWhomsIsOpen ? <Icon28ChevronDownOutline /> : <Icon28ChevronUpOutline/>}
        >Преподаватели/Группы</Cell>
        {fromWhomsIsOpen && getFromWhomsList(user.schedule.lessons).map(fromWhom => {
          return <CellButton
            key={fromWhom.href}
            onClick={() => goToSchedule(fromWhom.href)}
          >{fromWhom.title}</CellButton>
        })}
      </Card>
    </Div>
  </>)
}

export default UserSchedule