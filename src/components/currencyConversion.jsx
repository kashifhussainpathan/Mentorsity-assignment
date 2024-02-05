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
      try {
        const response = await axios.get(
          `https://api.forexrateapi.com/v1/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
        );
        setConvertedAmount(response.data.result);
      } catch (error) {
        console.error("Error converting currency:", error);
      }
    };

    // convertCurrency();
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
          SelectCurrency={fromCurrency}
          onChange={handleChangeFromCurrency}
          className={"mb-4"}
        />

        {/* To Curency */}
        <SelectCurrency
          label={"To Currency:"}
          SelectCurrency={toCurrency}
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

        {convertedAmount !== null && (
          <p className="text-center mt-6 text-2xl">{`Converted Amount: ${convertedAmount}`}</p>
        )}
      </Wrapper>
    </div>
  );
};

export default CurrencyConversion;
