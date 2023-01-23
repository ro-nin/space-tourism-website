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
        <div className='
            grow-0 flex ml-auto h-screen sm:h-auto absolute lg:relative right-0 top-0 sm:flex-row flex-col
            gap-10 px-28 py-8
            bg-neutral-light bg-opacity-10 backdrop-blur-lg '>
            {sections.map((sec, index) => (
                <Link key={sec.slug} href={'/' + sec.slug}>
                    <h6 className={`${(pathname === '/' && sec.slug === '/')
                        ||
                        (splittedPNs !== undefined && sec.slug === splittedPNs[1]) ?
                        ' underline sm:underline-offset-[36px]' : ''}`}><span>0{index}</span> {sec.name}</h6>
                </Link>
            ))}
        </div>
    )
}

export default Navbar