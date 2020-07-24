import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Trending from './Components/Trending/Trending';
import Footer from './Components/Footer/Footer';

function App() {
    return (
    <div className="App">
        <Header></Header>
        <Trending></Trending>
        <Footer></Footer>
    </div>
    );
}

export default App;
