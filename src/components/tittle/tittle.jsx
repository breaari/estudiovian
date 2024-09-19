import fototitulodesktop from '../../assets/fototitulo-desktop.png';
import fototitulomobile from "../../assets/fototitulo-mobile.png"

export const Tittle = () => {
    return (
        <div className='z-10 mt-[50px] mq980:mt-[30px] relative flex flex-col items-center justify-center rounded-xl'>
            <div className="mq980:w-full  w-[1200px] mt-10">
                <img src={fototitulodesktop} className='block mq980:hidden max-w-screen w-full h-auto rounded-xl' alt='Fototitulo' />
                <img src={fototitulomobile} className='hidden mq980:block max-w-screen w-full h-auto rounded-xl' alt='Fototitulo' />
                <div className='absolute mq980:mt-[30px] flex flex-col inset-0 flex items-center justify-center mq980:max-h-[600px] mq980:p-1'>
                    <h1 className='text-white text-[85px] mq980:text-[45px] font-bold font-spartan'>ESTUDIO VIAN</h1>
                    <h2 className='text-white text-2xl mq980:text-[18px] mq980:w-full mq980:px-5 w-[800px] text-center'>Tu tranquilidad es nuestra misión: gestionamos tu siniestro con empatía, compromiso y excelencia.</h2>
                </div>
            </div>
        </div>
    );
};
