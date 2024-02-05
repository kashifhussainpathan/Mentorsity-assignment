import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./@ui/heading";
import Wrapper from "./@ui/wrapper";
import { useSymbols } from "../context/symbolsContext";
import SelectCurrency from "./selectCurrency";
import SelectDate from "./selectDate";

const HistoricalRates = () => {
  const { symbols } = useSymbols();
  const [historicalRates, setHistoricalRates] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");

  useEffect(() => {
    const fetchHistoricalRates = async () => {
      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/${selectedDate}?base=${baseCurrency}`
        );
        setHistoricalRates(response.data.rates);
      } catch (error) {
        console.error("Error fetching historical rates:", error);
      }
    };

    if (selectedDate && baseCurrency) {
      fetchHistoricalRates();
    }
  }, [selectedDate, baseCurrency]);

  const handleSelectCurrency = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleSelectDate = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="my-24">
      <Heading>HISTORICAL RATES</Heading>

      <Wrapper>
        {/* Select Date */}
        <SelectDate
          label={"Select Date:"}
          onChange={handleSelectDate}
          selectedDate={selectedDate}
        />

        {/* Select Currency */}
        <SelectCurrency
          baseCurrency={baseCurrency}
          label={"Select Base Currency:"}
          onChange={handleSelectCurrency}
        />

        <ul>
          {/* {Object.entries(historicalRates).map(([currencyCode, rate]) => (
            <li key={currencyCode}>{`${currencyCode}: ${rate}`}</li>
          ))} */}
        </ul>
      </Wrapper>
    </div>
  );
};

export default HistoricalRates;
