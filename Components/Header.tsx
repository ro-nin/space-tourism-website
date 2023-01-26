import React from 'react'
import { CategoryMeta } from '../lib/SharedData';
import Link from 'next/link';
import Navbar from './Navbar';
import Logo from '../public/assets/shared/logo.svg'
type Props = {
    sections: CategoryMeta[]
}

const Header = ({ sections }: Props) => {

    const urls = sections.map((sec) => { return { displayName: sec.name, url: sec.slug } })


    return (<header className='flex w-full h-[20%]  z-50 items-start md:items-center justify-between
     absolute md:relative lg:pt-8 pl-6 right-0 top-0 '>
        <Logo className='mt-8 md:mt-0'></Logo>
        <Navbar links={urls}></Navbar>
    </header>

    )
}

export default Header