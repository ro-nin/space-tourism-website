import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className=' h-full w-full flex pb-24 gap-8 flex-col lg:flex-row  items-center justify-evenly lg:items-end'>
      <div className='w-auto'>
        <h1>home stuff</h1>
        <h2>home stuff</h2>
        <h3>home stuff</h3>
      </div >
      <div className=' w-auto'><button>Explor</button></div>
    </div>
  )
}

export default Page