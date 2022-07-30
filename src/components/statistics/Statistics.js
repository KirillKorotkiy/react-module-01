import PropTypes from 'prop-types';
import getRandomHexColor from './randome-color'
import { StatisticsCard } from './Statistics.styled';
import { Title } from './Statistics.styled';
import { List } from './Statistics.styled';
import { Item } from './Statistics.styled';
import { Label} from './Statistics.styled';
import { Percentage } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
   <StatisticsCard>{title?  <Title>{title}</Title> : <Title>UPLOAD STATS</Title> }
    <List>
      {stats.map(({id, label, percentage}) =>
        <Item key={id} style={{backgroundColor: getRandomHexColor()}}> 
          <Label>{label} </Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      )}
    </List>
  </StatisticsCard>
  )
}

Statistics.propTypes = {
 title: PropTypes.string,
 stats: PropTypes.arrayOf(PropTypes.exact({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
})),
}


