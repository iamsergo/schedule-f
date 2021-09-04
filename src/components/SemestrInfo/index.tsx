import React from 'react'
import { Card, Cell, Div, Header, Progress, Separator } from '@vkontakte/vkui'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { setActivePanel } from '../../store/slices/navigation'
import { SEARCH_PANEL } from '../../constants'
import { Icon28Search } from '@vkontakte/icons'

const SemestrInfo: React.FC = () => {
  const dispatch = useDispatch()

  const {
    currentUniver,
    currentWeek,
    toEndDays,
    toEndPercent,
  } = useSelector((s: RootState) => s.config)

  const goToSearchSchedule = () => {
    dispatch(setActivePanel(SEARCH_PANEL))
  }

  return (
    <Div>
      <Card>
        <Header
          subtitle={`До конца семестра ${toEndDays} дн. (${new Date(currentUniver!.endDate).toLocaleDateString()})`}
        >{currentWeek ? 'Числитель(четная)' : 'Знаменатель(нечетная)'}</Header>
        <Progress
          style={{margin: '0px 12px', background: 'gray'}}
          value={toEndPercent}
        />
        <br />
        <Separator />

        <Cell
          after={<Icon28Search/>}
          onClick={goToSearchSchedule}
        >Искать расписание</Cell>
      </Card>
    </Div>
  )
}

export default SemestrInfo