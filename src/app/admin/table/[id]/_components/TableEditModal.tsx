"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { toast } from 'react-toastify';
import ButtonClose from '@/_components/buttons/ButtonClose';
import TextInput from '@/_components/inputs/TextInput';
import ButtonPrimary from '@/_components/buttons/ButtonPrimary';
import TextAreaInput from '@/_components/inputs/TextAreaInput';
import { useTableFloorPlanStore } from '@/_store/useTableFloorPlanStore';
import SelectInput from '@/_components/inputs/SelectInput';
import { FloorLevelData } from '@/_data/sample/TableFloorPlanData';
import { _tableFloorPlanUpdateAction } from '@/_api/_actions/TableFloorPlanActions';



const title = 'Edit Table';


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

export default function AppInfoEditModal({ id }: {id: number | string}) {
    const { 
      toggleModal, 
      setToggleModal, 
      data,  
      errors,
      setInputValue, 
      isSubmitting, 
      clearErrors,
      setIsSubmitting,
      validateForm,
      getData,
    } = useTableFloorPlanStore()

    async function postData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        clearErrors();
        // Validate form using store
        const validation = validateForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError = validation.errors.name || validation.errors.details 
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            name: data.name,
            details: data.details,
        }
        try {
            console.log('THE FORMDATA:', formData)
            console.log('ID: ', id)
            const res = await _tableFloorPlanUpdateAction(id, formData);
            console.log('RESULT: ', res)
            if (res.status === 1) {
                toast.success(res.message);
                await getData(data.id);
                clearErrors();
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
                    {title}
                    </h2>
                    {/*  */}
                    <TextInput 
                        label="Name"
                        type="text"
                        name="name"
                        onChange={setInputValue}
                        value={data.name}
                        placeholder="Enter Name here..."
                        error={errors.name}
                    />
                    {/*  */}
                    <TextAreaInput 
                        label="Details"
                        type="text"
                        name="details"
                        onChange={setInputValue}
                        value={data.details}
                        placeholder="Enter Details here..."
                        error={errors.details}
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
