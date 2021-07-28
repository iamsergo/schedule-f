import React from 'react'
import { Button, Card, CellButton, Div, Header, Panel, Placeholder, Spinner } from '@vkontakte/vkui'
import { Icon28ChevronRightOutline } from '@vkontakte/icons';
import { PanelProps, UniverData } from '../../types'
import { setActivePanel } from '../../store/slices/navigation';
import { MAIN_PANEL } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetUser } from '../../store/slices/user';
import { requestConfigUnivers } from '../../store/slices/config';
import { RootState } from '../../store/rootReducer';

const SelectUniverPanel: React.FC<PanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const {
    user,
    isLoading: isUserLoading,
    error: userError,
  } = useSelector((s: RootState) => s.user)
  const {
    univerList,
    isLoading: isConfigLoading,
    error: configError,
  } = useSelector((s: RootState) => s.config)
  // const { univerList } = { univerList: [ {id: 0, title: 'НГТУ', code: 'nstu'}, {id: 1, title: 'НГУ', code: 'nsu'} ] }

  React.useEffect(() => {
    const initApp = async () => {
      const { id } = await new Promise(resolve => resolve({ id: 17 }))
      dispatch(requestGetUser(id))
      dispatch(requestConfigUnivers())
    }
    initApp()
  },[])

  const tryAgain = () => {
    if(userError && user)
    {
      dispatch(requestGetUser(user.id))
    }
    if(configError)
    {
      dispatch(requestConfigUnivers())
    }
  }

  const selectUniver = (univer: UniverData) => {
    console.log('SELECT:', univer.title)
  }
  
  let content
  if(isUserLoading || isConfigLoading)
  {
    content = (
      <div style={{height:'80vh'}}>
        <Spinner/>
      </div>
    )
  }
  else if(userError || configError)
  {
    const userMessage = userError && userError.message
    const configMessage = configError && configError.message

    content = (
      <Placeholder
        stretched
        action={
          <Button onClick={tryAgain}>Повторить</Button>
        }
      >{userMessage}<br/>{configMessage}</Placeholder>
    )
  }
  else if(user && !user.univer)
  {
    content = (<>
      <Header>Выберите университет</Header>
      <Div>
        {univerList.map(univer => {
          return <Card key={univer.id} style={{marginTop: 8}}>
            <CellButton
              onClick={() => selectUniver(univer)}
              after={<Icon28ChevronRightOutline/>}
              description={univer.title}
            >{univer.subtitle}</CellButton>
          </Card>
        })}
      </Div>
    </>)
  }

  return (
    <Panel id={id} style={{paddingTop: 60}}>
      {content}
    </Panel>
  )
}

export default SelectUniverPanel