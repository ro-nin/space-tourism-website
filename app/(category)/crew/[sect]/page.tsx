import React from 'react'
import CrewImagePanel from '../../../../Components/CrewImagePanel';
import CrewInfoPanel from '../../../../Components/CrewInfoPanel';
import DestinationInfoPanel from '../../../../Components/DestinationInfoPanel';
import { GetCategoriesWithData } from '../../../../lib/SharedData';



type Props = {}

const Page = async (props: Props) => {
    const categoriesData = await GetCategoriesWithData();
    return (


        <div className=' flex-1  flex relative  grow  w-full items-end justify-around'>
            <div className='  h-full w-[45%] '>
                <CrewInfoPanel categoriesWithData={categoriesData} />
            </div>
            <div className=' relative aspect-auto h-full w-[55%] '>
                <CrewImagePanel categoriesWithData={categoriesData} />
            </div>

        </div>

    )
}

export default Page