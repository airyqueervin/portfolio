import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import CardsList from './CardsList';

const App = ({ data }) => (
  <div>
    <Container fluid>
      <NavBar />
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>This is some text</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <CardsList data={data} />
    </Container>
  </div>
);

export default App;

Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string,
};

Container.propTypes = {
  fluid: PropTypes.bool,
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
