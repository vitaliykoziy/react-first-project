import React, {Component, PropTypes} from 'react';
import {GoogleMapLoader, GoogleMap, InfoWindow, Marker} from 'react-google-maps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {PlaceInfoWindow} from './placeInfoWindow';
//  import actions
import { showInfoWindowAction, closeInfoWindowAction } from '../../../redux/actions/index';
class Map extends Component {
    showInfoWindow() {
        if(!this.props.markerInfoWindow.show){
            return <span></span>;
        }
        return (
            <InfoWindow
              onCloseclick={() => this.handleClickInfoWindow()}
            >
                <PlaceInfoWindow />
            </InfoWindow>
        );
    }
    handleClickMarker(){
        this.props.showInfoWindowAction();
    }
    handleClickInfoWindow() {
      this.props.closeInfoWindowAction();
    }

    render() {
        const props = this.props;
        return (
            <section style={props.sectionStyle}>
                <GoogleMapLoader
                    query={{libraries: "geometry,drawing,places,visualization"}}
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
                          props.markers.map((marker) => (
                                  <Marker
                                      {...marker}
                                      onClick={() => this.handleClickMarker()}
                                  >
                                    {this.showInfoWindow()}
                                  </Marker>
                              )
                          )
                        }
                      </GoogleMap>
                    }
                />
            </section>
        )
    }
}
Map.propTypes = {
    markers: PropTypes.array,
    sectionStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    defaultZoom: PropTypes.number,
    defaultCenter: PropTypes.object,
    showInfoWindowAction: PropTypes.func,
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
    defaultZoom: 12,
};

export default connect(
  state => ({
    markerInfoWindow: state.googleMap.infoWindow,
  }),
  dispatch => bindActionCreators(
    {
      showInfoWindowAction,
      closeInfoWindowAction
    }, dispatch)
)(Map);
