'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ExternalData, Category, CategoryMeta, Destination } from '../lib/SharedData'
import { getCategoryPath, getSectionDataFromPathname } from '../lib/utils'

type Props = {
    categoriesWithData: Category[]
}

const DestinationImagePanel = ({ categoriesWithData }: Props) => {
    const clientPathName = usePathname()
    const section = getSectionDataFromPathname(clientPathName, categoriesWithData) as Destination
    return (
        <Image className='z-10 aspect-square object-contain' src={section?.images?.webp.replace('./assets/', '/assets/')} fill alt={''} />
    )
}

export default DestinationImagePanel

