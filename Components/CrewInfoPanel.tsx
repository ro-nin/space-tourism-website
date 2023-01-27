'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Category, Crew, Destination } from '../lib/SharedData'
import { getCategoryPath, getSectionDataFromPathname, NavLinksType } from '../lib/utils'
import NavLinksPoints from './NavLinksPoints'

type Props = {
    categoriesWithData: Category[]
}

const CrewInfoPanel = ({ categoriesWithData }: Props) => {
    const clientPathName = usePathname()
    const currentCategory = getCategoryPath(clientPathName)
    const section = getSectionDataFromPathname(clientPathName, categoriesWithData) as Crew
    const navlinks: NavLinksType[] = categoriesWithData.find((cat) => (cat.meta?.slug === currentCategory))!.data.map((sec) => {
        return {
            displayName: sec.name!,
            url: `${currentCategory}/${sec.name.toLocaleLowerCase().replace(' ', '-')}`,
        }
    })
    const activeIndex = navlinks.findIndex((sec) => sec.displayName.toLowerCase() === section?.name.toLowerCase())

    return (
        <div className='h-full w-full flex flex-col gap-4 justify-center items-center lg:items-start  text-center lg:text-left  '>
            <h4 className='mt-auto uppercase text-neutral-shade '>{section && section.role}</h4>
            <h3 className='uppercase xl:whitespace-nowrap'>{section && section.name}</h3>
            <p className=' '>{section && section.bio}</p>
            <div className='lg:my-auto'>
                <NavLinksPoints links={navlinks} activeIndex={activeIndex} />
            </div>
        </div>
    )
}

export default CrewInfoPanel