import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./@ui/heading";
import Wrapper from "./@ui/wrapper";
import SelectCurrency from "./selectCurrency";
import SymbolsDetails from "./symbolsDetails";

const RealTimeExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;

      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/latest?api_key=${API_KEY}&base=${baseCurrency}`
        );
        if (response.data.success) {
          setExchangeRates(response.data.rates);
        } else {
          setExchangeRates({});
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  const handleSelectCurrency = (e) => {
    setBaseCurrency(e.target.value);
  };

  return (
    <div className="my-24">
      <Heading> REAL-TIME EXCHANGE RATES</Heading>

      <Wrapper>
        <SelectCurrency
          baseCurrency={baseCurrency}
          label={"Select Base Currency:"}
          onChange={handleSelectCurrency}
        />

        {/* Live Rates */}
        <SymbolsDetails
          h1={"Currency Name"}
          h2={"Currency Rate"}
          data={exchangeRates}
          className={"mt-6"}
        />
      </Wrapper>
    </div>
  );
};

export default RealTimeExchangeRates;
