import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./@ui/heading";
import Wrapper from "./@ui/wrapper";
import SelectDate from "./selectDate";
import SelectCurrency from "./selectCurrency";

const CurrencyChangeParameters = () => {
  const [endDate, setEndDate] = useState("2024-02-04");
  const [startDate, setStartDate] = useState("2024-02-03");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [changeParameters, setChangeParameters] = useState({});

  useEffect(() => {
    const fetchChangeParameters = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;
      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/change?api_key=${API_KEY}&base=${baseCurrency}&start_date=${startDate}&end_date=${endDate}`
        );
        if (response.data.success) {
          setChangeParameters(response.data.rates[baseCurrency]);
        } else {
          setChangeParameters({});
        }
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
        {Object.entries(changeParameters).length > 0 ? (
          <div className="mt-4">
            {Object.entries(changeParameters)?.map(([per, data]) => (
              <div
                className="grid grid-cols-2 border border-gray-700 py-2 px-10  gap-[300px]"
                key={per}
              >
                <div>{per}</div>
                <div>
                  {data} {per === "change_pct" ? "%" : ""}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center mt-6">{`Change percentage for '${startDate}' to '${endDate}' not found!`}</p>
        )}
      </Wrapper>
    </div>
  );
};

export default CurrencyChangeParameters;
