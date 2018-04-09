import React from 'react';
import PropTypes from 'prop-types';
import { CardDeck } from 'reactstrap';
import CardSingle from './CardSingle';

const CardsList = ({ data }) => (
  <CardDeck>
    {data.map(card => <CardSingle key={Math.random(0, 100)} card={card} />)}
  </CardDeck>
);

export default CardsList;

CardsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
