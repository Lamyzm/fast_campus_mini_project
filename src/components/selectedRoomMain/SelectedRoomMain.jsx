'use client'
import RatingStar from '@/app/(route)/room/components/RatingStar';
import Icons from '../icons/icons'
import Image from 'next/image';
import CommentSlide from '@/app/(route)/room/components/CommentSlide';


const SelectedRoomMain = ({ data, comments }) => {

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
                    <div className="mt-8 flex justify-between px-2 py-2">
                        <div className='flex flex-col justify-center'>
                            <p className='text-gray-500 font-bold ml-1 text-base'>{data.category}</p>
                            <h1 className="text-xl font-bold text-gray-800 ml-1">{data.accommodationName}</h1>
                            <p className="mt-6 flex items-center font-bold text-blue-900 text-base"><Icons type="LocationOnOutlinedIcon" size="large" color="primary" />{data.address.split(' ')[0]} {data.address.split(' ')[1]}</p>
                        </div>
                        <div>
                            {/* commentSlide */}
                            {comments && (<CommentSlide comments={comments} />)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SelectedRoomMain
