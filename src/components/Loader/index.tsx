import React from 'react'
import start from '../../assets/start.gif'
import pause from '../../assets/pause.gif'
import end from '../../assets/end.gif'
import loading from '../../assets/loading.gif'
import './Loader.sass'

type LoaderProps = {
  isEnd: boolean
  onHide: () => void
}

let isFirstLoading = true
const Loader: React.FC<LoaderProps> = ({
  isEnd,
  onHide,
}) => {
  const [src, setSrc] = React.useState(start)
  const [isEndStartAnimation, setIsEndStartAnimation] = React.useState(false)

  React.useEffect(() => {
    if(isEnd && !isFirstLoading && isEndStartAnimation)
    {
      setSrc(end)
      window.setTimeout(onHide, 1550)
    }
  },[isEnd, isEndStartAnimation])

  React.useEffect(() => {
    isFirstLoading = false
    window.setTimeout(() => {
      if(!isEnd) setSrc(pause)
      setIsEndStartAnimation(true)
    },1760)
  },[])

  return (
    <div className="loader-wrapper">
      <div className="loader-img-wrapper">
        <img src={loading} alt="oops..."/>
      </div>
    </div>
  )
}

export default Loader