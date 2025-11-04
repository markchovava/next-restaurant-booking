import FormBanner from "@/_components/forms/FormBanner";
import HeaderPrimary from "@/_components/headers/HeaderPrimary";
import { CustomSelect } from "@/_components/inputs/CustomSelect";
import { BookingTimeData2 } from "@/_data/sample/BookingTimeData";
import { i } from "framer-motion/client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {

  return (
    <>
     <section 
          style={{backgroundImage: `url(/assets/img/bg1.jpg)`}} 
          className="w-full h-screen overflow-y-auto bg-fixed bg-center">
          <HeaderPrimary />

          <div className="h-40" />
         <FormBanner />
          
        </section>

    </>
  );
}