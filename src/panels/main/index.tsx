import React from 'react'
import {
  Button,
  Card,
  Cell,
  CellButton,
  Div,
  Header,
  IconButton,
  Panel,
  PanelHeader,
  Placeholder,
  Progress,
  Separator,
  Spinner,
  usePlatform,
} from '@vkontakte/vkui'
import {
  Icon28Search,
  Icon28SettingsOutline,
  Icon28ChevronDownOutline,
  Icon28ChevronUpOutline,
  Icon28DeleteOutline,
  Icon28AddOutline,
  Icon28EducationOutline,
  Icon28ArrowUpOutline,
  Icon28ArrowDownOutline,
  Icon28FavoriteOutline,
  Icon28ShareOutline,
  Icon28SmartphoneOutline,
  Icon28UsersOutline,
  
} from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge'
import { PanelProps } from '../../types'
import { useSelector } from 'react-redux';
import { setActivePanel } from '../../store/slices/navigation';
import { GROUP_ID, SCHEDULE_PANEL, SEARCH_PANEL, SETTINGS_PANEL } from '../../constants';
import { requestDeleteUserSchedule, requestGetUser } from '../../store/slices/user';
import { requestConfigUnivers } from '../../store/slices/config';
import { RootState } from '../../store/rootReducer';
import { getFromWhomsList, getLessonsInDay, isCurrentWeek, isPassWeek } from '../../utils';
import { requestSchedule } from '../../store/slices/schedule';
import ScheduleBody from '../../components/ScheduleBody';
import { useAppDispatch } from '../../store';
import Qoute from '../../components/Qoute';

const MainPanel: React.FC<PanelProps> = ({
  id,
}) => {
  const dispatch = useAppDispatch()
  const {
    user,
    isLoading: isUserLoading,
    error: userError,
  } = useSelector((s: RootState) => s.user)
  const {
    currentUniver,
    currentWeek,
    currentDay,
    toEndDays,
    toEndPercent,
    isLoading: isConfigLoading,
    error: configError,
  } = useSelector((s: RootState) => s.config)
  const { qoute } = useSelector((s: RootState) => s.qoute)

  const platform = usePlatform()

  const addToFavorite = () => {
    bridge.send('VKWebAppAddToFavorites')
      .then(console.log)
      .catch(console.log)
  }

  const joinToGroup = () => {
    bridge.send('VKWebAppJoinGroup', { group_id: GROUP_ID })
      .then(console.log)
      .catch(console.log)
  }

  const addToHomeScreen = () => {
    bridge.send('VKWebAppAddToHomeScreen')
      .then(console.log)
      .catch(console.log)
  }

  const share = () => {
    bridge.send('VKWebAppShare', {link: 'https://vk.com/app7908078'})
      .then(console.log)
      .catch(console.log)
  }

  const goToSearchSchedule = () => {
    dispatch(setActivePanel(SEARCH_PANEL))
  }

  const goToSettings = () => {
    dispatch(setActivePanel(SETTINGS_PANEL))
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

  const tryAgain = () => {
    if(userError && user)
    {
      dispatch(requestGetUser(user.id))
    }
    if(configError)
    {
      dispatch(requestConfigUnivers())
    }
  }

  const [fromWhomsIsOpen, setFromWhomsIsOpen] = React.useState(false)
  const toggleFromWhoms = () => {
    setFromWhomsIsOpen(!fromWhomsIsOpen)
  }

  const [weeksIsOpen, setWeeksIsOpen] = React.useState(false)
  const toggleWeeks = () => {
    setWeeksIsOpen(!weeksIsOpen)
  }

  const [timeLessonsIsOpen, setTimeLessonsIsOpen] = React.useState(false)
  const toggleTimeLessons = () => {
    setTimeLessonsIsOpen(!timeLessonsIsOpen)
  }

  const [appActionsIsOpen, setAppActionsIsOpen] = React.useState(false)
  const toggleAppActions = () => {
    setAppActionsIsOpen(!appActionsIsOpen)
  }

  let content
  if(isUserLoading || isConfigLoading)
  {
    content = <Spinner style={{paddingTop:'20vh'}} />
  }
  else if(userError || configError)
  {
    const userMessage = userError && userError.message
    const configMessage = configError && configError.message

    content = (
      <Placeholder
        stretched
        action={
          <Button onClick={tryAgain}>Повторить</Button>
        }
      >{userMessage}<br/>{configMessage}</Placeholder>
    )
  }
  else if(user)
  {
    let univerContent
    if(user.univer && currentUniver)
    {
      univerContent = (<>
        {qoute && <Qoute qoute={qoute} />}
        
        <Div style={{paddingTop:0}}>
          <Card>
            <Cell
              onClick={toggleAppActions}
              after={!appActionsIsOpen ? <Icon28ChevronDownOutline /> : <Icon28ChevronUpOutline/>}
            >Доступ к приложению</Cell>
            {appActionsIsOpen && <>
              {true &&
                <Cell
                  before={
                    <Icon28FavoriteOutline style={{marginRight:8,padding:0}} fill="orange"/>
                  }
                  description="Мини-приложения > Избранное"
                  onClick={addToFavorite}
                >В избранном</Cell>
              }
              {true &&
                <Cell
                  before={
                    <Icon28UsersOutline style={{marginRight:8,padding:0}} fill="var(--accent)"/>
                  }
                  description="Шапка группы"
                  onClick={joinToGroup}
                >Вступите в группу</Cell>
              }
              {platform !== 'ios' &&
                <Cell
                  before={
                    <Icon28SmartphoneOutline style={{marginRight:8,padding:0}} fill="tan"/>
                  }
                  description="Быстрый доступ с дом. экрана"
                  onClick={addToHomeScreen}
                >На домашний экран</Cell>
              }
              {true &&
                <Cell
                  before={
                    <Icon28ShareOutline style={{marginRight:8}} fill="teal"/>
                  }
                  description="Доступ по ссылке"
                  onClick={share}
                >Расскажите друзьям</Cell>
              }
            </>}
          </Card>
        </Div>
        <Separator/>

        <Div>
          <Card>
            <Header
              subtitle={`До конца семестра ${toEndDays} дн. (${new Date(currentUniver.endDate).toLocaleDateString()})`}
            >{currentWeek ? 'Числитель(четная)' : 'Знаменатель(нечетная)'}</Header>
            <Progress
              style={{margin: '0px 12px', background: 'gray'}}
              value={toEndPercent}
            />
            <br />
            <Separator />

            <Cell
              after={<Icon28Search/>}
              onClick={goToSearchSchedule}
            >Искать расписание</Cell>
          </Card>
        </Div>
      </>)
    }

    if(!user.univer)
    {
      univerContent = (
        <Placeholder
          stretched
          icon={<Icon28EducationOutline width={64} height={64}/>}
          action={<Button onClick={goToSettings}>Выбрать</Button>}
        >Выберите университет, чтобы пользоваться приложением</Placeholder>
      )
    }

    let scheduleContent
    if(user.schedule)
    {
      const lessonsToday = getLessonsInDay(user.schedule.lessons, currentDay, currentWeek)
      const DAYS = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
      const todayString = `${DAYS[currentDay]}, ${new Date().toLocaleDateString()}`

      scheduleContent = (<>
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
    
    if(user.univer && !user.schedule)
    {
      scheduleContent = (
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

    let univerInfoContent
    if(currentUniver)
    {
      univerInfoContent = (<>
        <Separator/>
        <Div>
          <Card>
            <Cell
              onClick={toggleWeeks}
              after={!weeksIsOpen ? <Icon28ChevronDownOutline /> : <Icon28ChevronUpOutline/>}
            >Учебные недели</Cell>
            {weeksIsOpen && <Separator/>}
            {weeksIsOpen && currentUniver.weeks.map((week, i) => {
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
            {timeLessonsIsOpen && currentUniver.timeLessons.map((time, i) => {
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

    content = (<>
      {univerContent}
      {scheduleContent}
      {univerInfoContent}
    </>)
  }

  return (
    <Panel id={id}>
      <PanelHeader
        separator={false}
        left={!(isUserLoading || isConfigLoading) && user?.univer && <Icon28SettingsOutline onClick={goToSettings}/>}
      />
      {content}
    </Panel>
  )
}

export default MainPanel