import React from 'react'
import './About.css'
import bgImage from '../../../assets/ABT.jpg'
import Title from '../../common/Title/Title'
import Button from '../../common/Button'

export default function About() {

  const style={
    backgroundImage: `url(${bgImage})`,
  }

  return (
    <div className='about' style={style}>
      <div className='overlay'>
        <Title>About Us</Title>
        <div className='para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ut nulla labore nihil, eveniet quae quo minima quidem quis omnis eligendi, iure voluptate ullam, pariatur explicabo beatae provident error commodi nam inventore perferendis. Eius, cumque.
        </div>
        <Button size="xl">
          Learn More
        </Button>
      </div>
    </div>
  )
}
