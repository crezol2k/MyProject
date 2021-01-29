import React from 'react'
import Navbar from '../src/components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/base.css';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </div>
  )
}

export default App
