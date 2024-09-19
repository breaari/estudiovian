// export const Navbar = () => {
//     return (
//         <div className="z-50 fixed top-0 left-0 right-0 flex flex-row justify-center items-center bg-azuloscuro max-w-screen h-[50px]">
//             <div className="w-[1200px] text-white flex flex-row justify-end font-semibold text-md text-azuloscuro space-x-7">
//                 <a href="#quienes-somos" className="hover:text-gray-400">¿Quiénes somos?</a>
//                 <a href="#nuestros-servicios" className="hover:text-gray-400">Nuestros servicios</a>
//                 <a href="#por-que-elegirnos" className="hover:text-gray-400">¿Por qué elegirnos?</a>
//                 <a href="#nuestros-clientes" className="hover:text-gray-400">Nuestros clientes</a>
//                 <a href="#contacto" className="hover:text-gray-400">Contacto</a>
//             </div>
//         </div>
//     );
// };


// import React, { useState, useEffect } from 'react';
// import { TbMenuDeep } from "react-icons/tb";
// import { handleScrollToSection } from '../../utils/handleScrollToSection';

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   const toggleMenuOpen = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const scrollMovile = (section) => {
//     handleScrollToSection(section);
//     if (menuOpen) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <nav className="z-50 fixed top-0 left-0 right-0 flex flex-row justify-center items-center bg-azuloscuro max-w-screen h-[50px]">
//       <div className="w-[1200px] text-white flex flex-row justify-end font-semibold text-md space-x-7">
//         {!isMobile && (
//           <>
//             <a href="#quienes-somos" className="hover:text-gray-400">¿Quiénes somos?</a>
//             <a href="#nuestros-servicios" className="hover:text-gray-400">Nuestros servicios</a>
//             <a href="#por-que-elegirnos" className="hover:text-gray-400">¿Por qué elegirnos?</a>
//             <a href="#nuestros-clientes" className="hover:text-gray-400">Nuestros clientes</a>
//             <a href="#contacto" className="hover:text-gray-400">Contacto</a>
//           </>
//         )}
//         {isMobile && (
//           <TbMenuDeep className="text-xl cursor-pointer" onClick={toggleMenuOpen} />
//         )}
//       </div>
//       {menuOpen && (
//         <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-30 flex flex-col text-3xl text-white items-center">
//           <button onClick={() => scrollMovile('quienes-somos')} className="mt-[100px] px-3 cursor-pointer hover:scale-95 py-2">¿Quiénes somos?</button>
//           <button onClick={() => scrollMovile('nuestros-servicios')} className="px-3 cursor-pointer hover:scale-95 py-2">Nuestros servicios</button>
//           <button onClick={() => scrollMovile('por-que-elegirnos')} className="px-3 cursor-pointer hover:scale-95 py-2">¿Por qué elegirnos?</button>
//           <button onClick={() => scrollMovile('nuestros-clientes')} className="px-3 cursor-pointer hover:scale-95 py-2">Nuestros clientes</button>
//           <button onClick={() => scrollMovile('contacto')} className="px-3 cursor-pointer hover:scale-95 py-2">Contacto</button>
//         </div>
//       )}
//     </nav>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import { TbMenuDeep } from "react-icons/tb";
// import { handleScrollToSection } from '../../utils/handleScrollToSection';

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   const toggleMenuOpen = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const scrollMovile = (section) => {
//     handleScrollToSection(section);
//     if (menuOpen) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <nav className="z-50 fixed top-0 left-0 right-0 flex flex-row justify-center items-center bg-azuloscuro max-w-screen mq980:w-full h-[50px] ">
//       <div className="w-[1200px] mq980:w-full text-white flex flex-row justify-between items-center px-4">
//         <div className="flex-1 flex justify-end items-center space-x-7">
//           {!isMobile && (
//             <>
//               <a href="#quienes-somos" className="hover:text-gray-400">¿Quiénes somos?</a>
//               <a href="#nuestros-servicios" className="hover:text-gray-400">Nuestros servicios</a>
//               <a href="#por-que-elegirnos" className="hover:text-gray-400">¿Por qué elegirnos?</a>
//               <a href="#nuestros-clientes" className="hover:text-gray-400">Nuestros clientes</a>
//               <a href="#contacto" className="hover:text-gray-400">Contacto</a>
//             </>
//           )}
//           {isMobile && (
//             <TbMenuDeep className="text-2xl cursor-pointer" onClick={toggleMenuOpen} />
//           )}
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-30 flex flex-col text-3xl text-white items-center">
//           <button onClick={() => scrollMovile('quienes-somos')} className="mt-[100px] px-3 cursor-pointer hover:scale-95 py-2">¿Quiénes somos?</button>
//           <button onClick={() => scrollMovile('nuestros-servicios')} className="px-3 cursor-pointer hover:scale-95 py-2">Nuestros servicios</button>
//           <button onClick={() => scrollMovile('por-que-elegirnos')} className="px-3 cursor-pointer hover:scale-95 py-2">¿Por qué elegirnos?</button>
//           <button onClick={() => scrollMovile('nuestros-clientes')} className="px-3 cursor-pointer hover:scale-95 py-2">Nuestros clientes</button>
//           <button onClick={() => scrollMovile('contacto')} className="px-3 cursor-pointer hover:scale-95 py-2">Contacto</button>
//         </div>
//       )}
//     </nav>
//   );
// };

import React, { useState, useEffect } from 'react';
import { TbMenuDeep } from "react-icons/tb";
import { handleScrollToSection } from '../../utils/handleScrollToSection';
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollMovile = (section) => {
    handleScrollToSection(section);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`z-50 fixed top-0 left-0 right-0 flex items-center bg-azuloscuro h-[50px] ${isMobile ? 'w-screen' : 'w-screen px-20'}`}>
      <div className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row'} items-end px-4`}>
        <div className={`flex-1 flex justify-end items-center space-x-7 text-white font-semibold `}>
          {!isMobile && (
            <>
              <a href="#quienes-somos" className="hover:text-gray-400">¿Quiénes somos?</a>
              <a href="#nuestros-servicios" className="hover:text-gray-400">Nuestros servicios</a>
              <a href="#por-que-elegirnos" className="hover:text-gray-400">¿Por qué elegirnos?</a>
              <a href="#nuestros-clientes" className="hover:text-gray-400">Nuestros clientes</a>
              <a href="#contacto" className="hover:text-gray-400">Contacto</a>
            </>
          )}
          {isMobile && (
            <div className='z-50 flex flex-row items-center justify-center py-1 px-2 border-2 border-white rounded-full' onClick={toggleMenuOpen}>
                <p className='font-semibold text-xl'>Menu</p>
                <IoMenu className='cursor-pointer text-end text-2xl bg-white text-azuloscuro rounded-full ml-2'/>
            </div>
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-0 right-0 w-screen h-screen bg-azuloscuro bg-opacity-1 w-3/4 z-30 flex flex-col text-2xl font-semibold text-white items-center">
          <button onClick={() => scrollMovile('quienes-somos')} className="mt-[100px] px-3 cursor-pointer hover:scale-95 py-2">¿Quiénes somos?</button>
          <button onClick={() => scrollMovile('nuestros-servicios')} className="px-3 cursor-pointer hover:scale-95 py-2">Nuestros servicios</button>
          <button onClick={() => scrollMovile('por-que-elegirnos')} className="px-3 cursor-pointer hover:scale-95 py-2">¿Por qué elegirnos?</button>
          <button onClick={() => scrollMovile('nuestros-clientes')} className="px-3 cursor-pointer hover:scale-95 py-2">Nuestros clientes</button>
          <button onClick={() => scrollMovile('contacto')} className="px-3 cursor-pointer hover:scale-95 py-2">Contacto</button>
        </div>
      )}
    </nav>
  );
};
