import { useEffect, useRef, useState } from "react";
import SchoolPeriod from "../components/Molecules/schoolPeriod";
import CreateSubModal from "../components/organism/createSubModal";
import Modal from "../components/organism/Modal/Modal";
import Menu from "../components/organism/Menu";

function Canvas() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [semesters, setSemesters] = useState(
        Array.from({ length: 10 }, () => Array(10).fill(null))
    );
    const [menuMode, setMenuMode] = useState(1);
    const selectedPosition = useRef({ semester: null, index: null });
    const modalInstructions = useRef({
        title: null,
        subtitle: null,
        icon: null,
        type: null,
    });
    const canvasRef = useRef(null);
    const mousePosition = useRef({ x: 0, y: 0 });

    const pizzaraStyle = {
        backgroundColor: "white",
        backgroundImage: `linear-gradient(to right, gray 1px, transparent 1px), 
           linear-gradient(to bottom, gray 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
    };

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

    const handleSetSubject = (parsedSubject) => {
        const { semester, index } = selectedPosition.current;
        if (semester === null || index === null) return;
        setSemesters((prev) => {
            const updated = [...prev];
            updated[semester] = [...updated[semester]];
            updated[semester][index] = parsedSubject;
            return updated;
        });
        console.log(parsedSubject);
        handleCloseModal();
    };

    const handleOpenModal = (instructions, period, index) => {
        selectedPosition.current = {
            semester: period,
            index: index,
        };
        modalInstructions.current = instructions;
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        selectedPosition.current = {
            semester: null,
            index: null,
        };
        setIsModalOpen(false);
    };

    const handleChangeMenuMode = (mode) => {
        setMenuMode(mode);
    };

    const handleRenderModal = () => {
        let children = null;
        switch (modalInstructions.current.type) {
            case "createSubject":
                children = (
                    <CreateSubModal handleSetSubject={handleSetSubject} />
                );
            default:
                "";
        }
        return (
            <Modal
                modalInstructions={modalInstructions}
                handleCloseModal={handleCloseModal}
            >
                {children}
            </Modal>
        );
    };

    return (
        <div className="h-full w-full flex flex-col overflow-auto">
            {/* Modal */}
            {isModalOpen && (
                handleRenderModal()
            )}
            <div className="fixed z-10 w-full">
                {/* Tittle */}
                <div className="bg-[#CAD4DC] font-bold p-2">
                    <p className="text-4xl text-white">
                        PLAN DE ESTUDIO -{" "}
                        <a className="text-[#879CAC]">INGENIERIA</a>
                    </p>
                </div>
                {/* Menu principal */}
                <Menu
                    menuMode={menuMode}
                    handleChangeMenuMode={handleChangeMenuMode}
                />
            </div>
            {/* Canvas materias */}
            <div
                className="mt-36 grow w-[2000px] p-4"
                ref={canvasRef}
                style={pizzaraStyle}
            >
                <div className="flex flex-col ">
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
