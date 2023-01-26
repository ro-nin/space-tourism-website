import Link from 'next/link'
import React from 'react'
import { NavLinksType } from '../lib/utils'

export type NavLinksProps = {
    links: NavLinksType[],
    activeIndex: number,
    withNumber?: boolean,
    small?: boolean
}

const Navlinks = ({ links, activeIndex, withNumber = true, small = false }: NavLinksProps) => {
    console.log(activeIndex)
    return (
        <div className='flex gap-8'>
            {links.map((sec, index) => (
                <Link key={sec.url} href={'/' + sec.url}>
                    <span className={`nav-underline uppercase ${small && "nav-underline-small"}  ${index === activeIndex ?
                        ' nav-underline-active ' : ''}`}>
                        {withNumber && <span>0{index}</span>}
                        {sec.displayName}
                        </span>
                </Link>
            ))}
        </div>
    )
}

export default Navlinks