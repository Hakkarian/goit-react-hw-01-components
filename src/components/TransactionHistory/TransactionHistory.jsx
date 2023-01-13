import PropTypes from "prop-types";
import TransactionsList from "./TransactionsList";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <section>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={`${css.part} ${css.head}`}>Type</th>
            <th className={`${css.part} ${css.head}`}>Amount</th>
            <th className={`${css.part} ${css.head}`}>Currency</th>
          </tr>
        </thead>
        <TransactionsList items={items} />
      </table>
    </section>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
