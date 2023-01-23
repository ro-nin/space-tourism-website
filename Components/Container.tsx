'use client';

import { usePathname } from 'next/navigation';
import React from 'react'
import { Section } from '../lib/SharedData'

type Props = {
    sections: Section[],
    children: React.ReactNode;
}


const Container = ({ sections, children, }: Props) => {
    const pathname = usePathname();
    const splittedPNs = pathname?.split('/')

    //TODO move to sections
    const bgHome = 'bg-home-desktop';
    const bgCrew = 'bg-crew-desktop';
    const bgTechnology = 'bg-technology-desktop';
    const bgdestinations = 'bg-destination-desktop';

    const bgStyle = pathname === '/' ? bgHome
        : splittedPNs![1] === 'crew' ? bgCrew
            : splittedPNs![1] === 'technology' ? bgTechnology
                : splittedPNs![1] === 'destinations' ? bgdestinations : ''
    return <div className={`${bgStyle} bg-cover h-screen w-screen py-8 flex flex-col`}>{children}</div>

}

export default Container