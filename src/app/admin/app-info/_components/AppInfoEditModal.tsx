"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { toast } from 'react-toastify';
import ButtonClose from '@/_components/buttons/ButtonClose';
import TextInput from '@/_components/inputs/TextInput';
import ButtonPrimary from '@/_components/buttons/ButtonPrimary';
import { useAppInfoStore } from '@/_store/useAppInfoStore';
import TextAreaInput from '@/_components/inputs/TextAreaInput';
import { _appInfoStoreAction } from '@/_api/_actions/AppInfoActions';


const title = 'Edit App Info';


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
        setInputValue, 
        isSubmitting, 
        setIsSubmitting,
        clearErrors,
        getData,
        errors,
        validateForm
    } = useAppInfoStore()

    

     async function postData(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            clearErrors();
            // Validate form using store
            const validation = validateForm();
            if (!validation.isValid) {
                // Show the first error as toast
                const firstError = validation.errors.name || validation.errors.phone ||
                    validation.errors.email || validation.errors.address ||
                    validation.errors.description
                toast.warn(firstError);
                return;
            }
            setIsSubmitting(true);
            const formData = {
                name: data.name,
                phone: data.phone,
                email: data.email,
                address: data.address,
                website: data.website,
                facebook: data.facebook,
                whatsapp: data.whatsapp,
                description: data.description,
            }
            try {
                const res = await _appInfoStoreAction(formData);
                if (res.status === 1) {
                    toast.success(res.message);
                    await getData();
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
                        label="Website"
                        type="text"
                        name="website"
                        onChange={setInputValue}
                        value={data.website}
                        placeholder="Enter Website here..."
                        error={errors.website}
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
                        label="Address"
                        type="text"
                        name="address"
                        onChange={setInputValue}
                        value={data.address}
                        placeholder="Enter Address here..."
                        error={errors.address}
                    />
                    {/*  */}
                    <TextInput 
                        label="WhatsApp"
                        type="text"
                        name="whatsapp"
                        onChange={setInputValue}
                        value={data.whatsapp}
                        placeholder="Enter WhatsApp here..."
                        error=""
                    />
                    {/*  */}
                    <TextInput 
                        label="Facebook"
                        type="text"
                        name="facebook"
                        onChange={setInputValue}
                        value={data.facebook}
                        placeholder="Enter Facebook here..."
                        error=""
                    />
                     {/*  */}
                    <TextAreaInput 
                        label="Description"
                        type="text"
                        name="description"
                        onChange={setInputValue}
                        value={data.description}
                        placeholder="Enter Description here..."
                        error={errors.description}
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
