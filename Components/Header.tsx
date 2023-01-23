'use client';
import React from 'react'
import { usePathname } from 'next/navigation';
import { Section } from '../lib/SharedData';

type Props = {
    sections: Section[]
}

const Header = ({ sections }: Props) => {
    const pathname = usePathname();
    const splittedPNs = pathname?.split('/')

    return (<div className='flex gap-4'>
        {
            sections.map((sec, index) => {
                return <h5 key={sec.slug} className={`${(pathname === '/' && sec.slug === '/')
                    ||
                    (splittedPNs !== undefined && sec.slug === splittedPNs[1]) ?
                    'text-red-400' : ''}`}><span>0{index}</span>{sec.name}</h5>

            })
        }
    </div>

    )
}

export default Header