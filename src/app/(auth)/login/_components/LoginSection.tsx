"use client"
import ButtonPrimary from '@/_components/buttons/ButtonPrimary';
import HorizontalRule from '@/_components/horizontalRules/HorizontalRule';
import TextInput from '@/_components/inputs/TextInput';
import Logo from '@/_components/logos/Logo';
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import { useAuthStore } from '@/_store/useAuthStore';
import Link from 'next/link';
import React from 'react'



export default function LoginSection() {
    const { 
        setInputValue, 
        data, 
        setData, 
        errors, 
        clearErrors, 
        isSubmitting 
    } = useAuthStore()

    async function postData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Clear previous errors
        clearErrors();
    }


  return (
    <div className="w-full overflow-auto h-screen flex items-center justify-center">
        <section className="bg-white lg:w-[50%] w-[90%] rounded-xl drop-shadow-lg py-4 px-6">
            <Logo />
            <SpacerPrimary />
            <HorizontalRule />
            <SpacerPrimary />
            <form onSubmit={postData} className='space-y-2'>
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
                    label="Password"
                    type="password"
                    name="password"
                    onChange={setInputValue}
                    value={data.password}
                    placeholder="Enter Password here..."
                    error={errors.password}
                />
                {/*  */}
                <ButtonPrimary 
                    title='Submit' 
                    status={isSubmitting} />
                <SpacerPrimary />    
                <p className='font-light'>Dont have an account? 
                    <Link href="/register" className='px-1 text-blue-800 underline hover:no-underline'>
                    Register here
                    </Link>
                </p>
                <SpacerPrimary />

            </form>
        </section>
    </div>
  )
}
