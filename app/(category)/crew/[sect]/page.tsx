import React from 'react'
import CrewImagePanel from '../../../../Components/CrewImagePanel';
import CrewInfoPanel from '../../../../Components/CrewInfoPanel';
import DestinationInfoPanel from '../../../../Components/DestinationInfoPanel';
import { GetCategoriesWithData } from '../../../../lib/SharedData';



type Props = {}

const Page = async (props: Props) => {
    const categoriesData = await GetCategoriesWithData();
    return (


        <div className=' flex-1  flex relative  grow gap-16 lg:gap-0  w-full flex-col lg:flex-row items-center lg:items-end justify-end lg:justify-around'>
            <div className='   lg:h-full w-[80%] lg:w-[45%] '>
                <CrewInfoPanel categoriesWithData={categoriesData} />
            </div>
            <div className=' relative aspect-auto h-[65%] lg:h-full w-full lg:w-[55%] '>
                <CrewImagePanel categoriesWithData={categoriesData} />
            </div>

        </div>

    )
}

export default Page