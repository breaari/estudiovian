import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Form } from "./form";
import { useEffect, useRef, useState } from "react";

export const Contact = () => {

    const contactRef = useRef(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);
  
    useEffect(() => {
      const contactElement = contactRef.current;
  
      const handleScroll = () => {
        if (!contactElement) return;
  
        const rect = contactElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (
          rect.top < window.innerHeight &&
          rect.bottom >= 0
        ) {
          if (scrollTop > lastScrollTop) {
            // Scrolling down
            contactElement.classList.add('animate-slide-in-from-bottom');
            contactElement.classList.remove('animate-slide-out-to-top');
          } else {
            // Scrolling up
            contactElement.classList.add('animate-slide-in-from-top');
            contactElement.classList.remove('animate-slide-out-to-bottom');
          }
        } else {
          if (scrollTop > lastScrollTop) {
            // Scrolling down
            contactElement.classList.add('animate-slide-out-to-bottom');
            contactElement.classList.remove('animate-slide-in-from-top');
          } else {
            // Scrolling up
            contactElement.classList.add('animate-slide-out-to-top');
            contactElement.classList.remove('animate-slide-in-from-bottom');
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
        <div id="contacto" className="flex justify-center text-azuloscuro py-16 mq980:py-8 mq980:max-w-screen" ref={contactRef}>
            <div className="w-[1200px] mq980:w-full">
                    <div className="flex flex-row mq980:flex-col justify-between space-x-10 mq980:space-x-0 mq980:space-y-8">
                        <div className="flex flex-col w-1/2 mq980:w-full p-12 border-2 border-azuloscuro rounded-xl">
                        <h1 className="font-spartan font-bold text-4xl mb-5">CONTACTO</h1>
                            <h2 className='text-xl font-semibold'>Tu consulta es importante para nosotros. No dudes en escribirnos y te responderemos a la mayor brevedad.</h2>
                            <div className="flex flex-row items-center mb-2 my-8">
                                <FaUser className="text-xl mr-2"/>
                                <h2 className='text-xl font-semibold'>Camilo Ferratti - responsable del estudio.</h2>
                            </div>
                            <div className="flex flex-row items-center my-2">
                                <MdEmail className="text-xl mr-2" />
                                <a href="mailto:camilo.estudiovian@gmail.com" className='text-xl font-semibold text-azuloscuro hover:underline' target="_blank" rel="noopener noreferrer">
                                    camilo.estudiovian@gmail.com
                                </a>
                            </div>
                            <div className="flex flex-row items-center my-2">
                            <FaPhone className="text-xl mr-2"/>
                            <a href="https://wa.me/542235132279" className='text-xl font-semibold text-azuloscuro hover:underline' target="_blank" rel="noopener noreferrer">
                                +54 223 513-2279
                            </a>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 mq980:w-full mq980:justify-center mq980:items-center">
                            <Form></Form>
                        </div>
                    </div> 
            </div>
        </div>
    )
}