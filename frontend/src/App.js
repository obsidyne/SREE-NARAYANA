import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Ayurmithra from './components/Ayurmithra';
import Hero from './components/Hero';
import './App.css'


function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/data')
      .then(response => setData(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <Hero/>
     
    </div>
  );
}

export default App;

