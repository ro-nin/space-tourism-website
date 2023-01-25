'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { ExternalData, Category, CategoryMeta } from '../lib/SharedData'
import { getCategoryPath, getPath, getSectionDataFromPathname, NavLinksType } from '../lib/utils'
import Navlinks from './Navlinks'

type Props = {
    categoriesWithData: Category[]
}

const DestinationInfoPanel = ({ categoriesWithData }: Props) => {
    const clientPathName = usePathname()
    const currentCategory = getCategoryPath(clientPathName)
    const section = getSectionDataFromPathname(clientPathName, categoriesWithData)
    const navlinks: NavLinksType[] = categoriesWithData.find((cat) => (cat.meta?.slug === currentCategory))!.data.map((sec) => {
        return {
            displayName: sec.name!,
            url: `${currentCategory}/${sec.name.toLocaleLowerCase().replace(' ', '-')}`,
        }
    })
    const activeIndex = navlinks.findIndex((sec) =>  sec.displayName.toLowerCase() === section?.name.toLowerCase() )
    return (
        <div className='flex flex-col  gap-4 lg:gap-12 items-center lg:items-start transition-all'>
            <Navlinks small={true} withNumber={false} links={navlinks} activeIndex={activeIndex}></Navlinks>
            <h2 className='uppercase mx-auto'>{section?.name}</h2>
        </div>
    )
}

export default DestinationInfoPanel


