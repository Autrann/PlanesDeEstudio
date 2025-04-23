import { useEffect, useRef, useState } from "react";
import SchoolPeriod from "../components/Molecules/schoolPeriod";
import CreateSubModal from "../components/organism/createSubModal";
import Img from "../components/atoms/Img";

function Canvas() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const canvasRef = useRef(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const [semesters, setSemesters] = useState(Array.from({ length: 10 }, () => Array(10).fill(null)));
    const [selectedPosition, setSelectedPosition] = useState({ semester: null, index: null });


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

    const handleSetSubject = (parsedSubject) =>{
        const { semester, index } = selectedPosition;
        if (semester === null || index === null) return;
        setSemesters(prev => {
            const updated = [...prev];
            updated[semester] = [...updated[semester]];
            updated[semester][index] = parsedSubject;
            return updated;
          });
          setIsModalOpen(false);
    }

    const handleOpenModal = (period,index) => {
        setSelectedPosition({
            semester:period,
            index:index
        })
        setIsModalOpen(true);
    };

    const handleCloseModal = (e) => {
        e.preventDefault();
        setSelectedPosition({
            semester:null,
            index:null
        })
        setIsModalOpen(false);
    };

    return (
        <div className="h-full w-full flex flex-col overflow-auto">
            {/* Modal */}
            {isModalOpen && <CreateSubModal handleCloseModal={handleCloseModal} handleSetSubject={handleSetSubject}/>}
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
                        <div className="flex flex-col items-center space-y-1">
                            {/*Icon */}
                            <div className="size-9 border-4 border-white" />
                            {/*Icon down arrow*/}
                            <Img params={{ icon:'downA' }} />
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
                    {semesters.map((subjects, index) => {
                        return (
                            <SchoolPeriod
                                key={index}
                                period={index}
                                subjects={subjects}
                                handleOpenModal={handleOpenModal}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Canvas;
