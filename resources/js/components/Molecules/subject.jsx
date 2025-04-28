import Img from "../atoms/Img";

function Subjects({
    period = undefined,
    subject,
    index = undefined,
    handleOpenModal = undefined,
    containerClassName = undefined,
}) {
    const handleOnClickSubject = (e) => {
        e.preventDefault();
        if (subject) return;
        const modalInstructions = {
            title: "Agregar Materia",
            subtitle: "Seleccionar materia a insertar",
            icon: "addSubject",
            type: "createSubject",
        };
        handleOpenModal(modalInstructions, period, index);
    };

    const handleCaceiBG = (ClaCA) => {
        switch (ClaCA) {
            case "IA":
                return "bg-[#FC0000] text-white";
            case "CB":
                return "bg-[#B2A1C8] text-white ";
            case "CI":
                return "bg-[#3366FF] text-white";
            case "CS":
                return "bg-[#FFFF00] text-red-900";
            case "CE":
                return "bg-[#FF6804] text-white";
            case "CC":
                return "bg-white text-black";
            default:
                return "";
        }
    };

    const handleSubClickSubject = (e) => {
        e.preventDefault();
        if (!subject) return;
        const modalInstructions = {
            type: "secundarySubject",
        };
        handleOpenModal(modalInstructions, period, index);
    };

    return (
        <div className={`${containerClassName} w-full`}>
            <div
                onClick={
                    handleOpenModal ? (e) => handleOnClickSubject(e) : () => {}
                }
                onContextMenu={
                    handleOpenModal ? (e) => handleSubClickSubject(e) : () => {}
                }
                className={`flex transition-all ${
                    handleOpenModal && "cursor-pointer"
                } text-center  ${
                    !subject
                        ? handleOpenModal
                            ? "hover:bg-[#b0cadf] items-center justify-center border-dashed border-[#879CAC]"
                            : "border-white"
                        : "flex-col border-black"} 
                        ${subject.tipoMateria === "dfm" ? "border-4" :
                            subject.tipoMateria ==="common" ? "border-4 border-double" :
                            subject.tipoMateria === "ing" ? "border-2 border-dashed" : "border-2"
                        } w-full h-full  bg-white select-none rounded-lg `}
            >
                {subject ? (
                    <>
                        <div className="p-0.5 flex flex-1 items-center justify-center text-[12px] overflow-hidden">
                                {subject.nombreMateria}
                        </div>
                        <div className="grid grid-cols-7 text-[12px] border-t-2 border-black">
                            <div
                                className={`border-l-2 border-black ${
                                    !handleOpenModal && "pb-1"
                                }`}
                            >
                                {subject.horasTeoria}
                            </div>
                            <div className="border-l-2 border-black ">
                                {subject.horasPractica}
                            </div>
                            <div className="border-l-2 border-black">
                                {subject.creditos}
                            </div>
                            <div className="col-span-2 border-l-2 border-black">
                                {subject.claveMateria}
                            </div>
                            <div
                                className={`col-span-2 border-l-2 border-black ${handleCaceiBG(
                                    subject.claveCacei
                                )}`}
                            >
                                {subject.claveCacei}
                            </div>
                        </div>
                    </>
                ) : (
                    handleOpenModal && (
                        <Img
                            className={"w-8"}
                            params={{ icon: "addSubject" }}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default Subjects;
