'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ExternalData, Category, CategoryMeta } from '../lib/SharedData'
import { getCategoryPath, getSectionDataFromPathname } from '../lib/utils'

type Props = {
    categoriesWithData: Category[]
}

const DestinationImagePanel = ({ categoriesWithData }: Props) => {
    const clientPathName = usePathname()
    const section = getSectionDataFromPathname(clientPathName, categoriesWithData)
    return (
        <Image src={section?.images?.webp.replace('./assets/', '/assets/')} width={100} height={100} alt={''} />
    )
}

export default DestinationImagePanel

