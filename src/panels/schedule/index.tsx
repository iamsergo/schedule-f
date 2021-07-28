import React from 'react'
import { Button, Card, Div, Gallery, Link, Panel, PanelHeader, PanelHeaderBack, Placeholder, SimpleCell, Spinner, Tabs, TabsItem } from '@vkontakte/vkui'
import { Icon56GhostOutline, Icon28ArrowUturnLeftOutline, Icon28HomeOutline, Icon28MoreVertical   } from '@vkontakte/icons';
import { useDispatch, useSelector } from 'react-redux'
import LessonRow from '../../components/LessonRow'
import { RootState } from '../../store/rootReducer'
import { DayRange, HrefTitle, PanelProps, WeekRange } from '../../types'
import { getLessonsInDay } from '../../utils'
import './Schedule.sass'
import { clearScheduleHistory, requestSchedule, scheduleHistoryBack } from '../../store/slices/schedule';
import { setActivePanel } from '../../store/slices/navigation';
import { MAIN_PANEL } from '../../constants';
import ScheduleBody from '../../components/ScheduleBody';

const DAYS = [
  { id: 0, title: 'ПН' },
  { id: 1, title: 'ВТ' },
  { id: 2, title: 'СР' },
  { id: 3, title: 'ЧТ' },
  { id: 4, title: 'ПТ' },
  { id: 5, title: 'СБ' },
]
const WEEKS = [
  { id: 0, title: 'Числитель'},
  { id: 1, title: 'Знаменатель'},
]

const SchedulePanel: React.FC<PanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const { isLoading, error, schedule, scheduleHistoryHrefs, } = useSelector((s: RootState) => s.schedule)
  const { user } = useSelector((s: RootState) => s.user)

  const [currentDay, setCurrentDay] = React.useState<DayRange>(0)
  const [currentWeek, setCurrentWeek] = React.useState<WeekRange>(0)

  const goToMain = () => {
    dispatch(setActivePanel(MAIN_PANEL))
    dispatch(clearScheduleHistory())
  }

  const goBack = () => {
    if(scheduleHistoryHrefs.length === 1)
    {
      goToMain()
    }
    else
    {
      dispatch(scheduleHistoryBack())
    }
  }

  const [isActionsOpened, setIsActionOpened] = React.useState(false)
  const showActions = () => {
    console.log()
    setIsActionOpened(true)
  }

  const goToSchedule = (tail: string) => {
    dispatch(requestSchedule({
      univer: user!.univer!.code,
      tail,
    }))
  }

  const cardRef = React.useRef<HTMLDivElement>(null)

  let content

  if(isLoading)
  {
    content = <Spinner />
  }
  else if(error)
  {
    content = <Placeholder
      stretched
      action={
        <Button onClick={() => {
          dispatch(requestSchedule(error.payload))
        }}>Повторить</Button>}
    >{error.message}</Placeholder>
  }
  else if(schedule)
  {
    content = ( <>      
      <div className="schedule__card" ref={cardRef}>
        <Gallery
          style={{height:'100%'}}
          slideIndex={currentDay}
          onChange={d => setCurrentDay(d as DayRange)}
        >
          {DAYS.map((_,i) => {
            const lessons = getLessonsInDay(schedule.lessons, i as DayRange, currentWeek)
            return <ScheduleBody key={i} lessons={lessons} onGoToSchedule={goToSchedule}/>
          })}
        </Gallery>
      </div>

      <Card style={{marginTop:8}}>

        <Tabs>
          {WEEKS.map(week => {
            return <TabsItem
              key={week.id}
              selected={week.id === currentWeek}
              onClick={() => setCurrentWeek(week.id as WeekRange)}
            >{week.title}</TabsItem>
          })}
        </Tabs>
        <Tabs>
          {DAYS.map(day => {
            return <TabsItem
              key={day.id}
              selected={day.id === currentDay}
              onClick={() => setCurrentDay(day.id as DayRange)}
            >{day.title}</TabsItem>
          })}
        </Tabs>
        <SimpleCell
          disabled
          before={<Icon28ArrowUturnLeftOutline onClick={goBack} width={20} style={{marginRight: 12, color:'teal'}}/>}
          after={<Icon28MoreVertical onClick={showActions} width={20} style={{color:'violet'}}/>}
        >
          <Link>{schedule.title}</Link>
        </SimpleCell>
      </Card>
    </>)
  }

  return (
    <Panel id={id}>
      <PanelHeader
        separator={false}
        left={
          <Icon28HomeOutline onClick={goToMain} />
        }
      />
      <Div className="schedule__wrapper">
        {content}
      </Div>
    </Panel>
  )
}

export default SchedulePanel