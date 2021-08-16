import React from "react"
import { Avatar, Caption, Card, CellButton, Div, Header, ModalCard, ModalPage, ModalPageHeader, ModalRoot, Progress } from "@vkontakte/vkui"
import AppActions from "../AppActions"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/rootReducer"
import { setActiveModal } from "../../store/slices/navigation"
import { Icon24Dismiss } from "@vkontakte/icons"
import './ActionsModal.sass'
import { requestSchedule } from "../../store/slices/schedule"


const ActionsModal = () => {
  const dispatch = useDispatch()
  const { activeModal } = useSelector((s: RootState) => s.navigation)
  const { lessonStats } = useSelector((s: RootState) => s.schedule)
  const { user } = useSelector((s: RootState) => s.user)
  const { currentUniver } = useSelector((s: RootState) => s.config)
  
  const closeModal = () => {
    dispatch(setActiveModal(null))
  }

  const goToSchedule = (tail: string) => {
    dispatch(requestSchedule({
      univer: user!.univer!.code,
      tail,
    }))
    closeModal()
  }

  return (
    <ModalRoot
      activeModal={activeModal}
      onClose={closeModal}
    >
      <ModalCard
        id="actions"
        header="Не теряйте приложение"
        subheader="Т.к. приложение не находится в каталоге, найти через поиск его не получится. Поэтому, чтобы не потерять его, сохраните любым удомным способом:"
        icon={<Avatar size={72}/>}
      >
        <AppActions closeModal={closeModal}/>
      </ModalCard>
      <ModalPage id="stats">
        <ModalPageHeader
          right={<Icon24Dismiss onClick={closeModal} style={{marginRight:8}}/>}
        >Статистика</ModalPageHeader>
        {lessonStats && <>
          <Div>
            <Card>
              <Div>{lessonStats.title}</Div>
            </Card>
          </Div>
          <Div style={{paddingTop:'0px 12px'}}>
            {currentUniver &&
              <Caption level="2" weight="regular" style={{opacity:0.5}}>
                Пожалуйста, не воспринимайте данную статистику буквально!
                Т.к. для расчета, первым днем принят {new Date(currentUniver.startDateStartOfWeek).toLocaleDateString()},
                а последним {new Date(currentUniver.endDate).toLocaleDateString()}.
              </Caption>
            }
          </Div>
          <Div style={{padding:'0px 12px'}}>
            {Object.entries(lessonStats.stats).map(([typeLesson, values]) => {
              const { pass, total } = values
              if(total === 0) return null
              
              const title = {
                lec: 'Лекция',
                pr: 'Практика',
                lab: 'Лабораторная',
              }[typeLesson]
              
              return (
                <div className="stats__item" key={typeLesson}>
                  <Header>
                    {title}
                    <span className="stats__secondary">{pass}/{total}</span>
                  </Header>
                  <Progress
                    className={`stats__progress--${typeLesson}`}
                    style={{margin: '0px 12px 8px 12px',}}
                    value={pass / total * 100}
                    />
                </div>
              )
            })}
          </Div>
          <Div>
            <Header>Преподаватели / группы</Header>
            {lessonStats.fromWhoms.map(fromWhom => {
              return <CellButton
                key={fromWhom.href}
                onClick={() => goToSchedule(fromWhom.href)}
              >{fromWhom.title}</CellButton>
            })}
          </Div>
        </>}
      </ModalPage>
    </ModalRoot>
  )
}

export default ActionsModal