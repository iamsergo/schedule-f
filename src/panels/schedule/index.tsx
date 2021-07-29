import React from 'react'
import {
  ActionSheet,
  ActionSheetItem,
  Button,
  Card,
  Div,
  Gallery,
  IconButton,
  Link,
  Panel,
  PanelHeader,
  Placeholder,
  SimpleCell,
  Spinner,
  Tabs,
  TabsItem,
} from '@vkontakte/vkui'
import {
  Icon28ArrowUturnLeftOutline,
  Icon28HomeOutline,
  Icon28MoreVertical,
  Icon28DeleteOutline,
  Icon28SortHorizontalOutline,
  Icon28Users3Outline,
  Icon28FavoriteCircleFillYellow,
} from '@vkontakte/icons';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { DayRange, Lesson, PanelProps, WeekRange } from '../../types'
import { getDiff, getLessonsInDay, getStatsForLesson } from '../../utils'
import { clearScheduleHistory, requestSchedule, scheduleHistoryBack, setLessonStats } from '../../store/slices/schedule';
import { setActiveModal, setActivePanel } from '../../store/slices/navigation';
import { MAIN_PANEL } from '../../constants';
import { requestDeleteUserSchedule, requestUpdateUserSchedule } from '../../store/slices/user';
import ScheduleBody from '../../components/ScheduleBody';
import './Schedule.sass'

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
  setPopout,
}) => {
  const dispatch = useDispatch()
  const { isLoading, error, schedule, scheduleHistoryHrefs, } = useSelector((s: RootState) => s.schedule)
  const { user } = useSelector((s: RootState) => s.user)
  const { currentUniver, currentDay, currentWeek } = useSelector((s: RootState) => s.config)

  const [activeDay, setActiveDay] = React.useState<DayRange>(currentDay)
  const [activeWeek, setActiveWeek] = React.useState<WeekRange>(currentWeek)

  const [isDiffShowing, setIsDiffShowing] = React.useState(false)
  const toggleDiffShowing = () => {
    setIsDiffShowing(!isDiffShowing)
  }

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
      setIsDiffShowing(false)
    }
  }

  const saveSchedule = () => {
    setIsDiffShowing(false)
    dispatch(requestUpdateUserSchedule({
      id: user!.id,
      scheduleId: schedule!.href,
    }))
  }

  const deleteSchedule = () => {
    setIsDiffShowing(false)
    dispatch(requestDeleteUserSchedule(user!.id))
  }

  const showActions = () => {
    let toggleScheduleItem =
      user!.schedule && user!.schedule.href === schedule!.href
        ? <ActionSheetItem
            autoclose
            style={{color: 'tomato'}}
            onClick={deleteSchedule}
            before={<Icon28DeleteOutline fill="tomato"/>}
          >Удалить расписание</ActionSheetItem>
        : <ActionSheetItem
            autoclose
            onClick={saveSchedule}
            before={<Icon28FavoriteCircleFillYellow/>}
            subtitle={user!.schedule?'вместо текущего':''}
          >Сохранить расписание</ActionSheetItem>

    const popout = (
      <ActionSheet
        onClose={() => setPopout!(null)}
        iosCloseItem={
          <ActionSheetItem autoclose mode="cancel">
            Отменить
          </ActionSheetItem>
        }
      >
        {false &&
          <ActionSheetItem
            autoclose
            style={{color:'tan'}}
            before={<Icon28Users3Outline fill="tan"/>}
            onClick={()=>{}}
          >Экзамены</ActionSheetItem>
        }
        {user!.schedule && !(user!.schedule.href === schedule!.href) &&
          <ActionSheetItem
            autoclose
            style={{color:'teal'}}
            before={
              <Icon28SortHorizontalOutline
                fill={isDiffShowing?'tomato':'orange'}
                style={{transform:`rotateY(${isDiffShowing?0:180}deg)`}}
              />
            }
            subtitle={
              isDiffShowing
                ? 'Все занятия данного расписания'
                : 'Занятия вне вашего расписания'
              }
            onClick={toggleDiffShowing}
          >
            {isDiffShowing ? 'Расписание без разницы' : 'Разница расписаний'}
          </ActionSheetItem>
        }
        {toggleScheduleItem}
      </ActionSheet>
    )
    setPopout!(popout)
  }

  const goToSchedule = (tail: string) => {
    dispatch(requestSchedule({
      univer: user!.univer!.code,
      tail,
    }))
    setIsDiffShowing(false)
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
    const ls = isDiffShowing ? getDiff(schedule.lessons, user!.schedule!.lessons) : schedule.lessons

    content = ( <>      
      <div className="schedule__card" ref={cardRef}>
        <Gallery
          style={{height:'100%'}}
          slideIndex={activeDay}
          onChange={d => setActiveDay(d as DayRange)}
        >
          {DAYS.map((_,i) => {
            const lessons = getLessonsInDay(ls, i as DayRange, activeWeek)

            return <ScheduleBody
              key={i}
              today={activeDay === currentDay && activeWeek === currentWeek}
              lessons={lessons}
              onGoToSchedule={goToSchedule}
              onGetStats={(lesson: Lesson) => {
                const { stats, fromWhoms } = getStatsForLesson({
                  lesson,
                  lessons: schedule.lessons,
                  currentUniver: currentUniver!,
                })
                dispatch(setLessonStats({
                  title: lesson.subject,
                  stats,
                  fromWhoms,
                }))
                dispatch(setActiveModal('stats'))
              }}
            />
          })}
        </Gallery>
      </div>

      <Card style={{marginTop:8}}>
        <Tabs>
          {WEEKS.map(week => {
            return <TabsItem
              key={week.id}
              selected={week.id === activeWeek}
              onClick={() => setActiveWeek(week.id as WeekRange)}
              style={{color: currentWeek === week.id ? 'tomato': ''}}
            >{week.title}</TabsItem>
          })}
        </Tabs>
        <Tabs>
          {DAYS.map(day => {
            return <TabsItem
              key={day.id}
              selected={day.id === activeDay}
              onClick={() => setActiveDay(day.id as DayRange)}
              style={{color: currentDay === day.id ? 'tomato': ''}}
            >{day.title}</TabsItem>
          })}
        </Tabs>
        <SimpleCell
          disabled
          before={
            <IconButton>
              <Icon28ArrowUturnLeftOutline onClick={goBack} width={20} style={{marginRight: 12, color:'teal'}}/>
            </IconButton>
          }
          after={
            <IconButton>
              <Icon28MoreVertical onClick={showActions} width={20} style={{color:'violet'}}/>
            </IconButton>
          }
        >
          <Link href={`${user!.univer!.baseUrl}${schedule.href}`}>
            {schedule.title}
          </Link>
          {isDiffShowing &&
            <Icon28SortHorizontalOutline className="schedule__icon--diff"/>
          }
          {user?.schedule && user.schedule.href === schedule.href &&
            <Icon28FavoriteCircleFillYellow className="schedule__icon--fav"/>
          }
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