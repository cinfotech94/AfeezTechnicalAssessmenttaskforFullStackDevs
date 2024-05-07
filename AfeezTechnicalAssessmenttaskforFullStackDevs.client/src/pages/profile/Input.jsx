import React from "react";

const Input = ({ label, id, name, type, placeholder, change }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="city">{label}</label>
      <input
        onChange={(e) => change(name, e)}
        type={type}
        id={id}
        name={name}
        className="ring-1 outline-none ring-slate-300 py-2.5 px-4 rounded-[4px] text-gray-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
