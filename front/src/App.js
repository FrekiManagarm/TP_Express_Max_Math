import React from 'react';
import './App.css';
import { BrowserRouter as BRouter } from 'react-router-dom';
import RouterFront from './router';

function App() {
  return (
    <div>
        <BRouter><RouterFront/></BRouter>
    </div>
  );
}

export default App;
