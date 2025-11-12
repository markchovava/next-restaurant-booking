"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { toast } from 'react-toastify';
import { useTablePlanStore } from '@/_store/useTablePlanStore';
import TextInput from '../inputs/TextInput';
import ButtonPrimary from '../buttons/ButtonPrimary';
import ButtonClose from '../buttons/ButtonClose';
import TextAreaInput from '../inputs/TextAreaInput';
import { useTableBookingScheduleStore } from '@/_store/useTableBookingSchedule';
import { formatDisplayDate } from '@/_utils/formatDate';
import { stringToUpper } from '@/_utils/StringManipulation';
import CheckboxPrimary from './checkboxes/CheckboxPrimary';
import { CancelPolicyData } from '@/_data/sample/CancelPolicy';
import { KeyData } from '@/_data/sample/KeyData';
import { tableBookingScheduleStoreAction } from '@/_api/_actions/TableBookingScheduleActions';
import { useRouter } from 'next/navigation';


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

const CheckEntity = {
    cancelPolicy: 'false',
    cancelPolicyError: "",
}


export default function BookingFormModal() {
    const router = useRouter();
    const { 
        toggleModal, 
        setToggleModal, 
        selectedTable, 
        cookieData, 
        getDataList 
    } = useTablePlanStore()
    const { 
        data, 
        setInputValue, 
        isSubmitting, 
        setIsSubmitting, 
        errors,
        validateForm2,
        resetData,
    } = useTableBookingScheduleStore()
    const [checkData, setCheckData] = useState(CheckEntity)

    const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckData({...checkData, cancelPolicy: e.target.checked.toString()})
    }

    const date = formatDisplayDate(cookieData.date)
    

    async function postData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setCheckData(CheckEntity)
        /*  */
        const validation = validateForm2();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError = validation.errors.fullName || validation.errors.email ||
                validation.errors.phone
            toast.warn(firstError);
            return;
        }
        /*  */
        if(checkData.cancelPolicy === 'false') {
            const msg = 'You are required to select the checkbox before submission.'
            setCheckData({...checkData, cancelPolicyError: msg})
            toast.warn(msg)
            return
        }
        setIsSubmitting(true);
        const formData = {
            tableFloorPlanId : selectedTable?.id,
            date: data.date,
            time: data.time,
            status: KeyData[1].name,
            css: KeyData[1].fillCss,
            fullName: data.email,
            email: data.email,
            phone: data.phone,
            numberOfGuests: cookieData.numberOfGuests,
            notes: data.notes,
        }
        try {
            const res = await tableBookingScheduleStoreAction(formData);
            console.log("const res = await tableBookingScheduleStoreAction(formData);", res)
            if (res.status === 1) {
                toast.success(res.message);
                setTimeout(() => {
                    router.push('/')
                    setIsSubmitting(false);
                }, 2000)
                //await getDataList(data.date, data.time);
                setToggleModal(false);
                //resetData();
            } else {
                toast.error(res.message || 'Failed to update. Please try again.');
                console.error('Server response:', res);
            }
        } catch (error) {
            toast.error('Failed to save data. Please try again.');
            console.error('Form submission error:', error);
        } finally {
           
        }

    }


    console.log('checkData: ', checkData)
    console.log('selectedTable: ', selectedTable)


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
                    <section className='flex items-center justify-center gap-2 text-sm'>
                        <p>{selectedTable?.floor ? stringToUpper(selectedTable?.floor) : ""}</p>~
                        <p>{selectedTable?.details ?? ""}</p>~
                        <p>{cookieData.date ? date.dayName + ', ' + date.today : ""}</p>~
                        <p>{cookieData.time ? cookieData.time : ""}</p>
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

                    <TextAreaInput 
                        label="Notes"
                        type="number"
                        name="notes"
                        onChange={setInputValue}
                        value={data.notes}
                        placeholder="Kindly advise us of any allergens, dietary restrictions or any other special requirements..."
                        error={errors.notes}
                    />

                    <section className='flex flex-col items-start justify-start gap-0.5'>
                        <CheckboxPrimary 
                            title="Cancellation Policy" 
                            name='cancelPolicy'
                            value={checkData.cancelPolicy.toString()}
                            desc={CancelPolicyData.first}
                            onChange={handleCheckBox}
                        />
                        {checkData.cancelPolicyError &&
                            <p className='font-light text-red-600 text-sm'>{checkData.cancelPolicyError}</p>
                        }
                        
                        
                    </section>

                  
                    <div className='h-4' />
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
