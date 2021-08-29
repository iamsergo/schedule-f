import React from 'react';
import {
  AppRoot,
  ConfigProvider,
  ScreenSpinner,
  View,
} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import { useDispatch, useSelector } from 'react-redux';
import { MAIN_PANEL, SCHEDULE_PANEL, SEARCH_PANEL, SETTINGS_PANEL } from './constants';
import MainPanel from './panels/main';
import SchedulePanel from './panels/schedule';
import SearchPanel from './panels/search';
import SettingsPanel from './panels/settings';
import { RootState } from './store/rootReducer';
import ActionsModal from './components/ActionsModal';
import { requestGetUser, setUserData } from './store/slices/user';
import { requestConfigUnivers, requestQoute, setConfig, setCurrentUniver } from './store/slices/config';

const App: React.FC = () => {
  const dispatch = useDispatch()
  const { activePanel, history } = useSelector((s: RootState) => s.navigation)
  const {
    user,
    isUniverLoading,
    isScheduleLoading,
  } = useSelector((s: RootState) => s.user)

  React.useEffect(() => {
    document.body.setAttribute('scheme', 'space_gray')

    const config =
      window.location.search.slice(1)
        .split('&')
        .reduce((config, queryParam) => {
          const [key, value] = queryParam.split('=')
          return { ...config, [key.slice(3)]: value === '1' }
        },{})
    dispatch(setConfig(config))
  },[])

  const [popout, setPopout] = React.useState<React.ReactNode>(null)
  const handleSetPopout = (popout: React.ReactNode) => {
    setPopout(popout)
  }

  React.useEffect(() => {
    const initApp = async () => {
      const inVk = window.location.origin.includes('vk.com')
      const userDataRequest: Promise<{id:number}> =
        inVk
          ? bridge.send('VKWebAppGetUserInfo')
          : new Promise((resolve) => resolve({ id: 0 }))
      const userData = await userDataRequest

      dispatch(setUserData(userData))
      dispatch(requestConfigUnivers())
      dispatch(requestGetUser(userData.id))
      dispatch(requestQoute())
    }

    if(!user) initApp()
  },[])

  React.useEffect(() => {
    if(user)
    {
      if(user.univer)
        dispatch(setCurrentUniver(user.univer))
      else
        dispatch(setCurrentUniver(null))
    }
  }, [user])

  React.useEffect(() => {
    if(isUniverLoading || isScheduleLoading)
    {
      setPopout(<ScreenSpinner/>)
    }
    else
    {
      setPopout(null)
    }
  }, [isUniverLoading, isScheduleLoading])

  return (
    <ConfigProvider isWebView={true}>
      <AppRoot>
        <View
          popout={popout}
          modal={<ActionsModal/>}
          activePanel={activePanel}
          history={history}
        >
          <MainPanel id={MAIN_PANEL} />
          <SettingsPanel id={SETTINGS_PANEL} setPopout={handleSetPopout}/>
          <SearchPanel id={SEARCH_PANEL} />
          <SchedulePanel id={SCHEDULE_PANEL} setPopout={handleSetPopout}/>
        </View>
      </AppRoot>
    </ConfigProvider>
  )
}

export default App;
