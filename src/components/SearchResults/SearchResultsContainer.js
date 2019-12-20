import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {searchCards} from '../../redux/CardsRedux.js';

const mapStateToProps = (state, props) => {
  console.log('Props: ', props.match.params.searchString);
  return {
    filteredCards: searchCards(state, props.match.params.searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);