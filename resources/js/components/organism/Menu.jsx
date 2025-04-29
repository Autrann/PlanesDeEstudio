import Img from "../atoms/Img";

const Menu = ({
    menuMode,
    handleChangeMenuMode,
    handleSetPage,
    page,
    handleCreatePDF,
}) => {
    const handleRenderByMenuMode = (menuMode) => {
        switch (menuMode) {
            case 1:
                return <></>;
            case 2:
                return <></>;
            case 3:
                return (
                    <div className="flex flex-col items-center space-y-1 hover:bg-[#55636d] p-2 rounded-sm cursor-pointer transition-colors">
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
    };

    const handleClick = (e) => {
        const menuItem = e.target.closest("[data-menu-mode]");
        if (menuItem) {
            const mode = parseInt(menuItem.getAttribute("data-menu-mode"));
            handleChangeMenuMode(mode);
        }
    };

    return (
        <div className=" bg-[#879CAC] text-white p-2 text-center">
            <div className="flex justify-between items-center">
                {/* CONTENEDOR MENU */}
                <div className="flex space-x-2" onClick={handleClick}>
                    {/* Crear pdf */}
                    {page && (
                        <div
                            onClick={handleCreatePDF}
                            className="flex flex-col items-center space-y-1 hover:bg-[#55636d] p-2 rounded-sm cursor-pointer transition-colors"
                        >
                            {/*Icon */}
                            <Img
                                params={{ icon: "seriar" }}
                                className={"size-9"}
                            />
                            <p className="text-sm">Crear PDF</p>
                        </div>
                    )}
                    {/* Agregar materia */}
                    <div
                        className="flex flex-col items-center space-y-1 hover:bg-[#55636d] p-2 rounded-sm cursor-pointer transition-colors"
                        data-menu-mode="1"
                    >
                        {/*Icon */}
                        <div className="size-9 border-4 border-white" />
                        <p className="text-sm">Agregar Materia</p>
                    </div>
                    {/* Seriar materia */}
                    <div
                        className="flex flex-col items-center space-y-1 hover:bg-[#55636d] p-2 rounded-sm cursor-pointer transition-colors"
                        data-menu-mode="2"
                    >
                        {/*Icon */}
                        <Img params={{ icon: "seriar" }} className={"size-9"} />
                        <p className="text-sm">Seriar Materias</p>
                    </div>
                    {/* Agrupar materia */}
                    <div
                        className="flex flex-col items-center space-y-1 hover:bg-[#55636d] p-2 rounded-sm cursor-pointer transition-colors"
                        data-menu-mode="3"
                    >
                        {/*Icon */}
                        <Img params={{ icon: "group" }} className={"size-9"} />
                        <p className="text-sm">Agrupar Materias</p>
                    </div>
                    {handleRenderByMenuMode(menuMode)}
                </div>
                <div>
                    <div className="flex flex-col items-center space-y-1">
                        <button
                            onClick={handleSetPage}
                            className="relative w-20 h-9 bg-[#A8B5BE] rounded-full"
                        >
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 bg-[#D9D9D9] w-8 h-8 rounded-full transition-all duration-300 ${
                                    page ? "right-1" : "left-1"
                                }`}
                            />
                        </button>
                        <p className="text-sm">Vista previa</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
