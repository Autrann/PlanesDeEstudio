import Img from "../atoms/Img";

function Subjects({ period, subject, index, handleOpenModal }) {
    const handleOnClickSubject = (e) => {
        e.preventDefault();
        handleOpenModal(period, index);
    };

    return (
        <div
            onClick={(e) => handleOnClickSubject(e)}
            className={`flex transition-all cursor-pointer text-center  ${
                !subject
                    ? "hover:bg-[#b0cadf] items-center justify-center border-dashed border-[#879CAC]"
                    : "flex-col border-black"
            } w-36 h-24 border-4 bg-white select-none`}
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
                        <div className="p-0.5 border-l-2 border-black w-1/5 ">
                            {subject.claveCacei}
                        </div>
                    </div>
                </>
            ) : (
                <Img className={"w-8"} params={{ icon: "addSubject" }} />
            )}
        </div>
    );
}

export default Subjects;
