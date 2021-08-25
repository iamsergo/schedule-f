import React from 'react';
import {
  AppRoot,
  ConfigProvider,
  ScreenSpinner,
  usePlatform,
  View,
} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge'
import { useDispatch, useSelector } from 'react-redux';
import { GROUP_ID, MAIN_PANEL, SCHEDULE_PANEL, SEARCH_PANEL, SETTINGS_PANEL } from './constants';
import MainPanel from './panels/main';
import SchedulePanel from './panels/schedule';
import SearchPanel from './panels/search';
import SettingsPanel from './panels/settings';
import { RootState } from './store/rootReducer';
import ActionsModal from './components/ActionsModal';
import { requestGetUser, setUserData } from './store/slices/user';
import { requestConfigUnivers, requestQoute, setConfig, setCurrentUniver } from './store/slices/config';
import { setActiveModal } from './store/slices/navigation';

let isFirstLoading = true
const App: React.FC = () => {
  const dispatch = useDispatch()
  const { activePanel, history } = useSelector((s: RootState) => s.navigation)
  const {
    isLoaderShowing,
    user,
    isLoading: isUserLoading,
    error: userError,
    isUniverLoading,
    isScheduleLoading,
  } = useSelector((s: RootState) => s.user)
  const { config, isLoading: isConfigLoading, error: configError, } = useSelector((s: RootState) => s.config)

  const platform = usePlatform()

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
      const userData = await bridge.send('VKWebAppGetUserInfo')
      // const userData = { id: 0 }
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

  React.useEffect(() => {
    const openModal = async () => {
      if(platform === 'android')
      {
        const addToHomeScreenInfo = await bridge.send('VKWebAppAddToHomeScreenInfo')
        if(
          addToHomeScreenInfo.is_feature_supported &&
          addToHomeScreenInfo.is_added_to_home_screen
        ) return
      }

      if(config.is_favorite) return

      const groupInfo = await bridge.send(
        'VKWebAppGetGroupInfo',
        {'group_id': GROUP_ID}
      )
      if(groupInfo.is_member) return

      dispatch(setActiveModal('actions'))
    }
    
    if(
      !isConfigLoading && !isUserLoading && !isFirstLoading &&
      !userError && !configError &&
      !isLoaderShowing
    )
    {
      openModal()      
    }
    isFirstLoading = false
  }, [isConfigLoading, isUserLoading, isLoaderShowing])

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
