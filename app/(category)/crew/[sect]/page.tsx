import React from 'react'
import CrewImagePanel from '../../../../Components/CrewImagePanel';
import CrewInfoPanel from '../../../../Components/CrewInfoPanel';
import DestinationInfoPanel from '../../../../Components/DestinationInfoPanel';
import { GetCategoriesWithData } from '../../../../lib/SharedData';



type Props = {}

const Page = async (props: Props) => {
    const categoriesData = await GetCategoriesWithData();
    return (


        <div className='relative h-full w-full 
        flex-1  flex flex-col lg:flex-row  gap-4 lg:gap-0  pt-12 md:pt-6
         items-center lg:items-end justify-end lg:justify-around '>
            <div className='md:order-first order-last   lg:h-full w-[80%] lg:w-[45%] '>
                <CrewInfoPanel categoriesWithData={categoriesData} />
            </div>
            <div className=' relative aspect-auto h-[55%] md:h-full w-full lg:w-[55%] '>
                <CrewImagePanel categoriesWithData={categoriesData} />
            </div>

        </div>

    )
}

export default Page