import { GrGroup } from "react-icons/gr";
import { PiPiggyBankBold } from "react-icons/pi";
import { TbEyeSearch } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { RiSpeakLine } from "react-icons/ri";


export const Why = () => {
    return (
        <div id="por-que-elegirnos" className="flex justify-center text-azuloscuro pt-10 mq980:pt-4 mq980:max-w-screen">
            <div className="w-[1200px] mq980:w-full"  >
                <h1 className="font-spartan font-bold text-4xl my-10 mq980:my-6 mq980:text-center">¿Por qué elegirnos?</h1>
                <div className="flex flex-wrap justify-between gap-y-[15px] mq980:justify-center mq980:flex-col mq980:items-center">
                    <div className="bg-gray-100 rounded-xl p-5 flex flex-col justify-start items-center w-[390px] mq980:w-full hover:scale-105 transition-transform duration-300 ease-in-out">
                        <GrGroup className="text-6xl mb-2" />
                        <p className="text-xl font-semibold text-center">Equipo administrativo profesionalmente idóneo para satisfacer las demandas online.</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-5 flex flex-col justify-start items-center w-[390px] mq980:w-full hover:scale-105 transition-transform duration-300 ease-in-out">
                        <TbWorld className="text-6xl mb-2" />
                        <p className="text-xl font-semibold text-center">Cobertura de servicio en CABA, Bs. As. e interior del país.</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-5 flex flex-col justify-start items-center w-[390px] mq980:w-full hover:scale-105 transition-transform duration-300 ease-in-out">
                        <TbEyeSearch className="text-6xl mb-2" />
                        <p className="text-xl font-semibold text-center">Detección temprana de fraudes.</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-5 flex flex-col justify-start items-center w-[390px] mq980:w-full hover:scale-105 transition-transform duration-300 ease-in-out">
                        <PiPiggyBankBold className="text-6xl mb-2" />
                        <p className="text-xl font-semibold text-center">Reducción de costo por siniestro.</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-5 flex flex-col justify-start items-center w-[390px] mq980:w-full hover:scale-105 transition-transform duration-300 ease-in-out">
                        <FaRegClock className="text-6xl mb-2" />
                        <p className="text-xl font-semibold text-center">Cumplimiento de plazos establecidos.</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-5 flex flex-col justify-start items-center w-[390px] mq980:w-full hover:scale-105 transition-transform duration-300 ease-in-out">
                        <RiSpeakLine className="text-6xl mb-2" />
                        <p className="text-xl font-semibold text-center">Comunicación fluida y feedback oportuno entre todas las partes involucradas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}