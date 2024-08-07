import currencies, { type  Currency as ICurrency } from "../data/currencies"
import Currency from "./Currency"

export default function Currencies({ onSelected, selectedCurrency }: Props) {
  
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Devise</th>
            <th>Taux</th>
          </tr>
        </thead>

        <tbody>
          {CurrenciesList()}
        </tbody>
      </table>
    </section>
  );

  function CurrenciesList() {
    return currencies.map(currency => 
      <Currency
        currency={currency}
        selectedCurrency={selectedCurrency}
        onSelected={() => onSelected(currency)}
        key={currency.code}
      />
    );
  }
}

interface Props {
  onSelected: (currency: ICurrency) => void;
  selectedCurrency?: ICurrency;
}
