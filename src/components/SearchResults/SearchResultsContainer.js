import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {searchCards} from '../../redux/CardsRedux.js';

const mapStateToProps = (state) => {
  const cards = state.cards;
  const cardParams = cards[0] || {};
  return {
    ...cardParams,
    filteredCards: searchCards(state),
  };
};

export default connect(mapStateToProps)(SearchResults);