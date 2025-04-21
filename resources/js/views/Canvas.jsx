import { useEffect, useRef } from "react";
import SchoolPeriod from "../components/Molecules/schoolPeriod";

function Canvas() {
    const canvasRef = useRef(null);
    const mousePosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouse = (e) => {
            const newMousePosition = {
                x: e.x,
                y: e.y,
            };
            mousePosition.current = newMousePosition;
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, []);

    const pizzaraStyle = {
        backgroundColor: "white",
        backgroundImage: `linear-gradient(to right, gray 1px, transparent 1px), 
           linear-gradient(to bottom, gray 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
    };

    return (
        <div className="h-full w-full flex flex-col overflow-auto">
            <div className="fixed z-10 w-full">
                {/* Tittle */}
                <div className="bg-[#CAD4DC] font-bold p-2">
                    <p className="text-4xl text-white">
                        PLAN DE ESTUDIO -{" "}
                        <a className="text-[#879CAC]">INGENIERIA</a>
                    </p>
                </div>
                {/* Menu principal */}
                <div className=" bg-[#879CAC] text-white p-2">
                    {/* CONTENEDOR MENU */}
                    <div className="flex">
                        {/* Agregar materia */}
                        <div className="flex flex-col items-center">
                            {/*Icon */}
                            <div className="size-9 border-4 border-white" />
                            {/*Icon down arrow*/}
                            <div className="w-6">
                                <img src="images/icons/downA.webp" />
                            </div>
                            <p className="text-sm">Agregar Materia</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Canvas materias */}
            <div
                className="mt-36 grow w-[2000px] p-4"
                ref={canvasRef}
                style={pizzaraStyle}
            >
                <div className="flex flex-col">
                    {[1,2,3,4,5,6,7,8,9,10].map((e,i)=>{
                        return(
                            <SchoolPeriod key={i} period={i}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Canvas;
