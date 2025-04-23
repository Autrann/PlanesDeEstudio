import Img from "../atoms/Img";

const Menu = ({}) => {
    return (
        <div className=" bg-[#879CAC] text-white p-2">
            {/* CONTENEDOR MENU */}
            <div className="flex space-x-2">
                {/* Agregar materia */}
                <div className="flex flex-col items-center space-y-1">
                    {/*Icon */}
                    <div className="size-9 border-4 border-white" />
                    <p className="text-sm">Agregar Materia</p>
                </div>
                {/* Seriar materia */}
                <div className="flex flex-col items-center space-y-1">
                    {/*Icon */}
                    <Img params={{icon:'seriar'}} className={"size-9"}/>
                    <p className="text-sm">Agrupar Materias</p>
                </div>
                {/* Agrupar materia */}
                <div className="flex flex-col items-center space-y-1">
                    {/*Icon */}
                    <Img params={{icon:'group'}} className={"size-9"}/>
                    <p className="text-sm">Agrupar Materias</p>
                </div>
                {/* Colores */}
                <div className="flex flex-col items-center space-y-1">
                    {/*Icon */}
                    <div className="flex space-x-2">
                        {/* Creo que es mejor que sea uno solo y se seleccione aqui el color */}
                        <div className="rounded-full size-9 bg-red-800 borde border-white"/>
                    </div>
                    <p className="text-sm">Agrupar Materias</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
