import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./@ui/heading";
import SelectDate from "./selectDate";
import SelectCurrency from "./selectCurrency";
import Wrapper from "./@ui/wrapper";
import SymbolsDetails from "./symbolsDetails";

const ExchangeRatesOverTime = () => {
  const [exchangeRatesOverTime, setExchangeRatesOverTime] = useState({});
  const [startDate, setStartDate] = useState("2024-02-03");
  const [endDate, setEndDate] = useState("2024-02-04");
  const [baseCurrency, setBaseCurrency] = useState("USD");

  useEffect(() => {
    const fetchExchangeRatesOverTime = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;
      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/timeframe?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}&base=${baseCurrency}`
        );
        if (response.data.success) {
          setExchangeRatesOverTime(response.data.rates);
        } else {
          setExchangeRatesOverTime({});
        }
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

        {/*  Exchange rates over time */}
        {Object.entries(exchangeRatesOverTime).length > 0 ? (
          <div className="mt-4">
            {Object.entries(exchangeRatesOverTime)?.map(([date, data]) => (
              <div key={date}>
                <h3 className="font-semibold text-lg">{date} :-</h3>
                <div>
                  <SymbolsDetails
                    h1={"Currency Name"}
                    h2={"Currency Rate"}
                    data={data}
                    className={"mt-2 mb-4 !h-auto max-h-[500px]"}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center mt-6">{`Exchange rates for '${startDate}' to '${endDate}' not found!`}</p>
        )}
      </Wrapper>
    </div>
  );
};

export default ExchangeRatesOverTime;
