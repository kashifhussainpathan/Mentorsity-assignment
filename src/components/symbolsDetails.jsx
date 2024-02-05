import React from "react";

const SymbolsDetails = ({ h1, h2, data, className }) => {
  return (
    <div
      className={`text-left w-full h-[500px] overflow-y-scroll pr-4 ${className} `}
    >
      <div className="grid grid-cols-2 border py-2 px-10 font-semibold rounded-md gap-[300px]">
        <div>{h1}</div>
        <div>{h2}</div>
      </div>
      {Object.entries(data)?.map(([data1, data2]) => (
        <div
          className="grid grid-cols-2 border border-gray-700 py-2 px-10  gap-[300px]"
          key={data1}
        >
          <div>{data1}</div>
          <div>{data2}</div>
        </div>
      ))}
    </div>
  );
};

export default SymbolsDetails;
