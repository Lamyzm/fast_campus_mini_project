'use client'
import Icons from '../icons/icons'
import Image from 'next/image';


const SelectedRoomMain = ({ data }) => {

    return (
        <div className="w-full mx-auto">
            {data && (
                <div className="bg-gray-50 rounded-lg p-6 mt-4">
                    <div className='py-2 px-2'>
                        <Image
                            src={data.image}
                            loading="lazy"
                            width={920}
                            height={596}
                            alt={data.accommodationName}
                            className="rounded-md"
                            layout="responsive" 
                            quality={75} 
                        />
                    </div>
                    <div className="mt-12">
                        <h1 className="ml-[6px] text-xl font-bold text-gray-800">{data.accommodationName}</h1>
                        <p className="flex items-center font-bold text-blue-900 mt-2"><Icons type="LocationOnOutlinedIcon" size="large" color="primary" />{data.address.split(' ')[0]} {data.address.split(' ')[1]}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SelectedRoomMain
