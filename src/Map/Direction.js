import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
// import {API_KEY} from './config';
const containerStyle = {
    width: '400px',
    height: '400px',
    marginTop: '100px'
};

const center = {
    lat: 23.71573,
    lng: 90.38395
};

function Direction({origin, destination}) {
    const [directionsResponse, setDirectionsResponse] = useState(null);
    return (
        <LoadScript

            googleMapsApiKey="YOUR_API_KEY"
        >
            <h1>Direction</h1>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                
                {
                    origin !== '' && destination !== '' && <DirectionsService
                    options={{ 
                        destination: destination,
                        origin: origin, 
                        travelMode: 'DRIVING' 
                        
                    }}
                    callback={res => {
                        if(res !== null) {
                            setDirectionsResponse(res);
                        }
                    }}
                />


                }

                {
                    directionsResponse &&  <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionsResponse
                    }}
                    
                  />
                }

            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)