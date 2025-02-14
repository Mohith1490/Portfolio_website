import Card from '@/components/ui/Card'
import { ProjectDetails } from '@/utils/ProjectInfo';
import React from 'react'

const Page = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center p-5">
            <div className="w-full max-w-screen-lg mt-20 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Projects:</h1>
                <section className="w-[100%] h-auto border-2 border-white p-4 sm:p-6 md:p-10 rounded-xl grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                    {
                        ProjectDetails.map((data,index)=>{
                           return (
                            <Card key={index} {...data} />
                           )
                        })
                    }
                 
                </section>
            </div>
        </div>
    )
}

export default Page;
