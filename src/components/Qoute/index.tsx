import React from 'react'
import { Icon28Like, Icon28LikeOutline } from '@vkontakte/icons'
import { Avatar, Card, Cell, Div, IconButton } from '@vkontakte/vkui'

type QouteProps = {
  photo: string
  name: string
}

const Qoute: React.FC<QouteProps> = ({
  photo,
  name,
  children,
}) => {
  return (
    <Div>
      <Card>
        <Cell
          disabled
          before={<Avatar size={36} src={photo} />}
          after={
            <IconButton>
              {true
                ? <Icon28Like fill="tomato"/>
                : <Icon28LikeOutline/>}
            </IconButton>
          }
          description="Цитата дня"
        >{name}</Cell>
        <Div style={{paddingTop:0}}>{children}</Div>
      </Card>
    </Div>
  )
}

export default Qoute