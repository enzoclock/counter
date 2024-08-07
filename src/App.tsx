import { useState } from "react";
import Currencies from "./components/Currencies";
import Header from "./components/Header";
import Result from "./components/Result";
import type { Currency } from "./data/currencies";

export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>();

  return (
    <>
      <Header />

      <main>
        {selectedCurrency && <Result currency={selectedCurrency}/>}
  
        <Currencies onSelected={(currency: Currency) => setSelectedCurrency(currency)}/>
      </main>
    </>
  );
}

