import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../card2/card2.css"
const Card2 = (props)     => {
  return (
    <div className='card2 '>
    <div className="left2">
        <div>
        <span>_________</span>
        <div>{props.title}</div>
        </div>
        <h1>{props.heading}</h1>
        <p>{props.peragraph}</p>
        <Link href="/">Read More ⇒</Link>
    </div>
    <div className="right2">
        <h1><Image
        src={props.src}
        width={800}
        height={700}
        /></h1>
    </div>
    </div>
  )
}

export default Card2