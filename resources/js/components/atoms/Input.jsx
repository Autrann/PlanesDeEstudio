export default function Input({
    name,
    className,
    options = [],
    required = true,
    onChange = undefined,
    rules = undefined,
    id,
}) {
    const inputClasname =
        "rounded-sm outline-2 outline-[#B0896C] w-full pl-2 h-8";
    return (
        <div className={`${className}`}>
            <label className="flex items-center text-clip truncate">
                {name}
                {required && <p className="text-red-600">*</p>}
            </label>
            {options.length > 0 ? (
                <select
                    className={`${inputClasname}`}
                    id={id}
                    name={id}
                    required={required}
                    onChange={onChange ? (event) => onChange(event) : undefined}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    id={id}
                    name={id}
                    className={`${inputClasname}`}
                    required={required}
                    {...rules}
                />
            )}
        </div>
    );
}
