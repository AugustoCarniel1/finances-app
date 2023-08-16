import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Home, SignIn } from './pages';
import './App.css';
import './css/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/signin' element={< SignIn />}></Route>
          {/* <Route exact path='/contact' element={< Contact />}></Route> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
