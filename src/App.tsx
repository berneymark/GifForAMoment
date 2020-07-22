import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import Trending from './Components/Trending/Trending';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
