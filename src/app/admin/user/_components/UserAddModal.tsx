"use client"
import { AnimatePresence, motion, Variants } from 'framer-motion';
import ButtonClose from '@/_components/buttons/ButtonClose';
import TextInput from '@/_components/inputs/TextInput';
import ButtonPrimary from '@/_components/buttons/ButtonPrimary';
import { toast } from 'react-toastify';
import { useUserStore } from '@/_store/useUserStore';
import { _userStoreAction } from '@/_api/_actions/UserActions';
import SelectInputPrimary from '@/_components/inputs/SelectInputPrimary';
import { IsAdminData, RolesData } from '@/_data/sample/UsersData';
import SelectInput from '@/_components/inputs/SelectInput';


const title = "Add User"


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
        setData, 
        errors,
        setInputValue, 
        isSubmitting, 
        setIsSubmitting,
        clearErrors,
        validateForm,
        getDatalist
    } = useUserStore()

    

    async function postData(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            clearErrors();
            // Validate form using store
            const validation = validateForm();
            if (!validation.isValid) {
                // Show the first error as toast
                const firstError = validation.errors.name || validation.errors.phone ||
                    validation.errors.email
                toast.warn(firstError);
                return;
            }
            setIsSubmitting(true);
            const formData = {
                name: data.name,
                phone: data.phone,
                email: data.email,
                accessLevel: data.accessLevel ?? 1,
                isAdmin: data.isAdmin ?? 0,
            }
            try {
                const res = await _userStoreAction(formData);
                if (res.status === 1) {
                    toast.success(res.message);
                    await getDatalist();
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
                        label="Phone"
                        type="text"
                        name="phone"
                        onChange={setInputValue}
                        value={data.phone}
                        placeholder="Enter Phone Number here..."
                        error={errors.phone}
                    />
                    <SelectInput
                        data={IsAdminData}
                        label="Admin"
                        name="isAdmin"
                        onChange={setInputValue}
                        value={data.isAdmin}
                        placeholder="Enter Ending Time here..."
                        error=""
                    />
                     <SelectInput
                        data={RolesData}
                        label="Role"
                        name="accessLevel"
                        onChange={setInputValue}
                        value={data.accessLevel}
                        placeholder="Enter Role here..."
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
