import React from 'react';
import { Container, Jumbotron, Button, CardImg, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
// import NavBar from './NavBar';
import CardsList from './CardsList';

const App = ({ data }) => (
  <div id="top-space">
    <Container fluid>
      {/* <NavBar /> */}
      <Jumbotron>
        {/* <Row>
          <Col xs="6">
            <h1 className="display-3">Hello, I am Airyque!</h1> 
          </Col>
          <Col xs="6">
            <CardImg style={ { width:'50%', borderRadius:'50%' } } src="https://s3-us-west-2.amazonaws.com/ae-portfolio-screenshots/ProfPic.png" className="img-responsive" alt="Prof Pic" />
          </Col>
        </Row> */}
        <h1 className="display-3">Hello, I am Airyque!</h1>
        <p className="lead">This is the hub of most of my projects.</p>
        <hr className="my-2" />
        <p>I am really excited for an opportunity that enables me to utilize my technical strengths as a software engineer and my creative strengths, gained from working as a cinematic artist, to further innovate the industry and contribute to a mission that i believe in. I'd like to continue working with cutting edge technologies, like React. I live to see my work come to life when I complete projects.</p>
        {/* <p className="lead">
          <Button color="primary">Learn More</Button>
        </p> */}
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
