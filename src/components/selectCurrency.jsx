import { useSymbols } from "../context/symbolsContext";

const SelectCurrency = ({ label, onChange, baseCurrency, className }) => {
  const { symbols } = useSymbols();
  return (
    <div className={`w-full flex justify-center gap-2 ${className}`}>
      <label className="font-medium text-xl treking-wider text-center ">
        {label}
      </label>
      <select
        value={baseCurrency}
        onChange={onChange}
        className="text-gray-800 cursor-pointer"
      >
        {Object.keys(symbols).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCurrency;
