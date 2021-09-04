import React from "react"
import {
  Card,
  Cell,
  Div,
  usePlatform,
} from "@vkontakte/vkui"
import {
  Icon28ChevronDownOutline,
  Icon28ChevronUpOutline,
  Icon28FavoriteOutline,
  Icon28ShareOutline,
  Icon28SmartphoneOutline,
  Icon28UsersOutline,
} from "@vkontakte/icons"
import bridge from '@vkontakte/vk-bridge'
import { GROUP_ID } from "../../constants"
import './AppActions.sass'

const AppActions: React.FC = () => {
  const platform = usePlatform()

  const [appActionsIsOpen, setAppActionsIsOpen] = React.useState(false)
  const toggleAppActions = () => {
    setAppActionsIsOpen(!appActionsIsOpen)
  }  

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

  return (
    <Div style={{paddingTop:0}}>
      <Card>
        <Cell
          onClick={toggleAppActions}
          after={!appActionsIsOpen ? <Icon28ChevronDownOutline /> : <Icon28ChevronUpOutline/>}
          description="Сохраните приложение:"
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
          {platform === 'android' &&
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
  )
}

export default AppActions