import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

const FAQ = props => (
  <Container>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <Hero titleText={props.imageTitle} src = {props.image} />
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageTitle: PropTypes.string,
};

export default FAQ;