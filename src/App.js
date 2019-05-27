import React from 'react';
// import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route path='/Dashboard' component={Dashboard} />
      </BrowserRouter>
    </div >
  );
}

export default App;
