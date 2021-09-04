import React from "react"
import {
  Cell,
  IconButton,
  usePlatform,
} from "@vkontakte/vkui"
import {
  Icon28FavoriteOutline,
  Icon28ShareOutline,
  Icon28SmartphoneOutline,
  Icon28UsersOutline,
} from "@vkontakte/icons"
import bridge from '@vkontakte/vk-bridge'
import { GROUP_ID } from "../../constants"
import './AppActions.sass'

type AppActionsProps = {
  closeModal: () => void
}

const AppActions: React.FC<AppActionsProps> = ({
  closeModal,
}) => {
  const platform = usePlatform()

  const addToFavorite = () => {
    closeModal()
    bridge.send('VKWebAppAddToFavorites')
      .then(console.log)
      .catch(console.log)
  }

  const joinToGroup = () => {
    closeModal()
    bridge.send('VKWebAppJoinGroup', { group_id: GROUP_ID })
      .then(console.log)
      .catch(console.log)
  }

  const addToHomeScreen = () => {
    closeModal()
    bridge.send('VKWebAppAddToHomeScreen')
      .then(console.log)
      .catch(console.log)
  }

  const share = () => {
    closeModal()
    bridge.send('VKWebAppShare', {link: 'https://vk.com/app7908078'})
      .then(console.log)
      .catch(console.log)
  }

  return (
    <div>
      {true &&
        <Cell
          before={
            <IconButton>
              <Icon28FavoriteOutline style={{marginRight:8,padding:0}} fill="orange"/>
            </IconButton>
          }
          description="Мини-приложения > Избранное"
          onClick={addToFavorite}
        >В избранном</Cell>
      }
      {true &&
        <Cell
          before={
            <IconButton>
              <Icon28UsersOutline style={{marginRight:8,padding:0}} fill="var(--accent)"/>
            </IconButton>
          }
          description="Шапка группы"
          onClick={joinToGroup}
        >Вступите в группу</Cell>
      }
      {platform === 'android' &&
        <Cell
          before={
            <IconButton>
                <Icon28SmartphoneOutline style={{marginRight:8,padding:0}} fill="tan"/>
              </IconButton>
            }
          description="Быстрый доступ с дом. экрана"
          onClick={addToHomeScreen}
        >На домашний экран</Cell>
      }
      {true &&
        <Cell
          before={
            <IconButton>
              <Icon28ShareOutline style={{marginRight:8}} fill="teal"/>
            </IconButton>
          }
          description="Доступ по ссылке"
          onClick={share}
        >Расскажите друзьям</Cell>
      }
    </div>
  )
}

export default AppActions