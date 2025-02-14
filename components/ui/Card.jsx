import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({image,title,description,sourcecode,link}) => {
    return (
        <div className="w-full max-w-[90vw] sm:max-w-md md:max-w-lg border-2 border-white p-4 sm:p-6 rounded-2xl flex flex-col items-center text-white">
            <div className="w-full h-48 relative rounded-xl overflow-hidden">
                <Image 
                    src={image}
                    alt={title} 
                    fill 
                    className="border-2 border-white rounded-xl object-cover"
                />
            </div>
            <h1 className="text-lg sm:text-xl font-semibold mt-3 text-center">{title}</h1>
            <p className="w-full h-20 p-2 overflow-y-hidden text-sm sm:text-base text-gray-300 text-center">
                {description}
            </p>
            <div className="w-full flex flex-wrap justify-center sm:justify-between items-center mt-3 gap-3">
                <Link href={link || "#"} target='_blank' className="w-full  p-2 h-10 border-2 border-white rounded-xl hover:bg-gray-50 hover:bg-opacity-10 hover:scale-105 transition text-center flex items-center justify-center">
                    <button className=' text-[1.2em] ' >
                        View
                    </button>
                </Link>
                <Link href={sourcecode || "#"} target='_blank' className="w-full  flex items-center justify-center px-4 py-2 h-10 border-2 border-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500  bg-opacity-75 rounded-xl hover:bg-blue-700 hover:bg-opacity-95 hover:scale-105">
                    <button className='text-[13px] sm:text-[15px] md:text-[1.1em]' >
                        View Source Code
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
