'use client';
import Link from 'next/link'
import React from 'react'
import { Section } from '../lib/SharedData'
import { usePathname } from 'next/navigation';

type Props = {
    sections: Section[]
}

const Navbar = ({ sections }: Props) => {
    const pathname = usePathname();
    const splittedPNs = pathname?.split('/')
    return (
        <nav className='
            grow-0 flex ml-auto h-screen md:h-auto  md:flex-row flex-col items-center
            gap-10 px-28 py-8
            bg-neutral-light bg-opacity-10 backdrop-blur-lg relative '>
            <div className='hidden lg:inline absolute h-[1px]
             lg:w-[26rem] lg:-translate-x-[30rem] 
             xl:w-[30rem] xl:-translate-x-[35rem] 
             2xl:w-[37rem] 2xl:-translate-x-[40rem] 
               z-50   bg-neutral-shade'></div>

            {sections.map((sec, index) => (
                <Link key={sec.slug} href={'/' + sec.slug}>
                    <h6 className={`nav-underline  ${(pathname === '/' && sec.slug === '/')
                        ||
                        (splittedPNs !== undefined && sec.slug === splittedPNs[1]) ?
                        ' nav-underline-active ' : ''}`}><span>0{index}</span> {sec.name}</h6>
                </Link>
            ))}
        </nav>
    )
}

export default Navbar