import React from 'react'
import Section from './Section'
import Heading1 from './Heading1'
import Heading2 from './Heading2'

const Section1 = () => {
  return (
    <Section id='About'>
        <Heading1 content='Falling Asteroids'/>
        <p className='pr-6 pl-6'>Falling Asteroids is a simple arcade game , where you have to destroy asteroids falling from space
            by clicking on them. It's mostly designed for mobile because at PC it would be hard to click all Asteroids at once
            but you are free to give it a try.
        </p>
        <Heading2 content='Key Points'/>
        <ul className='flex flex-col items-center gap-2'>
            <li>- You have 3 lives</li>
            <li>- Difficulty increases with time</li>
        </ul>
    </Section>
  )
}

export default Section1