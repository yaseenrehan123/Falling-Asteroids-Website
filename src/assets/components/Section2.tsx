import React from 'react'
import Section from './Section'
import Heading1 from './Heading1'

const Section2 = () => {
  return (
    <Section id=''>
        <Heading1 content='Where To Play ?'/>
        <p>The game is hosted at itch.io! You can follow this
        <a href='https://magstardev.itch.io/falling-asteroids' target='blank'  className='text-purple-800'> link</a></p>
    </Section>
  )
}

export default Section2