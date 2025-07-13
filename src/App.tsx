import React from 'react'
import Navbar from './assets/components/Navbar'
import MainContent from './assets/components/MainContent'

const App = () => {
  return (
    <div className='p-0 m-0 box-border w-screen h-screen bg-neutral-900 relative overflow-x-hidden'>
        <Navbar />
        <MainContent/>
    </div>
  )
}

export default App