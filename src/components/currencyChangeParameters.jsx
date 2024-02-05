import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./@ui/heading";
import Wrapper from "./@ui/wrapper";
import SelectDate from "./selectDate";
import SelectCurrency from "./selectCurrency";

const CurrencyChangeParameters = () => {
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [changeParameters, setChangeParameters] = useState({});

  useEffect(() => {
    const fetchChangeParameters = async () => {
      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/change?base=${baseCurrency}&start_date=${startDate}&end_date=${endDate}`
        );
        setChangeParameters(response.data.rates[baseCurrency]);
      } catch (error) {
        console.error("Error fetching currency change parameters:", error);
      }
    };

    if (baseCurrency && startDate && endDate) {
      fetchChangeParameters();
    }
  }, [baseCurrency, startDate, endDate]);

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
      <Heading>CURRENCY CHANGE ANALYSIS</Heading>

      <Wrapper>
        <SelectCurrency
          baseCurrency={baseCurrency}
          label={"Select Base Currency:"}
          onChange={handleSelectCurrency}
          className={"mb-4"}
        />

        <SelectDate
          label={"Start Date:"}
          selectedDate={startDate}
          onChange={handleSelectStartDate}
        />

        <SelectDate
          label={"End Date:"}
          selectedDate={endDate}
          onChange={handleSelectEndDate}
          className={"mb-0"}
        />
        {/* Display the currency change parameters */}
      </Wrapper>
    </div>
  );
};

export default CurrencyChangeParameters;
