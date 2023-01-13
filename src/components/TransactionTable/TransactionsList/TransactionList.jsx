import PropTypes from 'prop-types';
import css from '../TransactionTable.module.css';

const TransactionList = ({props}) => {
    return <tbody>
        {props.map(prop => {
          return (
              <tr className={css.row} key={prop.id}>
                <td className={css.part}>{prop.type}</td>
                <td className={css.part}>{prop.amount}</td>
                <td className={css.part}>{prop.currency}</td>
              </tr>
            );
        })}
    </tbody>;
}

TransactionList.propTypes = {
  trans: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionList;