import React from 'react'
import type { NavlinkProps } from '../../types'

const Navlink = ({src,title}:NavlinkProps) => {
  return (
    <div>
        <a href={src} className='text-transparent'>
            <p className='text-center text-white text-2xl transition-all duration-150 hover:text-cyan-500 font-roboto font-medium'>{title}</p>
        </a>
    </div>
  )
}

export default Navlink