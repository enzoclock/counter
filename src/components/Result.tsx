import { Currency } from "../data/currencies";

export default function Result({ currency }: Props) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Code</th>
            <th>Taux</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currency.description}</td>
            <td>{currency.code}</td>
            <td>{currency.rate}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

interface Props {
  currency: Currency;
}
