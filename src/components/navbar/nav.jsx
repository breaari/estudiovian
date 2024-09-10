import logo2 from "../../assets/logo2.svg";

export const Navbar = () => {
    return (
        <div className="z-30 max-h-[75px] max-w-screen overflow-hidden flex items-center justify-between px-7 flex flex-row font-spartan shadow-xl">
            <img src={logo2} className="h-[150px] object-cover object-center" alt="Logo" />
            <div className="flex flex-row font-bold text-2xl text-azuloscuro space-x-7">
                <p className="">¿Quiénes somos?</p>
                <p>Nuestros servicios</p>
                <p>Nuestros clientes</p>
                <p>Contacto</p>
            </div> 
        </div>
    );
};
