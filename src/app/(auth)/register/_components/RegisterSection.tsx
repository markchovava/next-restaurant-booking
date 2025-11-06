"use client"
import { _registerAction } from "@/_api/_actions/AuthActions"
import ButtonPrimary from "@/_components/buttons/ButtonPrimary"
import HorizontalRule from "@/_components/horizontalRules/HorizontalRule"
import TextInput from "@/_components/inputs/TextInput"
import Logo from "@/_components/logos/Logo"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary"
import { useAuthStore } from "@/_store/useAuthStore"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"



export default function RegisterSection() {
    const router = useRouter()
    const { 
            setInputValue, 
            data, 
            setData, 
            errors, 
            validateRegisterForm,
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
        const validation = validateRegisterForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError = validation.errors.email || validation.errors.password ||
                validation.errors.passwordConfirm
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            email: data.email,
            password: data.password,
        }

        try {
            const res = await _registerAction(formData);
            //console.log('res', res)
            if(res.status === 1){
                toast.success(res.message);
                clearErrors();
                resetData();
                router.push('/login')
                return
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
                <h2 className='font-light text-4xl text-center'>Register</h2>
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
                    <TextInput
                        label="Confirm Password"
                        type="password"
                        name="passwordConfirm"
                        onChange={setInputValue}
                        value={data.passwordConfirm}
                        placeholder="Enter Confirm Password here..."
                        error={errors.passwordConfirm}
                    />
                    {/*  */}
                    <ButtonPrimary
                        title='Submit' 
                        status={isSubmitting} />
                    <SpacerPrimary />    
                    <p className='font-light'>Dont have an account? 
                        <Link href="/login" className='px-1 text-blue-800 underline hover:no-underline'>
                          Login here
                        </Link>
                    </p>
                    <SpacerPrimary />
    
                </form>
            </section>
        </div>
  )
}
