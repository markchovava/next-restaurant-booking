import FormBanner from "@/_components/forms/FormBanner";
import HeaderSecondary from "@/_components/headers/HeaderSecondary";


export default function Home() {

  return (
    <>
     <section 
          style={{backgroundImage: `url(/assets/img/bg1.jpg)`}} 
          className="w-full h-screen overflow-y-auto bg-fixed bg-center">
          <HeaderSecondary />

          <div className="lg:h-50 h-25" />
         <FormBanner />
          
        </section>

    </>
  );
}