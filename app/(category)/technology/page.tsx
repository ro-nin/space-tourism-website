import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const page = (props: Props) => {
    redirect('/technology/Launch-vehicle');
    return (
        <div>page</div>
    )
}

export default page