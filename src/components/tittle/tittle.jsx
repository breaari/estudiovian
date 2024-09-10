import fototitulodesktop from '../../assets/fototitulo-desktop.png';

export const Tittle = () => {
    return (
        <div className='relative '>
            <img src={fototitulodesktop} className='max-w-screen w-full h-auto' alt='Fototitulo' />
            <div className='absolute inset-0 flex items-center justify-center flex flex-col'>
                <h1 className='text-white text-[85px] font-bold font-spartan'>ESTUDIO VIAN</h1>
                <h2 className='text-white text-xl font-sanchez w-[800px] text-center'>TU TRANQUILIDAD ES NUESTRA MISIÓN: GESTIONAMOS TU SINIESTRO CON EMPATÍA, COMPROMISO Y EXCELENCIA.</h2>
            </div>
        </div>
    );
};
