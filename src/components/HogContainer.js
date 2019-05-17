import React from 'react'
import HogCard from './HogCard'

const HogContainer = (props) => {
  const HogCards = props.hogs.map((hog, index) => {
    return <HogCard key={Date.now() + index} {...hog} shown={true}/>
  })



  return (
      <div className="ui grid container">
      {HogCards}
      </div>
  )
}
export default HogContainer
