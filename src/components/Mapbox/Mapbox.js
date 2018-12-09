import React, { Component } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import { _latitude, _longitude } from '../../../config/website';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibHVjYXN3b2oiLCJhIjoiY2l5Nmg4cWU1MDA0ejMzcDJtNHJmZzJkcyJ9.WhcEdTYQH6sSw2pm0RSP9Q';

export default class Mapbox extends Component {
  state = {
    viewport: {
      latitude: _latitude,
      longitude: _longitude,
      zoom: 15.5
    }
  };

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        width="100%"
        height="100%"
        scrollZoom={false}
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          latitude={_latitude}
          longitude={_longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>Zoom je - {this.state.viewport.zoom}</div>
        </Marker>
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            paddingBottom: '40px',
            paddingRight: '10px'
          }}
        >
          <NavigationControl
            showCompass={false}
            onViewportChange={viewport => this.setState({ viewport })}
          />
        </div>
      </ReactMapGL>
    );
  }
}
