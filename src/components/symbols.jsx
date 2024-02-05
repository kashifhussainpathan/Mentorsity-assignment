import axios from "axios";
import { useEffect } from "react";
import { useSymbols } from "../context/symbolsContext";
import Heading from "./@ui/heading";
import Wrapper from "./@ui/wrapper";

const Symbols = () => {
  const { symbols, handleSetSymbols } = useSymbols();

  useEffect(() => {
    const fetchSymbols = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;

      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/symbols?api_key=${API_KEY}`
        );
        handleSetSymbols(response.data.symbols);
        localStorage.setItem("symbols", JSON.stringify(response.data.symbols));
      } catch (error) {
        console.error("Error fetching symbols:", error);
      }
    };

    // fetchSymbols();
  }, []);

  console.log(Object.entries(symbols));

  return (
    <>
      <Heading>SUPPORTED CURRENCIES </Heading>
      <Wrapper>
        <div className="text-left w-full h-[500px] overflow-y-scroll pr-4">
          <div className="grid grid-cols-2 border py-2 px-10 font-semibold rounded-md gap-[300px]">
            <div>Currency Code</div>
            <div>Currency Name</div>
          </div>
          {Object.entries(symbols).map(([currencyCode, currencyName]) => (
            <div
              className="grid grid-cols-2 border border-gray-700 py-2 px-10  gap-[300px]"
              key={currencyCode}
            >
              <div>{currencyCode}</div>
              <div>{currencyName}</div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Symbols;
