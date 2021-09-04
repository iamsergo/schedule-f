import React from 'react'
import { Card, Cell, Div } from '@vkontakte/vkui'
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