import PropTypes from "prop-types";
import { Table } from "./TransactionHistory.styled";
import { TBody } from "./TransactionHistory.styled";
import { TCell } from "./TransactionHistory.styled";
import { TRaw } from "./TransactionHistory.styled";
import { THeadCell } from "./TransactionHistory.styled";
import { THead } from "./TransactionHistory.styled";

export default function TransactionHistory({ transactions }) {
  return (
    <Table>
      <THead>
        <tr>
          <THeadCell>Type</THeadCell>
          <THeadCell>Amount</THeadCell>
          <THeadCell>Currency</THeadCell>
        </tr>
      </THead>

      <TBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TRaw key={id}>
            <TCell>{type}</TCell>
            <TCell>{amount}</TCell>
            <TCell>{currency}</TCell>
          </TRaw>
        ))}
      </TBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
