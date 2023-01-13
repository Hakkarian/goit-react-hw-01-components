import PropTypes from "prop-types";
import css from "../TransactionHistory.module.css";

const TransactionList = ({ items }) => {
  return (
    <tbody>
      {items.map((item) => {
        return (
          <tr className={css.row} key={item.id}>
            <td className={css.part}>{item.type}</td>
            <td className={css.part}>{item.amount}</td>
            <td className={css.part}>{item.currency}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionList;
