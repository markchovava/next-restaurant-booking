"use client"
import { useContactStore } from "@/_store/useContactStore"
import ButtonPrimary from "../buttons/ButtonPrimary"
import TextAreaInput from "../inputs/TextAreaInput"
import TextInput from "../inputs/TextInput"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { contactStoreAction } from "@/_api/_actions/ContactActions"



export default function FormContact() {
    const {  
        data, 
        setData, 
        resetData,
        errors,
        setInputValue, 
        isSubmitting, 
        setIsSubmitting,
        clearErrors,
        validateForm,
        getDatalist
    } = useContactStore()

    useEffect(() => {
        resetData();
    }, [])
    
        
    
    async function postData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        clearErrors();
        // Validate form using store
        const validation = validateForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError = validation.errors.name || validation.errors.email ||
                validation.errors.message
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            name: data.name,
            email: data.email,
            message: data.message,
            status: 'Unread',
        }
        try {
            const res = await contactStoreAction(formData);
            if (res.status === 1) {
                toast.success(res.message);
                await getDatalist();
                clearErrors();
                resetData();
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
    <form onSubmit={postData}>
        <h3 className="text-[2.5rem] font-light mb-3">Write to us</h3>
        <TextInput
            label="Name"
            type="text"
            name="name"
            onChange={setInputValue}
            value={data.name}
            placeholder="Enter Name here..."
            error={errors.name ?? ""}
        />
        <TextInput
            label="Email"
            type="text"
            name="email"
            onChange={setInputValue}
            value={data.email}
            placeholder="Enter Email here..."
            error={errors.email ?? ""}
        />
        {/*  */}
        <TextAreaInput
            label="Message"
            type="text"
            name="message"
            onChange={setInputValue}
            value={data.message}
            placeholder="Enter Message here..."
            error={errors.message ?? ""}
        />
        <ButtonPrimary 
            title='Submit' 
            status={isSubmitting} />
    </form>
    </>
  )
}
