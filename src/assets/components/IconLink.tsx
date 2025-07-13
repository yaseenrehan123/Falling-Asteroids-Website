import React from 'react'

const IconLink = ({icon,src}:{icon:React.ReactNode,src:string}) => {
  return (
    <div className='text-5xl text-emerald-500'>
        <a href={src} target='blank'>{icon}</a>
    </div>
  )
}

export default IconLink