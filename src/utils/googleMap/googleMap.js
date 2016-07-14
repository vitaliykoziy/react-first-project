import React, { PropTypes } from 'react';
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from 'react-google-maps';
import { PlaceInfoWindow } from './placeInfoWindow';
export const Map = (props) => (
  <section style={props.sectionStyle}>
    <GoogleMapLoader
      query={{ libraries: "geometry,drawing,places,visualization" }}
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
                <Marker {...marker} >
                  <InfoWindow>
                    <PlaceInfoWindow />
                  </InfoWindow>
                </Marker>
              )
            )
          }
        </GoogleMap>
      }
    />
  </section>
);
Map.propTypes = {
  markers: PropTypes.array,
  sectionStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  defaultZoom: PropTypes.number,
  defaultCenter: PropTypes.object,
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
