"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { reactToastifyDark } from '@/_utils/reactToastify';
import { toast } from 'react-toastify';
import { useTablePlanStore } from '@/_store/useTablePlanStore';
import { useBookingStore } from '@/_store/useBookingStore';
import RecordPrimary from '@/_components/records/RecordPrimary';
import ButtonClose from '@/_components/buttons/ButtonClose';
import TextInput from '@/_components/inputs/TextInput';
import SelectInputPrimary from '@/_components/inputs/SelectInputPrimary';
import { TimeData } from '@/_data/sample/BookingData';
import ButtonPrimary from '@/_components/buttons/ButtonPrimary';
import { useAppInfoStore } from '@/_store/useAppInfoStore';
import TextAreaInput from '@/_components/inputs/TextAreaInput';
import { BookingTimeData } from '@/_data/sample/BookingTimeData';
import CardTertiary from '@/_components/cards/CardTertiary';




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



export default function AppInfoEditModal() {
    const { 
      toggleModal, 
      setToggleModal, 
      data, 
      setData, 
      setInputValue, 
      isSubmitting, 
      setIsSubmitting } = useBookingStore()

    

    async function postData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true)
        setTimeout(() => {
            toast.success("Data Saved successfully");
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
                    <h2 className='text-[2.5rem] font-light mb-6 text-center border-b border-gray-300'>
                    Edit Booking
                    </h2>
                    {/*  */}
                    <section className='grid grid-cols-2 gap-6'>
                      {BookingTimeData.map((i, key) => (
                          <CardTertiary 
                              onClick={() => {}} 
                              status={i.status} 
                              startTime={i.startTime}
                              endTime={i.endTime}
                          />
                      ))}
                    </section>
                    {/*  */}
                    <TextInput 
                        label="Name"
                        type="text"
                        name="name"
                        onChange={setInputValue}
                        value={data.tableName}
                        placeholder="Enter Name here..."
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
                    {/*  */}
                    <TextInput 
                        label="Address"
                        type="text"
                        name="address"
                        onChange={setInputValue}
                        value={data.date}
                        placeholder="Enter Address here..."
                        error=""
                    />
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
                        label="Details"
                        type="text"
                        name="tableDetails"
                        onChange={setInputValue}
                        value={data.tableDetails}
                        placeholder="Enter Details here..."
                        error=""
                    />
                     {/*  */}
                    <TextAreaInput 
                        label="Phone"
                        type="text"
                        name="phone"
                        onChange={setInputValue}
                        value={data.phone}
                        placeholder="Enter Phone here..."
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
