import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (
  <div className={styles.component}>
    <h4>{props.title}</h4>
  </div>
);

Card.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Card;