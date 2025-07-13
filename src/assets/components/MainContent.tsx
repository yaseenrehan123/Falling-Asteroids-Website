import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
const MainContent = () => {
  return (
    <div className='pt-20 pb-20 flex flex-col items-center gap-5 text-white'>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
    </div>
  )
}

export default MainContent