import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        sourceImage: PropTypes.node,
        children: PropTypes.node,
      }

      static defaultProps = {
        children: <p>I can do all the things!!!</p>,
      }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} src={this.props.sourceImage}>
          
        </Hero>

        <div className={styles.description}>
          {this.props.children}
        </div>

        <div className={styles.columns}>
            <Column title='Title 1' />
            <Column title='Title 2' />
            <Column title='Title 3' />
        </div>
      </section>
    )
  }
}

export default List;