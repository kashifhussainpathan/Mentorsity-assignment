import { createContext, useContext, useState } from "react";

export const SymbolsContext = createContext();

export const useSymbols = () => {
  const context = useContext(SymbolsContext);

  if (!context) {
    throw new Error("useSymbols must be used inside SymbolsProvider");
  }

  return context;
};

export const SymbolsProvider = ({ children }) => {
  const [symbols, setSymbols] = useState(
    JSON.parse(localStorage.getItem("symbols"))
  );

  const handleSetSymbols = (symbols) => {
    setSymbols(symbols);
  };

  const value = {
    symbols,
    handleSetSymbols,
  };

  return (
    <SymbolsContext.Provider value={value}>{children}</SymbolsContext.Provider>
  );
};
