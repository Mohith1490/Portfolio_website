import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className='w-full flex fixed mt-3 justify-center z-10' >
                <div className='w-[90vw] md:w-[50vw] 2xl:w-[40vw] h-12 md:h-16 border-2 border-white bg-black p-4 relative justify-between items-center flex rounded-3xl' >
                    <Link href={"/"} className='hover-button' >Home</Link>
                    <Link href={"/about"} className='hover-button' >About Me</Link>
                    <Link href={"/projects"} className='hover-button' >Projects</Link>
                    <Link href={"/skills"} className='hover-button' >Skills</Link>
                    <Link href={"/contacts"} className='hover-button' >Contacts</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar