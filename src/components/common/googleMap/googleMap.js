import React, { Component, PropTypes } from 'react';
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from 'react-google-maps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PlaceInfoWindow } from './placeInfoWindow';
//  import actions
import {
  showInfoWindowAction,
  closeInfoWindowAction,
} from '../../../redux/actions/index';
class Map extends Component {
  renderInfoWindow(marker, index) {
    const {
      show,
      title,
      fax,
      telephone,
    } = marker.infoWindow;
    if (!show) {
      return <span></span>;
    }
    return (
      <InfoWindow
        onCloseclick={() => this.props.closeInfoWindowAction(index)}
      >
        <PlaceInfoWindow
          title={title}
          fax={fax}
          telephone={telephone}
        />
      </InfoWindow>
    );
  }

  render() {
    const {
      isFetching,
      post,
    } = this.props.postData;
    if (isFetching) {
      return <noscript />;
    }

    const {
      sectionStyle,
      containerStyle,
      defaultZoom,
    } = this.props;
    const markers = post.googleMap.markers;
    return (
      <section style={sectionStyle}>
        <hr />
        <h2>Find us on the map</h2>
        <GoogleMapLoader
          query={{ libraries: 'geometry,drawing,places,visualization' }}
          containerElement={
            <div
              {...this.props}
              style={containerStyle}
            />
          }
          googleMapElement={
            <GoogleMap
              defaultZoom={defaultZoom}
              defaultCenter={markers[0].position}
            >
              {
                markers.map((marker, index) => (
                  <Marker
                    {...marker}
                    onClick={() => this.props.showInfoWindowAction(index)}
                    key={index}
                  >
                    {this.renderInfoWindow(marker, index)}
                  </Marker>
                ))
              }
            </GoogleMap>
          }
        />
      </section>
    );
  }
}
Map.propTypes = {
  postData: PropTypes.object,
  defaultCenter: PropTypes.object,
  showInfoWindowAction: PropTypes.func,
  closeInfoWindowAction: PropTypes.func,
  sectionStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  defaultZoom: PropTypes.number,
};

Map.defaultProps = {
  sectionStyle: {
    height: '300px',
    width: '100%',
    marginBottom: '30px',
  },
  containerStyle: {
    height: '100%',
    width: '100%',
  },
  defaultZoom: 5,
};

export default connect(
  state => ({
    postData: state.posts.data,
  }),
  dispatch => bindActionCreators(
    {
      showInfoWindowAction,
      closeInfoWindowAction,
    }, dispatch)
)(Map);
