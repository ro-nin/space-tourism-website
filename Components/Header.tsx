'use client';
import React from 'react'
import { Section } from '../lib/SharedData';
import Link from 'next/link';
import Navbar from './Navbar';
import Logo from '../public/assets/shared/logo.svg'
type Props = {
    sections: Section[]
}

const Header = ({ sections }: Props) => {


    return (<header className='flex w-full  items-start md:items-center justify-between
     absolute md:relative lg:pt-8 pl-6 right-0 top-0 '>
        <Logo className='mt-8 md:mt-0'></Logo>
        <Navbar sections={sections}></Navbar>
    </header>

    )
}

export default Header