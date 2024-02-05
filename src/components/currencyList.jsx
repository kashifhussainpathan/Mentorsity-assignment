import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyList = () => {
  const [symbols, setSymbols] = useState({});

  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        const response = await axios.get(
          "https://api.forexrateapi.com/v1/symbols"
        );
        setSymbols(response.data.symbols);
      } catch (error) {
        console.error("Error fetching symbols:", error);
      }
    };

    fetchSymbols();
  }, []);

  return (
    <div>
      <h2>Supported Currencies</h2>
      <ul>
        {Object.entries(symbols).map(([currencyCode, currencyName]) => (
          <li key={currencyCode}>{`${currencyCode} - ${currencyName}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyList;
