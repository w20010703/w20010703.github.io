import logo from './logo.svg';
import './App.css';

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Header from './component/Header'

import MainPage from './page/MainPage'
import P1Page from './page/P1Page'
import P2Page from './page/P2Page'
import P3Page from './page/P3Page'
import P4Page from './page/P4Page'
import P5Page from './page/P5Page'
import P6Page from './page/P6Page'
import P7Page from './page/P7Page'
import P8Page from './page/P8Page'
import P9Page from './page/P9Page'
import P10Page from './page/P10Page'
import P11Page from './page/P11Page'
import P12Page from './page/P12Page'
import P13Page from './page/P13Page'
import P14Page from './page/P14Page'
import P15Page from './page/P15Page'

import CVPage from './page/CVPage'




function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/MainPage" />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/P1Page" element={<P1Page />} />
          <Route path="/P2Page" element={<P2Page />} />
          <Route path="/P3Page" element={<P3Page />} />
          <Route path="/P4Page" element={<P4Page />} />
          <Route path="/P5Page" element={<P5Page />} />
          <Route path="/P6Page" element={<P6Page />} />
          <Route path="/P7Page" element={<P7Page />} />
          <Route path="/P8Page" element={<P8Page />} />
          <Route path="/P9Page" element={<P9Page />} />
          <Route path="/P10Page" element={<P10Page />} />
          <Route path="/P11Page" element={<P11Page />} />
          <Route path="/P12Page" element={<P12Page />} />
          <Route path="/P13Page" element={<P13Page />} />
          <Route path="/P14Page" element={<P14Page />} />
          <Route path="/P15Page" element={<P15Page />} />
          <Route path="/CVPage" element={<CVPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
