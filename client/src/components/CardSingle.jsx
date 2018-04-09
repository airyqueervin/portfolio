import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

const SingleCard = ({ card }) => (
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBody>
      <CardTitle>{ card.Title }</CardTitle>
      <CardSubtitle>{ card.Desc }</CardSubtitle>
      <CardText>{ card.Tasks.map(task => <li key={Math.random(0, 100)}>{task}</li>)}</CardText>
      <Button onClick={() => window.open(card.URL)}>Visit The App</Button>
    </CardBody>
  </Card>
);

export default SingleCard;

Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string,
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

SingleCard.propTypes = {
  card: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]).isRequired,
};
