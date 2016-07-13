//  import modules
import React, { Component, PropTypes } from 'react';
import Time from 'react-time';
//  import styles
import styles from './home.css';

export class LatestView extends Component {
  setImage() {
    if (this.props.number === 1) {
      return (
        <a href="#">
          <img src={this.props.image} alt="empty" />
        </a>
      );
    }
    return (<span></span>);
  }

  render() {
    return (
      <article className={styles.latestItem}>
        <header>
          {this.setImage()}
          <h1><a href="#">{this.props.title}</a></h1>
        </header>
        <content>
          <div className={styles.date}>
            <Time value={this.props.created_at * 1000} format="DD MMM YYYY" />
          </div>
          <p>
            {this.props.content}
          </p>
          <div className={styles.readMore}>
            <a href="#">Read more</a>
          </div>
        </content>
      </article>
    );
  }
}

LatestView.propTypes = {
  number: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};
