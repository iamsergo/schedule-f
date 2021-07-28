import React, { ChangeEvent } from 'react'
import { Button, CellButton, Div, FixedLayout, Panel, PanelHeader, PanelHeaderBack, Placeholder, Search, Spinner } from '@vkontakte/vkui'
import { Icon56GhostOutline } from '@vkontakte/icons'
import { useDispatch, useSelector } from 'react-redux'
import { MAIN_PANEL, SCHEDULE_PANEL } from '../../constants'
import { RootState } from '../../store/rootReducer'
import { setActivePanel } from '../../store/slices/navigation'
import { requestSchedule, requestSearchSchedule } from '../../store/slices/schedule'
import { HrefTitle, PanelProps } from '../../types'

const SearchPanel: React.FC<PanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const { isSearchLoading, searchError, searchedSchedules, } = useSelector((s: RootState) => s.schedule)

  const [q, setQ] = React.useState<string>('')
  const handleQChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value)
  }

  const [debQ, setDebQ] = React.useState(q)
  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebQ(q)
    }, 300)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [q])

  React.useEffect(() => {
    if(debQ)
    {
      dispatch(requestSearchSchedule({
        univer: 'nsu',
        q: debQ,
      }))
    }
  }, [debQ])

  const goToMainPanel = () => {
    dispatch(setActivePanel(MAIN_PANEL))
  }

  const goToSchedule = (schedule: HrefTitle) => {
    dispatch(requestSchedule({
      univer: 'nsu',
      tail: schedule.href,
    }))
    dispatch(setActivePanel(SCHEDULE_PANEL))
  }

  let content

  if(isSearchLoading)
  {
    content = <Spinner />
  }
  else if(searchError)
  {
    content = <Placeholder
      // action={
      //   <Button onClick={() => {
      //     dispatch(requestSchedule(searchError.payload))
      //   }}>Повторить</Button>
      // }
    >{searchError.message}</Placeholder>
  }
  else if(searchedSchedules.length === 0)
  {
    content = <Placeholder
      icon={<Icon56GhostOutline style={{color:"teal"}} />}
    >Ничего не найдено</Placeholder>
  }
  else
  {
    content = searchedSchedules.map((schedule, i) => {
      return <CellButton
        key={i}
        onClick={() => goToSchedule(schedule)}
      >{schedule.title}</CellButton>
    })
  }

  return (
    <Panel id={id}>
      <PanelHeader
        separator={false}
        left={
          <PanelHeaderBack onClick={goToMainPanel} />
        }
      >Поиск</PanelHeader>

      <FixedLayout style={{paddingTop:24}} vertical="top" filled>
        <Search
          after={null}
          value={q}
          onChange={handleQChange}
        />
      </FixedLayout>

      <Div style={{marginTop:70}}>{content}</Div>
    </Panel>
  )
}

export default SearchPanel