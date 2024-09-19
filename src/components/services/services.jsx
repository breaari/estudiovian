// import { Asegurados } from "./asegurados";
// import { Terceros } from "./terceros";
// import { Dts } from "./dts";

// import { useEffect, useState } from "react";

// export const Services = () => {

//     return (
   
//         <div id="nuestros-servicios" className="animation-fade flex justify-center">
//             <div className="w-[1200px]">
//                 <h1 className="font-spartan font-bold text-azuloscuro text-4xl mb-5">NUESTROS SERVICIOS</h1>
//                 <div className="flex flex-wrap justify-between">
//                     <Terceros></Terceros>
//                     <Asegurados></Asegurados>
//                     <Dts></Dts>
//                 </div>
//             </div>
//         </div>

//     );
// };
// import { useEffect, useRef } from "react";
// import { Asegurados } from "./asegurados";
// import { Terceros } from "./terceros";
// import { Dts } from "./dts";

// export const Services = () => {


  import { useEffect, useRef, useState } from "react";
  import { Asegurados } from "./asegurados";
  import { Terceros } from "./terceros";
  import { Dts } from "./dts";
  
  export const Services = () => {
    const servicesRef = useRef(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);
  
    useEffect(() => {
      const servicesElement = servicesRef.current;
  
      const handleScroll = () => {
        if (!servicesElement) return;
  
        const rect = servicesElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (
          rect.top < window.innerHeight &&
          rect.bottom >= 0
        ) {
          if (scrollTop > lastScrollTop) {
            // Scrolling down
            servicesElement.classList.add('animate-slide-in-from-bottom');
            servicesElement.classList.remove('animate-slide-out-to-top');
          } else {
            // Scrolling up
            servicesElement.classList.add('animate-slide-in-from-top');
            servicesElement.classList.remove('animate-slide-out-to-bottom');
          }
        } else {
          if (scrollTop > lastScrollTop) {
            // Scrolling down
            servicesElement.classList.add('animate-slide-out-to-bottom');
            servicesElement.classList.remove('animate-slide-in-from-top');
          } else {
            // Scrolling up
            servicesElement.classList.add('animate-slide-out-to-top');
            servicesElement.classList.remove('animate-slide-in-from-bottom');
          }
        }
  
        setLastScrollTop(scrollTop);
      };
  
      window.addEventListener('scroll', handleScroll);
      // Trigger the scroll handler to set the initial state
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollTop]);
  
    return (
      <div id="nuestros-servicios" className="flex justify-center pt-16 mq980:pt-8 mq980:max-w-screen mq980:items-center" ref={servicesRef}>
        <div className="w-[1200px] mq980:w-full mq980:flex mq980:flex-col mq980:justify-center mq980:items-center">
          <h1 className="font-spartan font-bold text-azuloscuro text-4xl mb-5 mq980:text-center">NUESTROS SERVICIOS</h1>
          <div className="flex flex-wrap mq980:flex-col justify-between mq980:justify-center mq980:items-center mq980:space-y-6">
            <Terceros />
            <Asegurados />
            <Dts />
          </div>
        </div>
      </div>
    );
  };
  