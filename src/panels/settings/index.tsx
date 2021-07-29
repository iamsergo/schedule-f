import React, { ChangeEvent } from 'react'
import {
  Button,
  Div,
  FormItem,
  Group,
  Header,
  NativeSelect,
  Panel,
  PanelHeader,
  PanelHeaderBack,
} from '@vkontakte/vkui'
import { PanelProps } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePanel } from '../../store/slices/navigation'
import { MAIN_PANEL } from '../../constants'
import { RootState } from '../../store/rootReducer'
import { requestDeleteUserUniver, requestUpdateUserUniver } from '../../store/slices/user'

const SettingsPanel: React.FC<PanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const { univerList } = useSelector((s: RootState) => s.config)
  const { user } = useSelector((s: RootState) => s.user)

  const goToMain = () => {
    dispatch(setActivePanel(MAIN_PANEL))
  }

  const userUniverId = user?.univer?.id ?? ''
  const [univer, setUniver] = React.useState(''+userUniverId)
  const handleChangeUniver = (e: ChangeEvent<HTMLSelectElement>) => {
    setUniver(e.target.value)
  }

  const changeUniver = () => {
    if((''+userUniverId) !== univer)
    {
      if(univer === '')
      {
        dispatch(requestDeleteUserUniver(user!.id))
      }
      else
      {
        dispatch(requestUpdateUserUniver({
          id: user!.id,
          univerId: +univer,
        }))
      }
    }
  }

  return (
    <Panel id={id}>
      <PanelHeader
        separator={false}
        left={<PanelHeaderBack onClick={goToMain} />}
      >Настройки</PanelHeader>

      <Group header={<Header mode="secondary">Главное</Header>}>      
        <FormItem
          top="Университет"
          bottom="При изменении университета, выбранная группа удалится!"
          >
          <NativeSelect
            placeholder="Не выбран"
            value={univer}
            onChange={handleChangeUniver}
            >
            {univerList.map(univer => {
              return <option
              key={univer.code}
              value={univer.id}
              >{univer.subtitle}</option>
            })}
            <option value="1">БГТУ</option>
            <option value="2">РГТУ</option>
          </NativeSelect>
        </FormItem>
        <Div style={{paddingTop:0}}>
          <Button
            disabled={(''+userUniverId) === univer}
            style={{width:'100%'}}
            size="l"
            onClick={changeUniver}
            >Сохранить</Button>
        </Div>
      </Group>
    </Panel>
  )
}

export default SettingsPanel