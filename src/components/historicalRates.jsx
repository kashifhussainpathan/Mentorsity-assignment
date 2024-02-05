import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./@ui/heading";
import Wrapper from "./@ui/wrapper";
import SelectCurrency from "./selectCurrency";
import SelectDate from "./selectDate";
import SymbolsDetails from "./symbolsDetails";

const HistoricalRates = () => {
  const [historicalRates, setHistoricalRates] = useState({});
  const [selectedDate, setSelectedDate] = useState("2024-02-04");
  const [baseCurrency, setBaseCurrency] = useState("USD");

  useEffect(() => {
    const fetchHistoricalRates = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;

      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/${selectedDate}?api_key=${API_KEY}&base=${baseCurrency}`
        );

        if (response.data.success) {
          setHistoricalRates(response.data.rates);
        } else {
          setHistoricalRates({});
        }
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

        {/* Historical Rates */}

        {Object.entries(historicalRates).length > 0 ? (
          <SymbolsDetails
            h1={"Currency Name"}
            h2={"Historical Rates"}
            data={historicalRates}
            className={"mt-6"}
          />
        ) : (
          <p className="mt-6 text-center">
            {" "}
            No Result found based on user's query!{" "}
          </p>
        )}
      </Wrapper>
    </div>
  );
};

export default HistoricalRates;
