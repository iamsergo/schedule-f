import { AppRoot, ConfigProvider, View } from '@vkontakte/vkui';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MAIN_PANEL, SCHEDULE_PANEL, SEARCH_PANEL, SETTINGS_PANEL } from './constants';
import MainPanel from './panels/main';
import SchedulePanel from './panels/schedule';
import SearchPanel from './panels/search';
import SettingsPanel from './panels/settings';
import { RootState } from './store/rootReducer';


const App: React.FC = () => {
  const dispatch = useDispatch()
  const { activePanel, history } = useSelector((s: RootState) => s.navigation)

  React.useEffect(() => {
    document.body.setAttribute('scheme', 'space_gray')
  },[])

  return (
    <ConfigProvider isWebView={true}>
      <AppRoot>
        <View
          activePanel={activePanel}
          history={history}
        >
          <MainPanel id={MAIN_PANEL} />
          <SettingsPanel id={SETTINGS_PANEL} />
          <SearchPanel id={SEARCH_PANEL} />
          <SchedulePanel id={SCHEDULE_PANEL} />
        </View>
      </AppRoot>
    </ConfigProvider>
  )
}

export default App;
