import Link from 'next/link'
import React from 'react'
import { NavLinksType } from '../lib/utils'

type Props = {
    links: NavLinksType[],
    activeIndex: number,
    withNumber?: boolean,
    small?: boolean
}

const Navlinks = ({ links, activeIndex, withNumber = true, small = false }: Props) => {
    console.log(activeIndex)
    return (
        <div className='flex gap-8'>
            {links.map((sec, index) => (
                <Link key={sec.url} href={'/' + sec.url}>
                    <h6 className={`nav-underline uppercase ${small && "nav-underline-small"}  ${index === activeIndex ?
                        ' nav-underline-active ' : ''}`}>
                        {withNumber && <span>0{index}</span>}
                        {sec.displayName}</h6>
                </Link>
            ))}
        </div>
    )
}

export default Navlinks