import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage4 from './HomePage4/HomePage4';
import HomePage3 from './HomePage3/HomePage3';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage3 />} /> {/* Default path loads HomePage3  */}
        <Route path="/homepage4" element={<HomePage4 />} /> {/*Path for HomePage4 */}
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
