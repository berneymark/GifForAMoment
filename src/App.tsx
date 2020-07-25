import React, { useState } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Trending from './Components/Trending/Trending';
import Footer from './Components/Footer/Footer';
import Results from './Components/Results/Results';

function App() {
    let heading = "Blank Search Term";

    const [text, setText] = useState("");

    return (
        <div className="App">
            <Header setHeading={ setText }></Header>
            <h1>{ text }</h1>
            <Results></Results>
            <Trending></Trending>
            <Footer></Footer>
        </div>
    );
}

export default App;