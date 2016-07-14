//  import modules
import React, { Component, PropTypes } from 'react';
import Time from 'react-time';
import { Link } from 'react-router';
//  import styles
import styles from './home.css';

export class LatestView extends Component {
  setImage() {
    if (this.props.number === 1) {
      return (
        <Link to={`/post/${this.props.id}`}>
          <img src={this.props.image} alt="empty" />
        </Link>
      );
    }
    return (<span></span>);
  }

  render() {
    return (
      <article className={styles.latestItem}>
        <header>
          {this.setImage()}
          <h1><Link to={`/post/${this.props.id}`}>{this.props.title}</Link></h1>
        </header>
        <content>
          <div className={styles.date}>
            <Time value={this.props.created_at * 1000} format="DD MMM YYYY" />
          </div>
          <p>
            {this.props.content}
          </p>
          <div className={styles.readMore}>
            <Link to={`/post/${this.props.id}`}>Read more</Link>
          </div>
        </content>
      </article>
    );
  }
}

LatestView.propTypes = {
  number: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};
