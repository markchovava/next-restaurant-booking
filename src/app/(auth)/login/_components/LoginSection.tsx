"use client"
import { loginAction } from '@/_api/_actions/AuthActions';
import ButtonPrimary from '@/_components/buttons/ButtonPrimary';
import HorizontalRule from '@/_components/horizontalRules/HorizontalRule';
import TextInput from '@/_components/inputs/TextInput';
import Logo from '@/_components/logos/Logo';
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import { useAuthStore } from '@/_store/useAuthStore';
import { AuthTokenCookieName, setTheCookie, UserCookieName } from '@/cookies/CookiesClient';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';



export default function LoginSection() {
    const router = useRouter()
    const { 
            setInputValue, 
            data, 
            setError, 
            errors, 
            validateLoginForm,
            clearErrors, 
            resetData,
            isSubmitting,
            setIsSubmitting,
        } = useAuthStore()

    async function postData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        clearErrors();
        e.preventDefault();
        // Clear previous errors
        clearErrors();
        // Validate form using store
        const validation = validateLoginForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError = validation.errors.email || validation.errors.password
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            email: data.email,
            password: data.password,
        }

        try {
            const res = await loginAction(formData);
            //console.log('res', res)
            switch(res.status){
                case 0:
                    toast.warn(res.message);
                    setError('email', res.message)
                    return
                case 1:
                    router.push('/admin')
                    await setTheCookie(AuthTokenCookieName, res.authToken)
                    await setTheCookie(UserCookieName, res.data)
                    toast.success(res.message);
                    clearErrors();
                    resetData();
                    return
                case 2:
                    toast.warn(res.message);
                    setError('password', res.message)
                    return
                default:
                    toast.success('Something went wrong, try again.');
            }
            
        } catch (error) {
            toast.error('Failed to save data. Please try again.');
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

  return (
    <div className="w-full overflow-auto h-screen flex items-center justify-center">
        <section className="bg-white lg:w-[50%] w-[90%] rounded-xl drop-shadow-lg py-4 px-6">
            <Logo />
            <SpacerPrimary />
            <HorizontalRule />
            <SpacerPrimary />
            <h2 className='font-light text-4xl text-center'>Login</h2>
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
