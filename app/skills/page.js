import React from 'react';
import Image from 'next/image';
import { skillData } from '@/utils/skillimages';

const Page = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-[90vw] sm:max-w-[80vw] 2xl:grid-cols-4 ml-[2vw] md:max-w-[60vw] h-auto p-4 rounded-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12 ">
        {skillData.map((data, index) => (
          <div
            key={index}
            className="w-24 h-32 sm:w-28 sm:h-36 2xl:w-[200px] 2xl:h-[20vh] border-2 p-3 border-white flex flex-col justify-center items-center rounded-xl shadow-md "
          >
            <div className='w-[80%] h-[70%] relative' >

              <Image src={data.image} alt={data.name} fill className="object-contain" />
            </div>
            <h5 className="text-xs sm:text-sm font-medium mt-2 text-center 2xl:text-3xl xl:text-xl ">{data.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
