import React, { PropTypes } from 'react';

export const PlaceInfoWindow = ({
  title,
  telephone,
  fax,
}) => (
  <div>
    <h1>{title}</h1>
    <br />
    <div>
      tel: {telephone}
    </div>
    <div>
      fax: {fax}
    </div>
  </div>
);
PlaceInfoWindow.propTypes = {
  title: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  fax: PropTypes.string.isRequired,
};
