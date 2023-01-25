import React from 'react'
import DestinationImagePanel from '../../../../Components/DestinationImagePanel';
import DestinationInfoPanel from '../../../../Components/DestinationInfoPanel';
import { GetCategoriesWithData } from '../../../../lib/SharedData';

type Props = {}

const Page = async (props: Props) => {
    const sectionsData = await GetCategoriesWithData();
    return (
        <div className=' pt-16 transition-all'>
            <div className=' flex flex-col lg:flex-row h-full w-full gap-8 lg:gap-0  lg:items-stretch justify-center items-center lg:justify-evenly transition-all'>
                <div className='w-[25%] aspect-square relative'>
                    <DestinationImagePanel categoriesWithData={sectionsData} />
                </div>
                <div className='w-full lg:w-[30%]'>
                    <DestinationInfoPanel categoriesWithData={sectionsData} />
                </div>
            </div>
        </div>
    )
}

export default Page