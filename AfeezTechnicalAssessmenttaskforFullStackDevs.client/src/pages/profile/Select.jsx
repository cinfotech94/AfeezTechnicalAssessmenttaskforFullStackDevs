const Select = ({
  label,

  id,
  name,
  optionDetails,
  change,
  options,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="country">{label}</label>
      <select
        id={id}
        name={name}
        onChange={(e) => change(name, e)}
        className="ring-1 outline-none ring-slate-300 py-2.5 px-4 rounded-[4px] text-gray-500"
      >
        <option hidden>{optionDetails}</option>
        {options}
      </select>
    </div>
  );
};

export default Select;
