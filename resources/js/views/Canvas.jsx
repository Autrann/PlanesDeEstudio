import { useEffect, useRef, useState } from "react";
import SchoolPeriod from "../components/Molecules/schoolPeriod";
import CreateSubModal from "../components/organism/Modal/subModals/createSubModal";
import EditSubModal from "../components/organism/Modal/subModals/editSubModal";
import DeleteSubModal from "../components/organism/Modal/subModals/deleteSubModal";
import Modal from "../components/organism/Modal/Modal";
import Menu from "../components/organism/Menu";
import ContextMenu from "../components/organism/ContextMenu";
import StudyPlanTempleate from "../components/templates/studyPlanTempleate";
import Subjects from "../components/Molecules/subject";
import html2pdf from "html2pdf.js";

function Canvas() {
    const [isModalOpen, setIsModalOpen] = useState(null);
    const [page, setPage] = useState(false);
    const [semesters, setSemesters] = useState(
        Array.from({ length: 10 }, () => ({ creditos: 0, courses: Array(7).fill(null) }))
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

    const handleSetPage = () => {
        setPage((prevState) => !prevState);
    };

    const handleCreatePDF = () => {
        const element = document.getElementById("planEstudios");
        element.classList.remove("mt-36")
        html2pdf()
            .from(element)
            .set({
                margin: 0,
                filename: "plan_de_estudios.pdf",
                html2canvas: { scale: 3 },
                precision: 16,
                jsPDF: { unit: "mm", format: [320, 450], orientation:"landscape" },
            })
            .save();

    };

    const handleSetSubject = (parsedSubject) => {
        const { semester, index } = selectedPosition.current;
        if (semester === null || index === null) return;
        setSemesters((prev) => {
            const updated = [...prev];
            updated[semester].courses = [...updated[semester].courses];
            updated[semester].creditos += parsedSubject.creditos;
            updated[semester].courses[index] = parsedSubject;
            return updated;
        });
        handleCloseModal();
    };

    const handleDeleteSubject = () => {
        const { semester, index } = selectedPosition.current;
        if (semester === null || index === null) return;
        setSemesters((prev) => {
            const updated = [...prev];
            updated[semester].courses = [...updated[semester].courses];
            updated[semester].courses[index] = null;
            return updated;
        });
        handleCloseModal();
    };

    const handleOpenModal = (instructions, period, index) => {
        if (selectedPosition.current.semester === null) {
            selectedPosition.current = {
                semester: period,
                index: index,
            };
        }
        modalInstructions.current = instructions;
        setIsModalOpen(instructions.type);
    };

    const handleCloseModal = () => {
        selectedPosition.current = {
            semester: null,
            index: null,
        };
        setIsModalOpen(null);
    };

    const handleChangeMenuMode = (mode) => {
        setMenuMode(mode);
    };

    const handleRenderModal = () => {
        let children = null;
        switch (modalInstructions.current.type) {
            case "createSubject":
                children = (
                    <CreateSubModal
                        handleSetSubject={handleSetSubject}
                        handleCloseModal={handleCloseModal}
                    />
                );
                break;
            case "editSubject":
                children = <EditSubModal handleCloseModal={handleCloseModal} />;
                break;
            case "deleteSubject":
                children = (
                    <DeleteSubModal
                        handleCloseModal={handleCloseModal}
                        handleDeleteSubject={handleDeleteSubject}
                    />
                );
                break;
            case "secundarySubject":
                return (
                    <ContextMenu
                        handleOpenModal={handleOpenModal}
                        mousePosition={mousePosition}
                        handleCloseModal={handleCloseModal}
                    />
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
        <div className="relative h-full w-full flex flex-col overflow-auto">
            {/* Modal */}
            {isModalOpen && handleRenderModal()}

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
                    handleSetPage={handleSetPage}
                    page={page}
                    handleCreatePDF={handleCreatePDF}
                />
            </div>
            {/* Canvas materias */}
            {page ? (
                <StudyPlanTempleate semesters={semesters}/>
            ) : (
                <div
                    className="mt-36 grow w-full p-4"
                    ref={canvasRef}
                    style={pizzaraStyle}
                >
                    <div className="flex flex-col">
                        {semesters.map((semester, index) => {
                            return (
                                <SchoolPeriod
                                    key={index}
                                    period={index}
                                    semester={semester}
                                    handleOpenModal={handleOpenModal}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Canvas;
