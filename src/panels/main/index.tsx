import React from 'react'
import { Avatar, Button, Card, Cell, CellButton, Div, Header, Panel, Placeholder, Progress, Separator, Spinner } from '@vkontakte/vkui'
import { Icon28Search, Icon28SettingsOutline, Icon28ChevronDownOutline, Icon28ChevronUpOutline, Icon56GhostOutline } from '@vkontakte/icons';
import { DayRange, HrefTitle, PanelProps } from '../../types'
import { useDispatch, useSelector } from 'react-redux';
import { setActivePanel } from '../../store/slices/navigation';
import { SCHEDULE_PANEL, SEARCH_PANEL, SETTINGS_PANEL } from '../../constants';
import { requestGetUser, setUserData } from '../../store/slices/user';
import { requestConfigUnivers } from '../../store/slices/config';
import { RootState } from '../../store/rootReducer';
import { getFromWhomsList, getLessonsInDay } from '../../utils';
import { requestSchedule } from '../../store/slices/schedule';
import LessonRow from '../../components/LessonRow';
import ScheduleBody from '../../components/ScheduleBody';

const MainPanel: React.FC<PanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const {
    user,
    userData,
    isLoading: isUserLoading,
    error: userError,
  } = useSelector((s: RootState) => s.user)
  const {
    univerList,
    isLoading: isConfigLoading,
    error: configError,
  } = useSelector((s: RootState) => s.config)

  const [fromWhomsIsOpen, setFromWhomsIsOpen] = React.useState(false)

  React.useEffect(() => {
    const initApp = async () => {
      const userData: {
        id: number, photo: string, firstName: string,
      } = await new Promise(resolve => resolve({
        id: 17,
        photo: 'https://sun1-47.userapi.com/s/v1/if1/rZaP9yNeo5XSRcmxpjPfFeQdRGW-WBW4U8IqAc8ZZr83zWfF8Gvyd3R9sP-76g6aWjl-M7C5.jpg?size=50x0&quality=96&crop=194,89,1034,1034&ava=1',
        firstName: 'Татьяна'
      }))
      dispatch(setUserData(userData))
      dispatch(requestGetUser(userData.id))
      dispatch(requestConfigUnivers())
    }

    if(!user) initApp()
  },[])

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

  const toggleFromWhoms = () => {
    setFromWhomsIsOpen(!fromWhomsIsOpen)
  }
  
  let content
  if(isUserLoading || isConfigLoading)
  {
    content = (
      <div style={{height:'80vh'}}>
        <Spinner/>
      </div>
    )
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
    if(user.univer)
    {
      univerContent = (
        <Div>
          <Card>
            <Header
              subtitle={`До конца семестра ${17} дн.`}
            >
              {true ? 'Числитель' : 'Знаменатель'}
            </Header>
            <Progress
              style={{margin: '0px 12px', background: 'gray'}}
              value={(60 / 100) * 100}
            />
            <br />
            <Separator />

            <Cell
              after={<Icon28Search/>}
              onClick={goToSearchSchedule}
            >Искать расписание</Cell>
          </Card>
        </Div>
      )
    }

    let scheduleContent
    if(user.schedule)
    {
      const currentDay = 0 as DayRange
      const currentWeek = 0
      const lessonsToday = getLessonsInDay(user.schedule.lessons, currentDay, currentWeek)

      scheduleContent = (<>
        {lessonsToday.length !== 0 &&
          <Div style={{paddingTop:0}}>
            <Card>
              <Header
                subtitle={`ПН, 17 июня`}
              >Расписание на сегодня</Header>
              <ScheduleBody lessons={lessonsToday} onGoToSchedule={goToSchedule} />
              <CellButton
                onClick={() => goToSchedule(user.schedule!.href)}
              >Полное расписание</CellButton>
            </Card>
          </Div>
        }
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

    content = (<>
      <Div>
        <Card>
          <Cell
            disabled
            before={<Avatar src={userData!.photo} />}
            after={<Icon28SettingsOutline onClick={goToSettings}/>}
            description={user.univer ? user.univer.subtitle : 'Университет не выбран'}
          >{userData!.firstName}</Cell>
        </Card>
      </Div>
      {univerContent}
      {scheduleContent}
    </>)
  }

  return (
    <Panel id={id} style={{paddingTop: 64}}>
      {content}
    </Panel>
  )
}

export default MainPanel