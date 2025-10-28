"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { reactToastifyDark } from '@/_utils/reactToastify';
import { toast } from 'react-toastify';

interface AddModalProps {
    isModal: boolean;
    setIsModal: (isOpen: boolean) => void;
}

const variants: Variants = { // Explicitly type variants as Variants
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
        }
    },
}

const userData = {
    name: "",
    phone: "",
    email: "",
    number_of_guests: "",
    start_time: "",
    end_time: "",
}

const time = ["10.00am", "11.00am","12.00pm","1.00pm","2.00pm","3.00pm"]

export default function AddModal({ isModal, setIsModal }: AddModalProps) {
    const [data, setData] = useState(userData)
    const [errMsg, setErrMsg] = useState(userData)
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    async function postData() {
        
        setTimeout(() => {
            toast.success("Booking sent successfully, check your email", reactToastifyDark);
            setIsSubmit(false)
            setIsModal(false)
        }, 3000);
    }
  return (
    <>
    <AnimatePresence>
            {isModal &&
            <motion.section
                variants={variants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                className='w-[100vw] h-[100vh] fixed top-0 left-0 z-[200] overflow-y-auto' >
                <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
                <div className='w-[100%] h-[100%] absolute z-10 overflow-auto scroll__width py-[6rem]'>
                <section className='mx-auto lg:w-[50%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                    <div className='flex items-center justify-end'>
                    <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                        <IoClose className='text-2xl' />
                    </button>
                    </div>
                    <form action={postData} onSubmit={() => setIsSubmit(true)}>
                       <h2 className='text-[2.5rem] font-light mb-6 text-center border-b border-gray-300'>
                        Book Table
                        </h2>
                        {/*  */}
                        <div className='w-[100%] mb-6'>
                            <p className='mb-2 leading-none text-sm font-light'>Name:</p>
                            <input 
                                type='text' 
                                name='name'
                                onChange={handleInput}
                                value={data?.name}
                                placeholder='Name' 
                                className='w-[100%] border border-gray-300 outline-none p-2' />
                            {errMsg?.name &&
                            <p className='text-red-600 text-sm'>{errMsg?.name}</p>}
                        </div>
                        {/*  */}
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='w-[100%] mb-6'>
                                <p className='mb-2 leading-none text-sm font-light'>Phone:</p>
                                <input 
                                    type='text' 
                                    name='phone'
                                    onChange={handleInput}
                                    value={data?.phone}
                                    placeholder='Phone Number' 
                                    className='w-[100%] border border-gray-300 outline-none p-2' />
                                {errMsg?.name &&
                                <p className='text-red-600 text-sm'>{errMsg?.name}</p>}
                            </div>
                            <div className='w-[100%] mb-6'>
                                <p className='mb-2 leading-none text-sm font-light'>Email:</p>
                                <input 
                                    type='text' 
                                    name='phone'
                                    onChange={handleInput}
                                    value={data?.phone}
                                    placeholder='Email' 
                                    className='w-[100%] border border-gray-300 outline-none p-2' />
                                {errMsg?.name &&
                                <p className='text-red-600 text-sm'>{errMsg?.name}</p>}
                            </div>
                        </div>
                        {/*  */}
                         <div className='grid grid-cols-2 gap-3'>
                            <div className='w-[100%] mb-6'>
                                <p className='mb-2 leading-none text-sm font-light'>Start Time:</p>
                                <select
                                    name='start_time'
                                    onChange={handleInput}
                                    value={data?.start_time}
                                    className='w-[100%] border border-gray-300 outline-none p-2'>
                                        <option value="">Choose Time</option>
                                        {time.map((i, key) => (
                                            <option key={key}>{i}</option>
                                        ))}
                                </select>
                                {errMsg?.name &&
                                <p className='text-red-600 text-sm'>{errMsg?.name}</p>}
                            </div>
                            <div className='w-[100%] mb-6'>
                                <p className='mb-2 leading-none text-sm font-light'>Ending Time:</p>
                                <select
                                    name='end_time'
                                    onChange={handleInput}
                                    value={data?.end_time}
                                    className='w-[100%] border border-gray-300 outline-none p-2'>
                                        <option value="">Choose Time</option>
                                        {time.map((i, key) => (
                                            <option key={key}>{i}</option>
                                        ))}
                                </select>
                                {errMsg?.name &&
                                <p className='text-red-600 text-sm'>{errMsg?.name}</p>}
                            </div>
                        </div>
                        {/*  */}
                        <div className='w-[100%]'>
                            <button 
                                type='submit' 
                                className='w-[100%] rounded-xl bg-gradient-to-br from-green-600 to-green-900 hover:bg-gradient-to-bl hover:from-green-600 hover:to-green-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-3'>
                               { isSubmit ? 'Processing' : 'Submit' }
                            </button>
                        </div>
                    </form>
    
                </section>
                </div>
            </motion.section>
            }
    </AnimatePresence>
    </>
  )
}
