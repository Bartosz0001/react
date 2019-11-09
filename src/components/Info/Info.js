import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

const Info = props => (
  <Container>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <Hero titleText={props.imageTitle} src = {props.image} />
  </Container>
);

Info.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageTitle: PropTypes.string,
};

export default Info;