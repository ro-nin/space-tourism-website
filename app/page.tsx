import React from 'react'
import LandingPageMainButton from '../Components/LandingPageMainButton'

type Props = {}
//todo GET DATA DYNAMICALLY FOR sections
const Page = (props: Props) => {
  return (
    <div className=' h-full w-full flex  gap-4 flex-col lg:flex-row  items-center justify-evenly lg:items-end'>
      <div className='w-auto max-w-[50%] pb-24 gap-4 flex flex-col'>
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p >"Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"</p>
      </div >
      <div className='flex items-end justify-end flex-col'>
        <LandingPageMainButton></LandingPageMainButton></div>

    </div>

  )
}

export default Page