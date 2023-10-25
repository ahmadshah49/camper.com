import React from 'react'
import "../btn/btn.css"
const Btn = (props) => {
  return (
    <div>
      <button className='btn'>{props.title}</button>
    </div>
  )
}

export default Btn
