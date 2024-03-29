import axios from "axios";
import { useEffect } from "react";
import { useSymbols } from "../context/symbolsContext";
import Heading from "./@ui/heading";
import Wrapper from "./@ui/wrapper";
import SymbolsDetails from "./symbolsDetails";

const Symbols = () => {
  const { symbols, handleSetSymbols } = useSymbols();

  useEffect(() => {
    const fetchSymbols = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;

      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/symbols?api_key=${API_KEY}`
        );
        if (response.data.success) {
          handleSetSymbols(response.data.symbols);
        } else {
          handleSetSymbols({});
        }
      } catch (error) {
        console.error("Error fetching symbols:", error);
      }
    };

    fetchSymbols();
  }, []);

  return (
    <>
      <Heading>SUPPORTED CURRENCIES </Heading>
      <Wrapper>
        {Object.entries(symbols).length > 0 ? (
          <SymbolsDetails
            h1="Currency Code"
            h2="Currency Name"
            data={symbols}
          />
        ) : (
          <p className="text-center">No Currencies found!</p>
        )}
      </Wrapper>
    </>
  );
};

export default Symbols;
