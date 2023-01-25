import React from 'react'
import DestinationInfoPanel from '../../../../Components/DestinationInfoPanel';
import { GetCategoriesWithData } from '../../../../lib/SharedData';


type Props = {}

const Page = async (props: Props) => {
    const categoriesData =  await GetCategoriesWithData();
    return (
        <div className=' pt-16'>
            technology
            <div className=' flex h-full w-full  items-stretch justify-around'>
                <div className=' relative'>
                    <DestinationInfoPanel categoriesWithData={categoriesData} />
                </div>

            </div>
        </div>
    )
}

export default Page