import type { Currency as ICurrency } from "../data/currencies";
import "./Currency.scss";

export default function Currency({ currency, selectedCurrency, onSelected }: Props) {

  const isSelected = selectedCurrency?.code === currency.code ? " selected" : "";

  return (
    <>
      <tr onClick={onSelected} className={`currency ${isSelected}`} >
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
  currency: ICurrency;
  selectedCurrency?: ICurrency;
  onSelected: () => void;
}
