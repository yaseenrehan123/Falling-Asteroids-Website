import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const FormSubmitButton = ({isLoading}:{isLoading:boolean}) => {
    return (
        <button
            type='submit'
            disabled={isLoading}
            className='flex justify-center items-center gap-3 bg-gray-700 border-2 border-black rounded-2xl pb-5 pt-5 pl-7 pr-7 hover:cursor-pointer hover:bg-gray-600 hover:scale-95 transition-all'
        >
            <p>{isLoading ? 'Loading...' : 'Submit'}</p>
            <FaArrowRight  className={`${isLoading ? 'hidden' : 'block'}`}/>
        </button>
    )
}

export default FormSubmitButton