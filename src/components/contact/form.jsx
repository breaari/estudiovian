import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export const Form = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 980);
      };
  
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
  
      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }, []);

  const initialInput = {
    nombre: '',
    correo: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  };

  const [ input, setInput ] = useState(initialInput)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const validateInput = () => {
    const { nombre, correo, empresa, telefono, mensaje } = input;
    return nombre && correo && empresa && telefono && mensaje;
};

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput()) {
        toast('Por favor, completa todos los campos antes de enviar el mensaje.', {
            toastId: 'validation-error-toast',
        });
        return;
    }

    try {
        const responseBack = await axios.post("https://formspree.io/f/xzzpneyq", input, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        setInput(initialInput);
        if (!toast.isActive('success-toast')) {
            toast('Muchas gracias por tu mensaje! Nos estaremos contactando a la brevedad.', {
                toastId: 'success-toast',
            });
        }
    } catch (error) {
        console.log(error);
        toast('Ups! No se pudo enviar tu mensaje, vuelve a intentarlo más tarde.', {
            toastId: 'generic-error-toast',
        });
    }
};

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 rounded-xl p-8 font-semibold mq980:w-full ">
         <h1 className="font-spartan font-bold text-3xl mb-5">Formulario de contacto</h1>
      <div className="flex flex-row justify-between space-x-5">
      <div className="flex flex-col my-2 w-1/2">
        <label>Nombre:</label>
        <input
            className="bg-white rounded-xl py-1 px-4 outline-none "
            type="text"
            name="nombre"
            value={input.nombre}
            onChange={handleChange}
            required
        />
      </div>
      <div className="flex flex-col my-2  w-1/2">
        <label>Empresa:</label>
        <input
            className="bg-white rounded-xl py-1 px-4 outline-none"
            type="text"
            name="empresa"
            value={input.empresa}
            onChange={handleChange}
            required
        />
      </div>
      </div>
      <div className="flex flex-row justify-between space-x-5">
      <div className="flex flex-col my-2  w-1/2">
        <label>Correo Electrónico:</label>
        <input
            className="bg-white rounded-xl py-1 px-4 outline-none"
            type="email"
            name="correo"
            value={input.correo}
            onChange={handleChange}
            required
        />
      </div>
      <div className="flex flex-col my-2  w-1/2">
        <label>Teléfono:</label>
        <input
            className="bg-white rounded-xl py-1 px-4 outline-none"
            type="tel"
            name="telefono"
            value={input.telefono}
            onChange={handleChange}
            required
        />
      </div>
      </div>
      <div className="flex flex-col my-2">
        <label>Mensaje:</label>
        <textarea
            className="bg-white rounded-xl py-1 px-4 outline-none"
            name="mensaje"
            value={input.mensaje}
            onChange={handleChange}
            required
        ></textarea>
      </div>
      <button 
        className="font-spartan font-bold text-xl text-white bg-azuloscuro py-2 px-4 rounded-3xl mt-4 flex items-center"
        type="submit"
        >
        Enviar
        <FaArrowRight className="text-azuloscuro bg-white rounded-xl p-1 ml-2"/>
        </button>
        <ToastContainer
                  position={isSmallScreen ? "top-center" : "top-right"}
                  autoClose={5000}
                  hideProgressBar={true}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  limit={1}
                  queue={false}
                  theme="none"
                  transition={Slide}
                  closeButton={false}
                  className="toast-container bg-gray-100 rounded-md w-auto max-w-full p-0 m-0 shadow-none border-none"
                  bodyClassName="toast-body border-none bg-gray-100 text-azuloscuro shadow-none text-md px-2"
               
                />
    </form>
  );
};

