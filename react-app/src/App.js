import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GamePage from './components/GamePage.component';
import Welcome from './components/Welcome.component';
import Link from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function App() {
  const history = useHistory();
  
  const [currentTime, setCurrentTime] = useState(0);
  const [gatesSoFar, setGatesSoFar] = useState([]);

  useEffect(() => {
    const options = {
      "gate_type": "sample"
    }
  
    axios.post('http://localhost:5000/gate', {"gate_type": "sample"})
    .then(function(response) {
      console.log(response);
    })

  }, []);
  console.log(currentTime);

  return (
    <Router>
      <Route path='/' exact component={Welcome} />
      <Route path="/play" exact component={GamePage} />
    </Router>
  );
}

export default App;
