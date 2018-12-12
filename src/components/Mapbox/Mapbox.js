import React, { Component } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import { _latitude, _longitude } from '../../../config/website';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibHVjYXN3b2oiLCJhIjoiY2l5Nmg4cWU1MDA0ejMzcDJtNHJmZzJkcyJ9.WhcEdTYQH6sSw2pm0RSP9Q';

const Pin = ({ size }) => (
  <svg
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `translate(${-size / 2}px,${-size}px)` }}
  >
    <g>
      <path
        stroke="null"
        id="svg_2"
        fill="#e74c3c"
        d="m12,0.73684c-3.90477,0 -7.07018,3.1209 -7.07018,6.97076c0,1.23818 0.33725,2.3962 0.91135,3.40348c0.09536,0.16729 0.19531,0.33198 0.30384,0.49056l5.85499,10.04748l5.85499,-10.04748c0.09014,-0.13157 0.16792,-0.27099 0.24834,-0.40866l0.05568,-0.0819c0.57357,-1.00728 0.91117,-2.1653 0.91117,-3.40348c0,-3.84986 -3.16567,-6.97076 -7.07018,-6.97076zm0,3.48538c1.95225,0 3.53509,1.56049 3.53509,3.48538c0,1.9248 -1.58284,3.48538 -3.53509,3.48538c-1.95234,0 -3.53509,-1.56058 -3.53509,-3.48538c0,-1.92489 1.58275,-3.48538 3.53509,-3.48538z"
      />
      <path
        stroke="null"
        id="svg_3"
        fill="#c0392b"
        d="m12,3.31579c-2.49011,0 -4.50877,2.01867 -4.50877,4.50877c0,2.48975 2.01866,4.50877 4.50877,4.50877c2.48974,0 4.50877,-2.01902 4.50877,-4.50877c0,-2.4901 -2.01903,-4.50877 -4.50877,-4.50877zm0,1.80351c1.49421,0 2.70526,1.21115 2.70526,2.70526s-1.21105,2.70527 -2.70526,2.70527s-2.70526,-1.21115 -2.70526,-2.70527s1.21105,-2.70526 2.70526,-2.70526z"
      />
    </g>
  </svg>
);

export default class Mapbox extends Component {
  state = {
    styleId: 'dark',
    viewport: {
      latitude: _latitude,
      longitude: _longitude,
      zoom: 15
    }
  };

  onButtonClick = () => {
    this.setState(state => {
      const newStyleId = state.styleId === 'light' ? 'dark' : 'light';
      return { ...state, styleId: newStyleId };
    });
  };

  render() {
    const styles = {
      light: 'mapbox://styles/mapbox/light-v9',
      dark: 'mapbox://styles/mapbox/dark-v9'
    };
    const { viewport, styleId } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        width="100%"
        height="100%"
        maxZoom={17.5}
        scrollZoom={false}
        mapStyle={styles[styleId]}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker latitude={_latitude} longitude={_longitude}>
          <Pin size="40" />
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
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            paddingTop: '10px',
            paddingLeft: '10px'
          }}
        >
          <button onClick={this.onButtonClick}>light/dark</button>
        </div>
      </ReactMapGL>
    );
  }
}
