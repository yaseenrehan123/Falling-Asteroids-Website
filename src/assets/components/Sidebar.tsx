import React from 'react'
import Navlink from './Navlink'
import type { SidebarProps } from '../../types';
import { RxCross1 } from "react-icons/rx";
const Sidebar = ({enabled,onClose}:SidebarProps) => {
    if(!enabled) return null;
    return (
        <div className='fixed top-0 right-0 w-60 h-full bg-black z-20 flex flex-col items-center gap-10 pt-5'>
            <Navlink src='' title='Home' />
            <Navlink src='#About' title='About' />
            <Navlink src='https://magstardev.itch.io/falling-asteroids' title='Play' />
            <Navlink src='#Contact' title='Contact' />
            <RxCross1 className='absolute top-0 left-0 text-red-500 text-5xl hover:cursor-pointer hover:text-red-600 transition-all
            duration-150 hover:scale-95' onClick={onClose}/>
        </div>
    )
}

export default Sidebar