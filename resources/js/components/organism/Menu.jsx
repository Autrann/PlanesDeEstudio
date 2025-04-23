import Img from "../atoms/Img";

const Menu = ({menuMode,handleChangeMenuMode}) => {

    const handleRenderByMenuMode = (menuMode) => {
        switch(menuMode){
            case 1:
                return <></>;
            case 2:
                return <></>;
            case 3:
                return (
                    <div className="flex flex-col items-center space-y-1 ">
                        {/* Colores */}
                        <div className="flex space-x-2">
                            {/* Solo uno, se selecciona el color aquí */}
                            <div className="rounded-full size-9 bg-red-800 border border-white" />
                        </div>
                        <p className="text-sm">Agrupar Materias</p>
                    </div>
                );
            default:
                return null;
        }
    }

    const handleClick = (e) => {
        const menuItem = e.target.closest('[data-menu-mode]');
        if (menuItem) {
            const mode = parseInt(menuItem.getAttribute('data-menu-mode'));
            handleChangeMenuMode(mode);
        }
    };
    

    return (
        <div className=" bg-[#879CAC] text-white p-2 text-center">
            {/* CONTENEDOR MENU */}
            <div className="flex space-x-2" onClick={handleClick}>
                {/* Agregar materia */}
                <div className="flex flex-col items-center space-y-1" data-menu-mode="1">
                    {/*Icon */}
                    <div className="size-9 border-4 border-white" />
                    <p className="text-sm">Agregar Materia</p>
                </div>
                {/* Seriar materia */}
                <div className="flex flex-col items-center space-y-1" data-menu-mode="2">
                    {/*Icon */}
                    <Img params={{icon:'seriar'}} className={"size-9"}/>
                    <p className="text-sm">Seriar Materias</p>
                </div>
                {/* Agrupar materia */}
                <div className="flex flex-col items-center space-y-1" data-menu-mode="3">
                    {/*Icon */}
                    <Img params={{icon:'group'}} className={"size-9"}/>
                    <p className="text-sm">Agrupar Materias</p>
                </div>
                {
                   (handleRenderByMenuMode(menuMode))
                }
            </div>
        </div>
    );
};

export default Menu;
