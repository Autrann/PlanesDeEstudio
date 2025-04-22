import Img from "../atoms/Img";
import SelectDropDown from "../atoms/SelectDropDown";
function Modal() {
    const subjectsOptions = [
        {value:'1',label:'1'},
        {value:'2',label:"2"}
    ];

    return (
        <div className="fixed z-20 h-full w-full flex items-center justify-center">
            {/* Fondo con opacidad */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Modal centrado */}
            <div className="relative z-30 w-1/2 h-1/2 bg-white p-4 rounded space-y-2">
                <div className="flex items-center space-x-2">
                    <Img className={"w-10"} params={{icon:"addSubject"}} />
                    <h1 className="text-2xl font-bold">Agregar Materia</h1>
                </div>
                <h3 className="text-base text-[#A29797]">
                    Seleccionar materia a insertar
                </h3>
                <hr />
                <div>
                    <SelectDropDown 
                    containerClass={"h-12"}
                    options={subjectsOptions} 
                    name={""}
                    placeholder={"Selecciona una materia"}/>
                </div>
            </div>
        </div>
    );
}

export default Modal;
