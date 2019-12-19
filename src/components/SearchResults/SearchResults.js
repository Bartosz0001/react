import React from 'react';
import Container from '../Container/Container';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchResults extends React.Component {
  static propTypes = {
    filteredCards: PropTypes.array,
  }

  render() {
    console.log(this.props.filteredCards);
    return (
      <Container>
        <Link to={`/list/${this.props.filteredCards}`}>
          {this.props.filteredCards}
        </Link>
      </Container>
    );
  }
}

export default SearchResults;