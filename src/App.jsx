import CurrencyChangeParameters from "./components/currencyChangeParameters";
import CurrencyConversion from "./components/currencyConversion";
import ExchangeRatesOverTime from "./components/exchangeRatesOverTime";
import Header from "./components/header";
import HistoricalRates from "./components/historicalRates";
import RealTimeExchangeRates from "./components/realTimeExchangeRates";
import Symbols from "./components/symbols";

function App() {
  return (
    <main className="h-screen w-full overflow-scroll overflow-x-hidden">
      {/* Background Container */}
      <div
        className="bg-[url('./assets/bg.png')] bg-no-repeat bg-cover text-gray-50 h-full w-full fixed"
        style={{ zIndex: -1 }}
      ></div>

      {/* Content Container */}
      <div className="h-full text-gray-50 px-28">
        <Header />
        <Symbols />

        <hr />

        <RealTimeExchangeRates />

        <hr />

        <HistoricalRates />

        <hr />

        <CurrencyConversion />

        <hr />

        <ExchangeRatesOverTime />

        <hr />

        <CurrencyChangeParameters />

        <hr />
      </div>
    </main>
  );
}

export default App;
