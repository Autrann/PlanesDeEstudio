import Img from "../atoms/Img";

function Subjects({ period, subject, index, handleOpenModal }) {
    const handleOnClickSubject = (e) => {
        e.preventDefault();
        if(subject) return;
        const modalInstructions = {
            title:'Agregar Materia' ,
            subtitle:'Seleccionar materia a insertar',
            icon:'addSubject',
            type:'createSubject',
        }
        handleOpenModal(modalInstructions,period, index);
    };

    const handleCaceiBG = (ClaCA) =>{
        switch(ClaCA){
            case 'IA':
                return 'bg-[#FC0000] text-white'
            case 'CB':
                return 'bg-[#B2A1C8] text-white '
            case 'CI':
                return 'bg-[#3366FF] text-white'
            case 'CS':
                return 'bg-[#FFFF00] text-red-900'
            case 'CE':
                return 'bg-[#FF6804] text-white'
            case 'CC':
                return 'bg-white text-black'
            default:
                return ''
        }
    }

    const handleSubClickSubject = (e) =>{
        e.preventDefault();
        if(!subject) return;
        const modalInstructions = {
            type:'secundarySubject',
        }
        handleOpenModal(modalInstructions,period, index);
    }

    return (
        <div className={`w-full p-3`}>
            <div
                onClick={(e) => handleOnClickSubject(e)}
                onContextMenu={(e)=>handleSubClickSubject(e)}
                className={`flex transition-all cursor-pointer text-center  ${
                    !subject
                        ? "hover:bg-[#b0cadf] items-center justify-center border-dashed border-[#879CAC]"
                        : "flex-col border-black"
                } w-full h-24 border-4 bg-white select-none`}
            >
                {subject ? (
                    <>
                        <div className="p-0.5 flex items-center justify-center flex-1 text-[12px] overflow-hidden">
                            {subject.nombreMateria}
                        </div>
                        <div className="flex justify-between border-t-2 border-black text-[12px]">
                            <div className="p-0.5 border-l-2 border-black ">
                                {subject.horasTeoria}
                            </div>
                            <div className="p-0.5 border-l-2 border-black ">
                                {subject.horasPractica}
                            </div>
                            <div className="p-0.5 border-l-2 border-black">
                                {subject.creditos}
                            </div>
                            <div className="p-0.5 border-l-2 border-black w-2/5 ">
                                {subject.claveMateria}
                            </div>
                            <div className={` p-0.5 border-l-2 border-black w-1/5 ${handleCaceiBG(subject.claveCacei)}`}>
                                {subject.claveCacei}
                            </div>
                        </div>
                    </>
                ) : (
                    <Img className={"w-8"} params={{ icon: "addSubject" }} />
                )}
            </div>
        </div>
    );
}

export default Subjects;
