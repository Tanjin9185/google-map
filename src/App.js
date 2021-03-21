import './App.css';
import Map from './Map/Map';
import Direction from './Map/Direction';
import { useState } from 'react';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <div>
      <Map></Map>
      <input type="text" placeholder="Starting From" onBlur={e => setOrigin(e.target.value)}/>
      <br/> <br/>
      <input type="text" placeholder="Going To" onBlur={e => setDestination(e.target.value)}/>

      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
