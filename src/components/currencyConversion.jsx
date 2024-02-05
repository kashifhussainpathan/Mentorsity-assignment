import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./@ui/heading";
import Wrapper from "./@ui/wrapper";
import SelectCurrency from "./selectCurrency";

const CurrencyConversion = () => {
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(100);

  useEffect(() => {
    const convertCurrency = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;

      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/convert?api_key=${API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
        );
        if (response.data.success) {
          setConvertedAmount(response.data.result);
        } else {
          setConvertedAmount(null);
        }
      } catch (error) {
        console.error("Error converting currency:", error);
      }
    };

    convertCurrency();
  }, [fromCurrency, toCurrency, amount]);

  const handleChangeFromCurrency = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleChangeToCurrency = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="my-24">
      <Heading>CURRENCY CONVERSION</Heading>
      <Wrapper>
        {/* From Currency */}
        <SelectCurrency
          label={"From Currency:"}
          baseCurrency={fromCurrency}
          onChange={handleChangeFromCurrency}
          className={"mb-4"}
        />

        {/* To Curency */}
        <SelectCurrency
          label={"To Currency:"}
          baseCurrency={toCurrency}
          onChange={handleChangeToCurrency}
          className={"mb-4"}
        />

        <div className="w-full flex justify-center gap-2 items-center">
          <label className="font-medium text-xl treking-wider text-center ">
            Amount:
          </label>
          <input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            className="text-gray-800 cursor-pointer pl-2"
          />
        </div>

        {/* Conversion Details */}
        {convertedAmount && (
          <div className={`text-left w-full  overflow-y-scroll pr-4 mt-6`}>
            <div className="grid grid-cols-2 border py-2 px-10 font-semibold rounded-md gap-[300px]">
              <div>From {fromCurrency}</div>
              <div>To {toCurrency}</div>
            </div>

            <div className="grid grid-cols-2 border border-gray-700 py-2 px-10  gap-[300px]">
              <div>{amount}</div>
              <div>{convertedAmount}</div>
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default CurrencyConversion;
