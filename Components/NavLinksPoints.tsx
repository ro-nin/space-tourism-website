import Link from 'next/link'
import React from 'react'
import { NavLinksProps } from './Navlinks'



const NavLinksPoints = ({ links, activeIndex, }: NavLinksProps) => {
    return (
        <div className='flex gap-4 items-center'>
            {links.map((sec, index) => (
                <Link key={sec.url} href={'/' + sec.url}>
                    <span className={`nav-point ${index === activeIndex ?
                        ' nav-point-active ' : ''}`}>
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default NavLinksPoints