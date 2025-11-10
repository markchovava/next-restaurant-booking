"use client"
import { _logoutAction } from '@/_api/_actions/AuthActions';
import ButtonDefault from '@/_components/buttons/ButtonDefault';
import CardSecondary from '@/_components/cards/CardSecondary';
import Heading1 from '@/_components/headings/Heading1'
import { AdminData } from '@/_data/sample/AdminData';
import { useAuthStore } from '@/_store/useAuthStore';
import { AuthTokenCookieName, removeTheCookie, UserCookieName } from '@/cookies/CookiesClient';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


const title = "Dashboard"
 

export default function AdminMainSection() {
  const router = useRouter();
  const { setIsSubmitting, isSubmitting} = useAuthStore()

  
    async function handleLogout(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault()
      try{
        setIsSubmitting(true)
        const res = await _logoutAction()
        if(res.status == 1){
          toast.success(res.message)
          removeTheCookie(AuthTokenCookieName)
          removeTheCookie(UserCookieName)
          router.push('/login')
          return
        }
        toast.warn("Something went wrong, please try again.")
      } catch(error){

      } finally{
        setIsSubmitting(false)
      }

  }

  return (
    <div className=''>
        <section className="h-20 flex items-center justify-between border-b border-slate-300 pb-2">
          <div className='px-8 w-full flex items-center justify-between'>
            <Heading1 title={title} />
            <div>
              <form onSubmit={handleLogout}>
                <ButtonDefault name='Logout' type='submit' status={isSubmitting} />
              </form>
            </div>
          </div>
        </section>

        <section className='pt-10 px-8 pb-20 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6'>
           {AdminData.map((i, key) => (
            <CardSecondary key={key} data={i} />
           ))}
        </section>
        
    </div>
  )
}
