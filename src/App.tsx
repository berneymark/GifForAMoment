import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import Trending from './Components/Trending/Trending';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBar></SearchBar>
      <Trending></Trending>
      <Footer></Footer>
    </div>
  );
}

export default App;
