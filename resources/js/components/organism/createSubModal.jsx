import Img from "../atoms/Img";
import SelectDropDown from "../atoms/SelectDropDown";
import UseFetch from "../../hooks/useFetch/UseFetch";
import { useEffect, useState } from "react";

function CreateSubModal({ handleCloseModal,handleSetSubject }) {
    const { data, loading } = UseFetch("get", "getAllSubjects");
    const [subjectsOptions, setSubjectsOptions] = useState(null);

    useEffect(() => {
        const parseSubjects = () => {
            if (!data) return;
            const subjectsOptions = data.map((e, _) => {
                const option = {
                    label: e.nombreMateria,
                    value: JSON.stringify(e),
                };
                return option;
            });
            setSubjectsOptions(subjectsOptions);
        };
        parseSubjects();
    }, [data]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const { subject } = Object.fromEntries(new FormData(e.target));
        const parsedSubject = JSON.parse(subject);
        console.log(parsedSubject);
        handleSetSubject(parsedSubject)
    }

    const handleLocalCloseModal = (e) =>{
        e.preventDefault();
        handleCloseModal();
    }
    

    return (
        <div className="fixed z-20 h-full w-full flex items-center justify-center">
            {/* Fondo con opacidad */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Modal centrado */}
            <div className="relative z-30 w-1/2 bg-white p-4 rounded space-y-2">
                <div className="flex space-x-2 justify-between">
                    <div className="flex items-center space-x-2">
                        <Img
                            className={"w-10"}
                            params={{ icon: "addSubject" }}
                        />
                        <h1 className="text-2xl font-bold">Agregar Materia</h1>
                    </div>
                    <button onClick={(e) => handleLocalCloseModal(e)}>X</button>
                </div>
                <h3 className="text-base text-[#A29797]">
                    Seleccionar materia a insertar
                </h3>
                <hr />
                <form onSubmit={e=>handleSubmit(e)} className="space-y-2">
                    {loading || !subjectsOptions ? (
                        <div>Cargando...</div>
                    ) : (
                        <>
                            <SelectDropDown
                                containerClass={"h-12"}
                                options={subjectsOptions}
                                name={"subject"}
                                placeholder={"Selecciona una materia"}
                            />
                            <div className="flex justify-end space-x-2 font-semibold">
                                <button onClick={(e) => handleLocalCloseModal(e)} className="p-2 text-[#AFBEC9]">Cancelar</button>
                                <button type="submit" className="p-2 bg-[#AFBEC9] rounded-sm text-white">Seleccionar</button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

export default CreateSubModal;
