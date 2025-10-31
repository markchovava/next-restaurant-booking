"use client"
import { AnimatePresence, motion, Variants } from 'framer-motion';
import ButtonClose from '@/_components/buttons/ButtonClose';
import TextInput from '@/_components/inputs/TextInput';
import ButtonPrimary from '@/_components/buttons/ButtonPrimary';
import { toast } from 'react-toastify';
import { useUserStore } from '@/_store/useUserStore';


const title = "Edit User"


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

export default function UserAddModal() {
    const { 
        toggleModal, 
        setToggleModal, 
        data, 
        setInputValue, 
        isSubmitting, 
        setIsSubmitting 
    } = useUserStore()

    

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
                        value={data.phone}
                        placeholder="Enter Address here..."
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
