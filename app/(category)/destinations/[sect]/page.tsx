import React from 'react'
import DestinationImagePanel from '../../../../Components/DestinationImagePanel';
import DestinationInfoPanel from '../../../../Components/DestinationInfoPanel';
import { GetCategoriesWithData } from '../../../../lib/SharedData';

type Props = {}

const Page = async (props: Props) => {
    const sectionsData = await GetCategoriesWithData();
    return (

        <div className=' flex flex-col lg:flex-row h-full lg:h-[80%] w-[80%] mx-auto my-auto lg:w-full gap-6 lg:gap-0  lg:items-stretch justify-center items-center 
        lg:justify-evenly transition-all'>
            <div className='w-[80%] h-[40%] lg:h-full  lg:w-[35%] relative'>
                <DestinationImagePanel categoriesWithData={sectionsData} />
            </div>
            <div className='w-full lg:w-[35%]'>
                <DestinationInfoPanel categoriesWithData={sectionsData} />
            </div>
        </div>

    )
}

export default Page