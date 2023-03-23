import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import UseState from './components/useState/useState';
import UseCallback from './components/useCallback/useCallback';
function App() {
  return (
    <Router>
      <div className="container">
      <center><h2>React Hooks</h2></center><hr/>
        <ul>
          <li><Link to="/usestate">useState</Link></li>
          <li><Link to="/usecallback">useCallback</Link></li>
        </ul>
        <hr/>
        <Routes>
          <Route exact path='/usestate' element={< UseState />}></Route>
          <Route exact path='/usecallback' element={< UseCallback />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
