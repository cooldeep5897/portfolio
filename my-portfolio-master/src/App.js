import React from 'react';
import SideMenu from './components/SideMenu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MainBody from './components/MainBody';
function App() {
  return (
    <div className='App'>
      <div className='overlay pl-4 pr-4'>
        <p className='bold'>
          <b>Please Use desktop or laptop to view</b>{' '}
        </p>
        <p>
          We don't support mobile or tablet size screen yet. Please open it
          desktop or laptop for the best experience
        </p>
      </div>
      <SideMenu />
      <MainBody />
    </div>
  );
}

export default App;
