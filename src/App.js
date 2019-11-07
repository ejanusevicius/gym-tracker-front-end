import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.module.css';

import Layout from './Layout/Layout';

function App(props) {

  return (
    <BrowserRouter>
      <div className={classes.applicationWindow}>
        <Layout />
      </div>
    </BrowserRouter>
  );
}



export default App;
