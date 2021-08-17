import React, { ChangeEvent } from 'react'
import {
  CellButton,
  Div,
  FixedLayout,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  Search,
  Spinner,
} from '@vkontakte/vkui'
import { Icon56GhostOutline } from '@vkontakte/icons'
import { useDispatch, useSelector } from 'react-redux'
import { MAIN_PANEL, SCHEDULE_PANEL } from '../../constants'
import { RootState } from '../../store/rootReducer'
import { setActivePanel } from '../../store/slices/navigation'
import { clearSearchedSchedules, requestSchedule, requestSearchSchedule } from '../../store/slices/schedule'
import { HrefTitle, PanelProps } from '../../types'

const SearchPanel: React.FC<PanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const { isSearchLoading, searchedSchedules, } = useSelector((s: RootState) => s.schedule)
  const { user } = useSelector((s: RootState) => s.user)

  const [q, setQ] = React.useState<string>('')
  const handleQChange = (e: ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value

    setQ(q)
    if(!q)
    {
      dispatch(clearSearchedSchedules())
    }
  }

  const searchRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    window.setTimeout(() => {
      searchRef.current && searchRef.current.focus()
    },100)
    return () => {
      dispatch(clearSearchedSchedules())
    }
  },[])

  const [debQ, setDebQ] = React.useState(q)
  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebQ(q)
    }, 500)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [q])

  React.useEffect(() => {
    if(debQ)
    {
      dispatch(requestSearchSchedule({
        univer: user!.univer!.code,
        q: debQ,
      }))
    }
  }, [debQ])

  const goToMainPanel = () => {
    dispatch(setActivePanel(MAIN_PANEL))
  }

  const goToSchedule = (schedule: HrefTitle) => {
    dispatch(requestSchedule({
      univer: user!.univer!.code,
      tail: schedule.href,
    }))
    dispatch(setActivePanel(SCHEDULE_PANEL))
  }

  let content

  if(isSearchLoading)
  {
    content = <Spinner />
  }
  else if(searchedSchedules.length === 0)
  {
    content = <Placeholder
      icon={<Icon56GhostOutline style={{color:"teal"}} />}
    >Ничего не найдено</Placeholder>
  }
  else
  {
    content = (<>
      {searchedSchedules.map((schedule, i) => {
        return <CellButton
          key={i}
          onClick={() => goToSchedule(schedule)}
        >{schedule.title}</CellButton>
      })}
      <div style={{textAlign:'center'}}>
        Уточните или исправьте запрос, если не нашли нужное расписание
      </div>
    </>)
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
          getRef={searchRef}
          placeholder="Поиск расписания"
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