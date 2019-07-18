import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cards from './components/cards'
import "./App.css";

function App() {

  const [data , setData] = useState([]);
  useEffect (() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
    .then(res => {
      setData(res.data)
      console.log("response", res.data)
    })
    .catch(err => {
      console.log("an error occured", err)
    })
  }, [])
  return (
    <div className="App">
      <Cards data={data}/>
    </div>
  );
}

export default App;
