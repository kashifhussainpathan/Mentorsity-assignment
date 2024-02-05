import React from "react";

const SelectDate = ({ label, onChange, selectedDate, className }) => {
  return (
    <div className={`w-full flex justify-center gap-2 mb-4 ${className}`}>
      <label
        htmlFor="data"
        className="font-medium text-xl treking-wider text-center "
      >
        {label}
      </label>
      <input
        type="date"
        id="date"
        value={selectedDate}
        className="text-black pl-1"
        onChange={onChange}
      />
    </div>
  );
};

export default SelectDate;
