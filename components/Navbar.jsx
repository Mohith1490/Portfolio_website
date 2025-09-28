"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex sticky top-3 justify-center z-20">
            <div className="w-[90vw] md:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] min-h-12 md:min-h-16 border-2 border-white bg-black px-5 md:px-8 relative flex items-center rounded-3xl">
                <div className="hidden md:flex space-x-6 text-sm md:text-base w-full justify-between">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/about" className="hover:text-gray-300">About Me</Link>
                    <Link href="/projects" className="hover:text-gray-300">Projects</Link>
                    <Link href="/skills" className="hover:text-gray-300">Skills</Link>
                    <Link href="/experience" className="hover:text-gray-300">Experience</Link>
                    <Link href="/contacts" className="hover:text-gray-300">Contacts</Link>
                </div>

                <div className="md:hidden w-full" >
                    <div className="flex items-center justify-between w-full" >
                        <Link href="/" className="hover:text-gray-300">Portfolio</Link>
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span
                                className={`absolute h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                                    }`}
                            />
                            <span
                                className={`absolute h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                                    }`}
                            />
                            <span
                                className={`absolute h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                                    }`}
                            />
                        </button>
                    </div>

                    <div className={`absolute top-14 left-0 w-full bg-black border-2 border-white rounded-2xl flex flex-col items-center space-y-4 py-5 md:hidden transform transition-all duration-300 origin-top ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>
                        {/* <Link href="/" onClick={() => setIsOpen(false)}>Home</Link> */}
                        <Link href="/about" onClick={() => setIsOpen(false)}>About Me</Link>
                        <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                        <Link href="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
                        <Link href="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
                        <Link href="/contacts" onClick={() => setIsOpen(false)}>Contacts</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
