import React from 'react'
import './rules.css'

const RuleCard = ({card,index}) => {
  return (
    <div className='hrs-card' >
        <img alt='frame' src='frame.png' className='hrs-card-bg-img'/>
        <img alt='frame' src={card.img} className='hrs-card-img'/>
        <p className="hrs-card-text">
            {card.text}
        </p>
        <p className='hrs-card-count'>
            {index}
        </p>
    </div>
  )
}

export default RuleCard