import React from 'react'
import DestinationImagePanel from '../../../../Components/DestinationImagePanel';
import DestinationInfoPanel from '../../../../Components/DestinationInfoPanel';
import { GetCategoriesWithData } from '../../../../lib/SharedData';

type Props = {}

const Page = async (props: Props) => {
    const sectionsData =  await GetCategoriesWithData();
    return (
        <div className=' pt-16'>
            destinations
            <div className=' flex h-full w-full  items-stretch justify-around'>
                <div className='w-80 aspect-square relative'>
                    <DestinationImagePanel categoriesWithData={sectionsData} />
                </div>
                <div>
                    <DestinationInfoPanel categoriesWithData={sectionsData} />
                </div>
            </div>
        </div>
    )
}

export default Page