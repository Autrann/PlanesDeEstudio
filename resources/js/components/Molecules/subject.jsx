import { useState } from "react";
import Img from "../atoms/Img";

function Subjects({ Subject,handleOpenModal }) {
    const [localSubject, setLocalSubject] = useState(Subject);

    const handleOnClickSubject = (e) =>{
        e.preventDefault();
        handleOpenModal(e);
    }

    return (
        <div
            onClick={(e)=>handleOnClickSubject(e)}
            className={`flex transition-all cursor-pointer  ${
                !localSubject
                    ? "hover:bg-[#b0cadf] items-center justify-center border-dashed border-[#879CAC]"
                    : "flex-col justify-between border-black"
            } w-32 h-20 border-4 bg-white select-none`}
        >
            {localSubject ? (
                <>
                    <div className="flex h-full items-center justify-center">
                        {localSubject.name}
                    </div>
                    <div className="flex justify-between border-t-2 border-black">
                        {[0, 1, 2, 3, 4].map((e) => {
                            return (
                                <div
                                    className="border-l-2 border-black w-1/5 flex justify-center"
                                    key={e}
                                >
                                    {e}
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                <Img className={"w-8"} params={{icon:"addSubject"}} />
            )}
        </div>
    );
}

export default Subjects;
