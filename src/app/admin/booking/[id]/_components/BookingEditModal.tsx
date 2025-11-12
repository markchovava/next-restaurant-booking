"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { toast } from 'react-toastify';
import ButtonClose from '@/_components/buttons/ButtonClose';
import TextInput from '@/_components/inputs/TextInput';
import ButtonPrimary from '@/_components/buttons/ButtonPrimary';
import TextAreaInput from '@/_components/inputs/TextAreaInput';
import { useAdminTableBookingScheduleStore } from '@/_store/useAdminTableBookingScheduleStore';
import SelectInputPrimary from '@/_components/inputs/SelectInputPrimary';
import { BookingTimeData2 } from '@/_data/sample/BookingTimeData';
import { BookingStatusData } from '@/_data/sample/BookingStatusData';
import { _tableBookingScheduleUpdateAction } from '@/_api/_actions/TableBookingScheduleActions';




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




export default function BookingEditModal({ id }: {id: number | string}) {
    const { 
      toggleModal, 
      setToggleModal, 
      data,  
      setInputValue, 
      isSubmitting, 
      setIsSubmitting,
      validateForm1,
      clearErrors,
      getData,
      errors
    } = useAdminTableBookingScheduleStore()

    

    async function postData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        clearErrors();
        // Validate form using store
        const validation = validateForm1();
        if (!validation.isValid) {
            const firstError = validation.errors.fullName || 
                validation.errors.email ||
                validation.errors.phone || 
                validation.errors.numberOfGuests ||
                validation.errors.date || 
                validation.errors.time ||
                validation.errors.status
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true)
        const formData = {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            date: data.date,
            time: data.time,
            status: data.status,
            css: statusToCss(data.status),
            numberOfGuests: data.numberOfGuests,
            notes: data.notes,
            tableFloorPlanId: data.tableFloorPlanId,
        }
        console.log("formData::: ", formData)
        setIsSubmitting(false);
        try {
            const res = await _tableBookingScheduleUpdateAction(id,formData);
            if (res.status === 1) {
                toast.success(res.message);
                await getData(id);
                clearErrors();
                //resetData();
                setToggleModal(false);
            } else {
                toast.error(res.message || 'Failed to update. Please try again.');
                console.error('Server response:', res);
            }
        } catch (error) {
            toast.error('Failed to save data. Please try again.');
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }

       /*  setTimeout(() => {
            toast.success("Data Saved successfully");
            setToggleModal(false)
            setIsSubmitting(false)
        }, 3000); */
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
                    <TextInput 
                        label="Full Name"
                        type="text"
                        name="fullName"
                        onChange={setInputValue}
                        value={data.fullName}
                        placeholder="Enter Name here..."
                        error={errors.fullName}
                    />
                    {/*  */}
                    <TextInput 
                        label="Email"
                        type="email"
                        name="email"
                        onChange={setInputValue}
                        value={data.email}
                        placeholder="Enter Email here..."
                        error={errors.email}
                    />
                    {/*  */}
                    <TextInput 
                        label="Phone"
                        type="text"
                        name="phone"
                        onChange={setInputValue}
                        value={data.phone}
                        placeholder="Enter Phone Number here..."
                        error={errors.phone}
                    />
                    {/*  */}
                    <TextInput 
                        label="Date"
                        type="date"
                        name="date"
                        onChange={setInputValue}
                        value={data.date}
                        placeholder="Enter Date here..."
                        error={errors.date}
                    />
                    {/*  */}
                    <SelectInputPrimary 
                        label="Time"
                        data={BookingTimeData2}
                        type="text"
                        name="time"
                        onChange={setInputValue}
                        value={data.time}
                        placeholder="Enter Time here..."
                        error={errors.time}
                    />
                    <SelectInputPrimary 
                        label="Status"
                        data={BookingStatusData}
                        type="text"
                        name="status"
                        onChange={setInputValue}
                        value={data.status}
                        placeholder="Enter Status here..."
                        error={errors.status}
                    />
                    {/*  */}
                    <TextAreaInput 
                        label="Notes"
                        type="text"
                        name="notes"
                        onChange={setInputValue}
                        value={data.notes}
                        placeholder={`Kindly advise us of any allergens, dietary restrictions or any other special requirements...`}
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


/* UTITLITY */
function statusToCss(status: string){
    switch(status) {
        case 'Available':
            return 'fill__available';
        case 'Reserved':
            return 'fill__reserved';
        case 'Unavailable':
            return 'fill__unavailable';
        default:
            return 'fill__available'
    }
}
