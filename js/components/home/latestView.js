import React, { Component, PropTypes } from 'react';
import styles from '../../../css/app.css';

export class LatestView extends Component {
  setImage() {
    if (this.props.number === 1) {
      return (
        <a href="#">
          <img src="http://www.mybusiness.com.au/images/technology/debbie-mayo-smith.jpg" alt="empty" />
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
          <h1><a href="#">Are you wasting your time with Facebook?</a></h1>
        </header>
        <content>
          <div className={styles.date}>27 Jun 2016</div>
          <p>
            By Debbie Mayo-Smith / 27 Jun 2016
            It seems the whole marketing world is screaming “Facebook! Facebook!
            Facebook!” You’ll hear it everywhere: “You must be on Facebook ...
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
};
