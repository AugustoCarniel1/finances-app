import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Home } from './components/Index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          {/* <Route exact path='/contact' element={< Contact />}></Route> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
