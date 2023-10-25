import React from 'react'
import "../camper/camper.css"
const Camper = (props) => {
  return (
    <div className='cam'>
      <h1>{props.icon}</h1>
      <h2>{props.num}</h2>
      <h2>{props.title}</h2>
      <p>{props.p}</p>
    </div>
  )
}

export default Camper
