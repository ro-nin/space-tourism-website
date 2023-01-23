'use client';
import React from 'react'
import { usePathname } from 'next/navigation';
import { Section } from '../lib/SharedData';
import Link from 'next/link';

type Props = {
    sections: Section[]
}

const Header = ({ sections }: Props) => {
    const pathname = usePathname();
    const splittedPNs = pathname?.split('/')

    return (<div className='flex gap-4'>
        {
            sections.map((sec, index) => {
                return <Link   key={sec.slug} href={'/'+sec.slug}>
                    <h5 className={`${(pathname === '/' && sec.slug === '/')
                        ||
                        (splittedPNs !== undefined && sec.slug === splittedPNs[1]) ?
                        'text-red-400' : ''}`}><span>0{index}</span>{sec.name}</h5>
                </Link>

            })
        }
    </div>

    )
}

export default Header