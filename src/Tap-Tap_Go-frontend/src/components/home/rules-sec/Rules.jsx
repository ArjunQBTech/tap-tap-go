import React from 'react'
import './rules.css'
import { Text } from '../../../constants/Text'
import RuleCard from './RuleCard'

const Rules = () => {
  return (
    <div className='home-rules-sec' id='rules'>
        <h1 className="hrs-title">Rules to Play</h1>
        <p className="hrs-tagline">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid veritatis ea soluta error. Porro quia dignissimos perspiciatis! Sed quos beatae nihil? Repudiandae molestias harum, id consequatur veritatis sed in nulla.
        </p>
        <div className="hrs-card-cont">
            {
                Text.ruleCardData?.map((card,index)=>(
                    <RuleCard key={index} card={card} index={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Rules