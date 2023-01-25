import React from 'react'
import DestinationImagePanel from '../../../Components/DestinationImagePanel';
import DestinationInfoPanel from '../../../Components/DestinationInfoPanel';
import { GetCategoriesWithData } from '../../../lib/SharedData';

type Props = {}

const Page = async (props: Props) => {
    const sectionsData =  await GetCategoriesWithData();
    return (
        <div className='p-8 h-full'>
            <div className=' flex items-center justify-around'>
                <div>
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