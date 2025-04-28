import Img from "../atoms/Img";
import Subjects from "../Molecules/subject";

const StudyPlanTempleate = ({ semesters }) => {
    return (
        <div id="planEstudios" className="mt-36 w-full">
            <div className="flex flex-col p-2 bg-white text-black items-center">
                <div className="w-full flex justify-between items-center mb-4">
                    <Img className={"w-32"} params={{ icon: "UASLP" }} />
                    <div>
                        <h1 className="text-3xl font-bold text-center">
                            Plan de Estudios
                        </h1>
                        <p className="text-center">
                            Ingeniería en Sistemas Inteligentes
                        </p>
                    </div>
                    <Img className={"w-32"} params={{ icon: "UASLP" }} />
                </div>
                <div className="w-3/4">
                    <div className="flex justify-between items-center text-lg font-bold mb-2">
                        <p>Nivel</p>
                        <p>Creditos</p>
                    </div>
                    <hr className="h-1 bg-black w-full" />
                    <hr className="h-1 bg-black w-full" />
                    {semesters.map((semester, index) => {
                        return (
                            <div
                                key={`${index}`}
                                className="flex justify-between w-full"
                            >
                                <h2 className="text-xl font-semibold mr-1">
                                    {index + 1}
                                </h2>
                                <div className="flex-1 grid grid-cols-8 place-content-stretch">
                                    {semester.courses.map((subject, idx) => {
                                        return (
                                            <Subjects
                                                key={idx}
                                                index={idx}
                                                subject={subject}
                                                containerClassName={
                                                    "h-20 p-1 col-span-1"
                                                }
                                            />
                                        );
                                    })}
                                    <div className="flex items-center justify-center text-center col-span-1">
                                        <p className="border-2 border-black p-2 w-3/4 ">
                                            {semester.creditos}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-right mt-12">
                    <p>
                        Fecha de generación: {new Date().toLocaleDateString()}
                    </p>
                    <p className="mt-2">Firma: ________________________</p>
                </div>
            </div>
        </div>
    );
};

export default StudyPlanTempleate;
