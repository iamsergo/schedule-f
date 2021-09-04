import React from 'react'
import { Icon28ChevronDownOutline, Icon28ChevronUpOutline, Icon28Like, Icon28LikeOutline } from '@vkontakte/icons'
import { Avatar, Card, Cell, Div, IconButton } from '@vkontakte/vkui'
import { Qoute as QouteType } from '../../types'

type QouteProps = {
  qoute: QouteType
}

const Qoute: React.FC<QouteProps> = ({
  qoute,
}) => {
  return (
    <Div>
      <Card>
        <Cell disabled description="Цитата дня">
          {qoute.author}
        </Cell>
        <Div style={{paddingTop:4}}>{qoute.text}</Div>
      </Card>
    </Div>
  )
}

export default Qoute