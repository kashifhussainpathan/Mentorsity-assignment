import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./@ui/heading";
import SelectDate from "./selectDate";
import SelectCurrency from "./selectCurrency";
import Wrapper from "./@ui/wrapper";

const ExchangeRatesOverTime = () => {
  const [exchangeRatesOverTime, setExchangeRatesOverTime] = useState({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");

  useEffect(() => {
    const fetchExchangeRatesOverTime = async () => {
      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/timeframe?start_date=${startDate}&end_date=${endDate}&base=${baseCurrency}`
        );
        setExchangeRatesOverTime(response.data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates over time:", error);
      }
    };

    if (startDate && endDate && baseCurrency) {
      fetchExchangeRatesOverTime();
    }
  }, [startDate, endDate, baseCurrency]);

  const handleSelectStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleSelectEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const handleSelectCurrency = (e) => {
    setBaseCurrency(e.target.value);
  };

  return (
    <div className="my-24">
      <Heading>EXCHANGE RATES OVER TIME</Heading>

      <Wrapper>
        <SelectDate
          label={"Start Date:"}
          selectedDate={startDate}
          onChange={handleSelectStartDate}
        />

        <SelectDate
          label={"End Date:"}
          selectedDate={endDate}
          onChange={handleSelectEndDate}
        />

        <SelectCurrency
          baseCurrency={baseCurrency}
          label={"Select Base Currency:"}
          onChange={handleSelectCurrency}
        />
      </Wrapper>
      {/* Display the exchange rates over time */}
    </div>
  );
};

export default ExchangeRatesOverTime;
