import PropTypes from "prop-types";

import StatsElement from "./StatsElement";
import {
  TitleCss,
  StatsListCss,
  StatsLiCss,
  StatsSectionCss,
} from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <StatsSectionCss>
      <TitleCss>{title}</TitleCss>
      <StatsListCss>
        {stats.map((item) => (
          <StatsLiCss key={item.id}>
            <StatsElement label={item.label} percentage={item.percentage} />
          </StatsLiCss>
        ))}
      </StatsListCss>
    </StatsSectionCss>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
