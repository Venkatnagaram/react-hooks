import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import UseState from './components/useState/useState';
import UseReducer from './components/useReducer/useReducer';
import UseEffect from './components/useEffect/useEffect';
import UseMemo from './components/useMemo/useMemo';
import UseCallback from './components/useCallback/useCallback';
function App() {
  return (
    <Router>
      <div className="container">
      <center><h2>React Hooks</h2></center><hr/>
        <ul>
          <li><Link to="/usestate">useState</Link></li>
          <li><Link to="/usereducer">useReducer</Link></li>
          <li><Link to="/useeffect">useEffect</Link></li>
          <li><Link to="/useref">useRef</Link></li>
          <li><Link to="/uselayouteffect">useLayoutEffect</Link></li>
          <li><Link to="/usecontext">useContext</Link></li>
          <li><Link to="/useimperativehandle">useImperativeHandle</Link></li>
          <li><Link to="/usememo">useMemo</Link></li>
          <li><Link to="/usecallback">useCallback</Link></li>
        </ul>
        <hr/>
        <Routes>
          <Route exact path='/usestate' element={< UseState />}></Route>
          <Route exact path='/usereducer' element={< UseReducer />}></Route>
          <Route exact path='/useeffect' element={< UseEffect />}></Route>
          <Route exact path='/usememo' element={< UseMemo />}></Route>
          <Route exact path='/usecallback' element={< UseCallback />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
