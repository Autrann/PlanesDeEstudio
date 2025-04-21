function Subjects({name="Materia"}) {
    return (
        <div className="flex flex-col justify-between w-32 h-20 border-4 border-black bg-white select-none">
            <div className="flex h-full items-center justify-center">
                {name}
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
        </div>
    );
}

export default Subjects;
