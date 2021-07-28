import { Panel } from '@vkontakte/vkui'
import React from 'react'
import { PanelProps } from '../../types'

const SimplePanel: React.FC<PanelProps> = ({
  id,
}) => {
  return (
    <Panel id={id} style={{paddingTop: 52}}>
      SimplePanel
    </Panel>
  )
}

export default SimplePanel