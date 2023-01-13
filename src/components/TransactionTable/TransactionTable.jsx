import PropTypes from 'prop-types';
import trans from "jsons/transactions.json";
import TransactionsList from './TransactionsList';
import css from './TransactionTable.module.css';


const TransactionTable = props => {
    return (<section>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={`${css.part} ${css.head}`}>Type</th>
            <th className={`${css.part} ${css.head}`}>Amount</th>
            <th className={`${css.part} ${css.head}`}>Currency</th>
          </tr>
        </thead>
        <TransactionsList props={trans} />
      </table>
      </section>
    );
}

export default TransactionTable;

TransactionTable.propTypes = {
    trans: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }))

}