import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Layout from './Layout/Layout';

function App(props) {

  return (
    <BrowserRouter>
      <div className="appwindow">
        <Layout />
      </div>
    </BrowserRouter>
  );
}



export default App;
