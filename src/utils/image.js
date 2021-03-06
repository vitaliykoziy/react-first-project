/* eslint global-require: 0 */
/* eslint prefer-template: 0 */

import React, { Component, PropTypes } from 'react';

export class Image extends Component {

  getSrc() {
    try {
      return require('../../static/images/' + this.props.src);
    } catch (exc) {
      return '';
    }
  }

  render() {
    return <img src={this.getSrc()} alt={this.props.alt} />;
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
};

