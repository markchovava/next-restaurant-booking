"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { reactToastifyDark } from '@/_utils/reactToastify';
import { toast } from 'react-toastify';
import { useTablePlanStore } from '@/_store/useTablePlanStore';
import { useBookingStore } from '@/_store/useBookingStore';
import TextInput from '../inputs/TextInput';
import SelectInputPrimary from '../inputs/SelectInputPrimary';
import { TimeData } from '@/_data/sample/BookingData';
import ButtonPrimary from '../buttons/ButtonPrimary';
import ButtonClose from '../buttons/ButtonClose';
import RecordPrimary from '../records/RecordPrimary';
import StickerPrimary from '../stickers/StickerPrimary';
import { BookingTimeData } from '@/_data/sample/BookingTimeData';
import CardTertiary from '../cards/CardTertiary';
import TextAreaInput from '../inputs/TextAreaInput';



const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
        }
    },
}



export default function BookingFormModal() {
    const { toggleModal, setToggleModal, selectedTable } = useTablePlanStore()
    const { data, setData, setInputValue, isSubmitting, setIsSubmitting, errors } = useBookingStore()
    

    async function postData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true)
        setTimeout(() => {
            toast.success("Booking sent successfully, check your email");
            setToggleModal(false)
            setIsSubmitting(false)
        }, 3000);
    }
  return (
    <>
    <AnimatePresence>
        {toggleModal &&
        <motion.section
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='w-screen h-screen fixed top-0 left-0 z-200 overflow-y-auto' >
            <div className='absolute z-0 top-0 left-0 w-full h-full bg-black opacity-40'></div>
            <div className='w-full h-full absolute z-10 overflow-auto scroll__width py-24'>
            <section className='mx-auto lg:w-[50%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                    <ButtonClose setToggleModal={setToggleModal} />
                </div>
                <form onSubmit={postData}>
                    <h2 className='text-[2.5rem] font-light text-center border-b border-gray-300'>
                    {selectedTable?.name}
                    </h2>
                    <div className='h-2' />
                    <section className='flex items-center justify-center gap-2 font-medium'>
                        <p>{selectedTable?.name ?? ""}</p>~
                        <p>{selectedTable?.floor ?? ""}</p>~
                        <p>{selectedTable?.details ?? ""}</p>
                    </section>
                    <div className='h-6' />
                    <div className='border-b border-gray-300' />
                    <div className='h-6' />
                    {/*  */}
                    <TextInput 
                        label="Full Name"
                        type="text"
                        name="fullName"
                        onChange={setInputValue}
                        value={data.fullName}
                        placeholder="Enter Full Name here..."
                        error=""
                    />
                    {/*  */}
                    <TextInput 
                        label="Email"
                        type="email"
                        name="email"
                        onChange={setInputValue}
                        value={data.email}
                        placeholder="Enter Email here..."
                        error=""
                    />
                    {/*  */}
                    <TextInput 
                        label="Phone"
                        type="text"
                        name="phone"
                        onChange={setInputValue}
                        value={data.phone}
                        placeholder="Enter Phone Number here..."
                        error=""
                    />

                    <TextInput 
                        label="Number of Guests"
                        type="number"
                        name="numberOfGuests"
                        onChange={setInputValue}
                        value={data.numberOfGuests}
                        placeholder="Enter Number Of Guests here..."
                        error=""
                    />

                    <TextAreaInput 
                        label="Notes"
                        type="number"
                        name="notes"
                        onChange={setInputValue}
                        value={data.notes}
                        placeholder="Enter Notes here..."
                        error=""
                    />

                  
                    
                    {/*  */}
                    <ButtonPrimary title='Submit' status={isSubmitting} />
                </form>

            </section>
            </div>
        </motion.section>
        }
    </AnimatePresence>
    </>
  )
}
