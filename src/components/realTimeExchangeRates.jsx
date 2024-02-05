import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./@ui/heading";
import Wrapper from "./@ui/wrapper";
import { useSymbols } from "../context/symbolsContext";
import SelectCurrency from "./selectCurrency";

const RealTimeExchangeRates = () => {
  const { symbols } = useSymbols();

  const [exchangeRates, setExchangeRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/latest?base=${baseCurrency}`
        );
        setExchangeRates(response.data.rates);
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
          label={" Select Base Currency:"}
          onChange={handleSelectCurrency}
        />
        {/* Live Rates */}
        <ul>
          {/* {.map(([currencyCode, rate]) => (
            <li key={currencyCode}>{`${currencyCode}: ${rate}`}</li>
          ))} */}
        </ul>
      </Wrapper>
    </div>
  );
};

export default RealTimeExchangeRates;
