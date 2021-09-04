import React from 'react'
import {
  Button,
  Panel,
  PanelHeader,
  Placeholder,
  Separator,
  Spinner,
} from '@vkontakte/vkui'
import {
  Icon28SettingsOutline,
  Icon28EducationOutline,  
} from '@vkontakte/icons';
import { PanelProps } from '../../types'
import { useSelector } from 'react-redux';
import { setActivePanel } from '../../store/slices/navigation';
import { SETTINGS_PANEL } from '../../constants';
import { requestGetUser } from '../../store/slices/user';
import { requestConfigUnivers } from '../../store/slices/config';
import { RootState } from '../../store/rootReducer';
import { useAppDispatch } from '../../store';
import Qoute from '../../components/Qoute';
import AppActions from '../../components/AppActions';
import SemestrInfo from '../../components/SemestrInfo';
import UserSchedule from '../../components/UserSchedule';
import UniverInfo from '../../components/UniverInfo';

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
    isLoading: isConfigLoading,
    error: configError,
  } = useSelector((s: RootState) => s.config)
  const { qoute } = useSelector((s: RootState) => s.qoute)

  const goToSettings = () => {
    dispatch(setActivePanel(SETTINGS_PANEL))
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
    content = (<>
      {user.univer
        ? <>
          {qoute && <Qoute qoute={qoute} />}
          <AppActions />
          <Separator/>
          {currentUniver && <SemestrInfo />}
          <UserSchedule user={user}/>
        </>
        : <Placeholder
            stretched
            icon={<Icon28EducationOutline width={64} height={64}/>}
            action={<Button onClick={goToSettings}>Выбрать</Button>}
          >Выберите университет, чтобы пользоваться приложением</Placeholder>
      }
      {currentUniver && <UniverInfo univer={currentUniver} />}
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