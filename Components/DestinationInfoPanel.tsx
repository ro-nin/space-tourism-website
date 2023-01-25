'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { ExternalData, Category, CategoryMeta } from '../lib/SharedData'
import { getCategoryPath, getPath, getSectionDataFromPathname } from '../lib/utils'

type Props = {
    categoriesWithData: Category[]
}

const DestinationInfoPanel = ({ categoriesWithData }: Props) => {
    const clientPathName = usePathname()
    const section = getSectionDataFromPathname(clientPathName, categoriesWithData)
    return (
        <div className='flex flex-col'>
            <h2>{section?.name.toLocaleUpperCase()}</h2>
        </div>
    )
}

export default DestinationInfoPanel


