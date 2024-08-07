import type { Currency } from "../data/currencies";
import "./Currency.scss";

export default function Currency({ currency, onSelected }: Props) {
  return (
    <>
      <tr onClick={onSelected} className="currency">
        <td>{currency.description}</td>
        <td>{round(currency.rate)}</td>
      </tr>
    </>
  );

  function round(rate: number) {
    return Math.round(rate * 100) / 100;
  }
  
}

interface Props {
  currency: Currency;
  onSelected: () => void;
}
