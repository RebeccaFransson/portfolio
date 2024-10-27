export const Input = ({
  id,
  label,
  placeholder = "",
  required = false,
  value = "",
}: {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value?: number | string;
}) => {
  const hasValueClasses = "-top-2 left-2.5 text-xs text-slate-400 scale-90";
  return (
    <div className="w-full">
      <div className="relative">
        <input
          className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder={placeholder}
          required={required}
          value={value}
        />
        <label
          id={id}
          className={`absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left ${
            value !== "" ? hasValueClasses : ""
          } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90`}
        >
          {label}
        </label>
      </div>
    </div>
  );
};
