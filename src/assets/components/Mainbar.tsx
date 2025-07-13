import React from 'react'
import Navlink from './Navlink'

const Mainbar = () => {
  return (
    <div className='hidden sm:flex justify-between items-center'>
        <div></div>
        <div className='flex items-center justify-center gap-9 p-2 pb-2'>
            <Navlink src='' title='Home'/>
            <Navlink src='#About' title='About'/>
            <Navlink src='https://magstardev.itch.io/falling-asteroids' title='Play'/>
            <Navlink src='#Contact' title='Contact'/>
        </div>
        <div></div>
    </div>
  )
}

export default Mainbar