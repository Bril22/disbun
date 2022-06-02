import React from 'react';
import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: 'full',
  height: '200px',
};

const center = {
  lat: -6.916955,
  lng: 107.609147,
};

function MyMap() {
  return (
    <LoadScript
      id="google-map-script"
      googleMapsApiKey="AIzaSyDUNfdAhSGykrwNgnI-tEsWETdRAOHUdwc"
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
