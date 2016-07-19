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
  showInfoWindow(marker, index) {
    const { show, title, fax, telephone } = marker.infoWindow;
    if (!show) {
      return <span></span>;
    }
    return (
      <InfoWindow
        onCloseclick={() => this.handleClickInfoWindow(index)}
      >
        <PlaceInfoWindow
          title={title}
          fax={fax}
          telephone={telephone}
        />
      </InfoWindow>
    );
  }

  handleClickMarker(index) {
    this.props.showInfoWindowAction(index);
  }

  handleClickInfoWindow(index) {
    this.props.closeInfoWindowAction(index);
  }

  render() {
    const props = this.props;
    return (
      <section style={props.sectionStyle}>
        <GoogleMapLoader
          query={{ libraries: 'geometry,drawing,places,visualization' }}
          containerElement={
            <div
              {...props}
              style={props.containerStyle}
            />
          }
          googleMapElement={
            <GoogleMap
              defaultZoom={props.defaultZoom}
              defaultCenter={props.defaultCenter}
            >
              {
                props.markers.map((marker, index) => (
                  <Marker
                    {...marker}
                    onClick={() => this.handleClickMarker(index)}
                    key={index}
                  >
                    {this.showInfoWindow(marker, index)}
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
  markers: PropTypes.array,
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
  },
  containerStyle: {
    height: '100%',
    width: '100%',
  },
  defaultZoom: 5,
};

export default connect(
  state => ({
    kokos: state.posts.data,
  }),
  dispatch => bindActionCreators(
    {
      showInfoWindowAction,
      closeInfoWindowAction,
    }, dispatch)
)(Map);
