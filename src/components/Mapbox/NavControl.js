import React from 'react';
import { NavigationControl } from 'react-map-gl';
import screenFull from '../../img/screen-full.svg';
import screenNormal from '../../img/screen-normal.svg';

export default ({ styleChange, onViewportChange }) => (
  <>
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
        onViewportChange={onViewportChange}
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
      <button onClick={styleChange}>light/dark</button>
    </div>
    <div
      className="icon"
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        paddingTop: '25px',
        paddingRight: '15px'
      }}
    >
      <button>
        <span className="icon">
          <img src={screenFull} alt="fullScreen" />
        </span>
      </button>
    </div>
  </>
);
