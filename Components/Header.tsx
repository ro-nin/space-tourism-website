'use client';
import React from 'react'
import { Section } from '../lib/SharedData';
import Link from 'next/link';
import Navbar from './Navbar';

type Props = {
    sections: Section[]
}

const Header = ({ sections }: Props) => {


    return (<header className='flex '>

        {/* logo */}
        <div></div>
        <div></div>
        {/* line */}
        <Navbar sections={sections}></Navbar>
    </header>

    )
}

export default Header