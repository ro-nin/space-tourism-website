import React from 'react'

type Props = {}

const LandingPageMainButton = (props: Props) => {
    return (
        <button className='flex justify-center items-center rounded-full
        transition-colors duration-500
        bg-neutral-light bg-opacity-0 hover:bg-opacity-10
        h-96 w-96'>
            <div className=' h-56 w-56 flex justify-center items-center
              bg-opacity-100  bg-neutral-light  rounded-full'>
                <h4 className='text-dark uppercase'>Explore</h4>
            </div>
        </button>
    )
}

export default LandingPageMainButton