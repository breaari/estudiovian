import { Asegurados } from "./asegurados";
import { Terceros } from "./terceros";
import { Dts } from "./dts";

export const Services = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[1200px]">
                <h1 className="font-spartan font-bold text-azuloscuro text-4xl mb-5">NUESTROS SERVICIOS</h1>
                <div className="flex flex-wrap justify-between">
                    <Terceros></Terceros>
                    <Asegurados></Asegurados>
                    <Dts></Dts>
                </div>
            </div>
        </div>
    );
};
