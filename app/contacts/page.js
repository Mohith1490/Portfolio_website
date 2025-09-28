"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Toast from '@/components/ui/Toast'


const Page = () => {
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);

        const response = await fetch("/api/contact", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            setToast({ message: "Message sent successfully!", type: "success" });
            e.target.reset();
        } else {
            setToast({ message: response.message || "Error sending message.", type: "error" });
        }
        setLoading(false);
    };

    return (
        <>
            <div className='w-full min-h-screen flex justify-center items-center'>
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
                <section className='w-full max-w-4xl bg-black border-2 border-white p-7 md:p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8'>
                    <form onSubmit={handleSubmit} className='w-full md:w-[45%] h-auto p-2 overflow-y-auto max-h-[70vh]'>
                        <label className='label-text'>Full Name:</label>
                        <input name='name' type='text' className='w-full outline-none focus:bg-transparent bg-black border-b border-white p-1 mb-3' required />
                        <label className='label-text'>Email:</label>
                        <input name='email' type='email' className='w-full outline-none bg-black border-b border-white p-1 mb-3' required />
                        <label className='label-text'>Message:</label>
                        <textarea name='message' className='w-full outline-none bg-black border border-white p-5 rounded-xl mt-3' required />
                        <button disabled={loading} type='submit' className='w-full md:w-32 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 border-white rounded-xl p-2 mt-3 hover:bg-opacity-75 font-bold '>
                            {loading ? "sending..." : "Send"}
                        </button>
                    </form>
                    <div className='w-full md:w-[50%] grid grid-cols-2 gap-8 justify-center items-center'>
                        <Link href='https://github.com/Mohith1490' target='_blank' className='social-box place-self-end'>
                            <Image src='/github.svg' width={50} height={50} alt='github' />
                        </Link>
                        <Link href='https://www.linkedin.com/in/mohithsingh1754/' target='_blank' className='social-box justify-self-start self-end'>
                            <Image src='/linkedin.svg' width={50} height={50} alt='linkedin' />
                        </Link>
                        <Link href='https://x.com/MohithSingh_108' target='_blank' className='social-box justify-self-end self-start'>
                            <Image src='/x.svg' width={50} height={50} alt='x' />
                        </Link>
                        {/* <Link href='https://www.reddit.com/user/OkCartoonist266/' target='_blank' className='social-box place-self-start'>
                            <Image src='/reddit.svg' width={50} height={50} alt='reddit' />
                        </Link> */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Page;

