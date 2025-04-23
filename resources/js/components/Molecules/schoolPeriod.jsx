import Subjects from "./subject";

function SchoolPeriod({ period,subjects,handleOpenModal }) {
    const parsePeriod = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
    ];

    return (
        <div className="flex w-full">
            <div className="flex items-center justify-center w-8">
                <p className="text-xl text-[#A29797]">{parsePeriod[period]}</p>
            </div>
            <div className="flex border-2 border-[#A29797] p-2 space-x-2 flex-wrap">
                {subjects.map((subject, index) => (
                    <Subjects 
                    key={index} 
                    index={index}
                    period={period} 
                    subject={subject} 
                    handleOpenModal={handleOpenModal} 
                    />
                ))}
            </div>
        </div>
    );
}

export default SchoolPeriod;
