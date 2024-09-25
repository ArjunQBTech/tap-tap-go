import React from 'react'
import './LowerSection.css'
import Button from '../../common/Button'

export default function LowerSection() {
  return (
    <div className='lowerSection'>
      <div className='heading'>
        <h1>Ready to dive in?</h1>
      </div>
      <div className='para'>
        Get ready for a fast-paced tapping adventure that will keep you on your toes! Compete for high scores and challenge your friends in this addictive game.
      </div>
      <Button size="xl">
        Play Now
      </Button>
    </div>
  )
}
