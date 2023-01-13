import PropTypes from 'prop-types'
import { StatsSpanCss } from './StatsElement.styled';

const StatsElement = ({ label, percentage }) => {
    return (
      <>
            <StatsSpanCss>{label}</StatsSpanCss>
            <StatsSpanCss>{percentage}%</StatsSpanCss>
      </>
    );
}
StatsElement.propTypes = { 
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default StatsElement;
