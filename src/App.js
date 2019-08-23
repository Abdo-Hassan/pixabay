import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/search/Search';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Search />
    </div>
  );
}

export default App;
