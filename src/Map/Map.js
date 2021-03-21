import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import {API_KEY} from './config';
const containerStyle = {
  width: '400px',
  height: '400px',
 
};

const center = {
  lat: 23.71573,
  lng: 90.38395
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker      
      position={center}
    />
    
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)