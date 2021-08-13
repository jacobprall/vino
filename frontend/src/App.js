
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [wines, setWines] = useState([]);

  const handleClick = async () => {
    const wineList = axios.get('localhost:8080/wines/1');
    setWines([wineList]);
  }
  return (
    <div className="App">
      <div>
        <button onClick={() => handleClick()}>Get all wines</button>
        {
          wines.map((wine) => {
            return (
              <div>{wine}</div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
