import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Trending from './Components/Trending/Trending';
import Footer from './Components/Footer/Footer';
import Results from './Components/Results/Results';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Results></Results>
            <Trending></Trending>
            <Footer></Footer>
        </div>
    );
}

export default App;