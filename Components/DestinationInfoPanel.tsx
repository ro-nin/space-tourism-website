'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { ExternalData, Category, CategoryMeta, Destination } from '../lib/SharedData'
import { getCategoryPath, getPath, getSectionDataFromPathname, NavLinksType } from '../lib/utils'
import Navlinks from './Navlinks'

type Props = {
    categoriesWithData: Category[]
}

const DestinationInfoPanel = ({ categoriesWithData }: Props) => {
    const clientPathName = usePathname()
    const currentCategory = getCategoryPath(clientPathName)
    const section = getSectionDataFromPathname(clientPathName, categoriesWithData) as Destination
    const navlinks: NavLinksType[] = categoriesWithData.find((cat) => (cat.meta?.slug === currentCategory))!.data.map((sec) => {
        return {
            displayName: sec.name!,
            url: `${currentCategory}/${sec.name.toLocaleLowerCase().replace(' ', '-')}`,
        }
    })
    const activeIndex = navlinks.findIndex((sec) => sec.displayName.toLowerCase() === section?.name.toLowerCase())
    return (
        <div className='flex flex-col  gap-6  items-center lg:items-start transition-all'>
            <Navlinks small={true} withNumber={false} links={navlinks} activeIndex={activeIndex}></Navlinks>
            {section && <><h2 className='uppercase '>{section?.name}</h2>
                <p className='text-center lg:text-left'>{section.description}</p>
                <div className='h-[2px] w-full border border-neutral-shade border-opacity-70'></div>
                <div className='grid grid-cols-2 w-[80%] justify-center lg:justify-evenly '>
                    <div className='text-center lg:text-left'>
                        <span className='subh2 block text-neutral-shade'>
                            AVG. DISTANCE
                        </span >
                        <span className='subh1'>
                            {section.distance}
                        </span>
                    </div>
                    <div className='text-center lg:text-left'>
                        <span className='subh2 block text-neutral-shade'>
                            EST. TRAVEL TIME
                        </span >
                        <span className='subh1'>
                            {section.travel}
                        </span>
                    </div>
                </div></>}
        </div>
    )
}

export default DestinationInfoPanel


