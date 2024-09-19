import { useEffect, useRef, useState } from 'react';
import logocias from '../../assets/logocias.png'

export const Clients = () => {

    const clientsRef = useRef(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);
  
    useEffect(() => {
      const clientsElement = clientsRef.current;
  
      const handleScroll = () => {
        if (!clientsElement) return;
  
        const rect = clientsElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (
          rect.top < window.innerHeight &&
          rect.bottom >= 0
        ) {
          if (scrollTop > lastScrollTop) {
            // Scrolling down
            clientsElement.classList.add('animate-slide-in-from-bottom');
            clientsElement.classList.remove('animate-slide-out-to-top');
          } else {
            // Scrolling up
            clientsElement.classList.add('animate-slide-in-from-top');
            clientsElement.classList.remove('animate-slide-out-to-bottom');
          }
        } else {
          if (scrollTop > lastScrollTop) {
            // Scrolling down
            clientsElement.classList.add('animate-slide-out-to-bottom');
            clientsElement.classList.remove('animate-slide-in-from-top');
          } else {
            // Scrolling up
            clientsElement.classList.add('animate-slide-out-to-top');
            clientsElement.classList.remove('animate-slide-in-from-bottom');
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
        <div id="nuestros-clientes" className="flex justify-center text-azuloscuro pt-16 mq980:pt-8 mq980:max-w-screen" ref={clientsRef}>
            <div className="w-[1200px] p-12 mq980:p-8 rounded-xl border-2 border-azuloscuro mq980:w-full">
            <div className=" flex flex-row mq980:flex-col">
                <div className=" flex flex-col w-1/2 mq980:w-full mq980:text-center">
                    <h1 className="font-spartan font-bold text-4xl mb-5 mq980:text-3xl">NUESTROS CLIENTES</h1>
                    <h2 className='text-xl font-semibold '>La trayectoria y los clientes avalan el cumplimiento de nuestra labor diaria.</h2>
            
                    <h1 className="font-spartan font-bold text-4xl mq980:text-3xl my-5">+ 10.000 inspecciones anuales.</h1>
                    <h1 className="font-spartan font-bold text-4xl mq980:text-3xl my-5">+ 18 años al servicio.</h1>
                </div> 
            <div className="w-1/2 mq980:w-full flex justify-center">
            <img src={logocias} className='w-[300px] mq980:w-[250px]'></img>
            </div>
            </div>
            </div>
        </div>
    )
}