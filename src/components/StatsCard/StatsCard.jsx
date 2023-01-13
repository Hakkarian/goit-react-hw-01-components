import PropTypes from 'prop-types';

import StatsElement from './StatsElement';
import { TitleCss, StatsCardCss, StatsListCss, StatsLiCss, StatsSectionCss } from "./StatsCard.styled";

import { GetColor } from './StatsElement/StatsElement.styled';


const StatsCard = ({ title, items }) => {
  return (<StatsSectionCss>
    <TitleCss>{title}</TitleCss>
    <a href='/'>
      <StatsListCss>
        {items.map((item) => (
          <StatsLiCss key={item.id} >
            <StatsElement
              label={item.label}
              percentage={item.percentage}
            />
          </StatsLiCss>
        ))}
      </StatsListCss>
      </a>
    </StatsSectionCss>
  );
};

StatsCard.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatsCard;