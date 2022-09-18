import LandingPage from './LandingPage';
import './App.css';
import GifPage from './GifPage';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState(<GifPage />);

  useEffect(() => {
    let num = 3;
    setInterval(() => {
      num -= 1;
      if(num === 0) {
        setState(<LandingPage />)
      }
    }, 1000)
  })

  return (
    <div className="App">
      {state}
    </div>
  );
}

export default App;
