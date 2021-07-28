import React from 'react'
import { Div, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import { PanelProps } from '../../types'
import { useDispatch } from 'react-redux'
import { setActivePanel } from '../../store/slices/navigation'
import { MAIN_PANEL } from '../../constants'

const SettingsPanel: React.FC<PanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()

  const goToMain = () => {
    dispatch(setActivePanel(MAIN_PANEL))
  }

  return (
    <Panel id={id} style={{paddingTop: 52}}>
      <PanelHeader
        separator={false}
        left={<PanelHeaderBack onClick={goToMain} />}
      >Настройки</PanelHeader>
      
      <Div>
        <div>Университет</div>
        <div>Выбранное расписание</div>
      </Div>
    </Panel>
  )
}

export default SettingsPanel