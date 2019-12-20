import React from 'react';
import Container from '../Container/Container';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';

class SearchResults extends React.Component {
  static propTypes = {
    filteredCards: PropTypes.array,
  }

  render() {
    return (
      <Container>
        {this.props.filteredCards.map(card => (
          <Link to={`/list/${card.listId}`} className={styles.link} key={card.id}>
            <div className={styles.component}>
              <div className={styles.text}>
                <h2 className={styles.title}>{card.title}</h2>
                <div className={styles.description}>
                  {card.columnTitle}, <span className={styles.strong}>{card.listTitle}</span>
                </div>
              </div>
            </div> 
          </Link>
        ))}
      </Container>
    );
  }
}

export default SearchResults;