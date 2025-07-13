import React from 'react'

const Section = ({children,id}:{children:React.ReactNode,id:string}) => {
  return (
    <div className='w-full bg-gray-800 flex flex-col items-center gap-5 text-white text-center pt-5 pb-5' id={id}>
        {children}
    </div>
  )
}

export default Section