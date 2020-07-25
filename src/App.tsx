import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Trending from './Components/Trending/Trending';
import Footer from './Components/Footer/Footer';

function App() {
    const initGif = {
        url: "https://giphy.com/gifs/cmMvCw95Z5D0pTB2iQ",
        id: "cmMvCw95Z5D0pTB2iQ",
        img: "https://media2.giphy.com/media/cmMvCw95Z5D0pTB2iQ/giphy.gif",
        alt: "Animated GIF"
    }

    const [text, setText] = useState<string>("");
    const [gifData, setGifData] = useState<any>(initGif);

    useEffect(() => {
        searchedGif(text);
        console.log("TEST: " + text);
    }, [text]);

    const searchedGif = (searchTerm?: string) => {
        const GIPHY_API_RANDOM_URL = 'https://api.giphy.com/v1/gifs/random?api_key='
        const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
        const GIPHY_API_RANDOM_TAGS = '&rating=g&tag='

        const GIPHY_API_SEARCH_URL = 'https://api.giphy.com/v1/gifs/search?api_key=';
        const GIPHY_API_SEARCH_RESULT = '&q=';
        const GIPHY_API_SEARCH_TAGS = '&limit=1&offset=0&rating=pg&lang=en';

        if (searchTerm) {
            fetch(GIPHY_API_SEARCH_URL + GIPHY_API_KEY + GIPHY_API_SEARCH_RESULT + searchTerm + GIPHY_API_SEARCH_TAGS)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.data[0]);
                    setGifData(
                        {
                            url: data.data[0].url,
                            id: data.data[0].id,
                            img: data.data[0].images.original.url,
                            alt: data.data[0].title
                        }
                    );
                })
                .catch((error) => console.log('Error: ' + error));
        } else {
            fetch(GIPHY_API_RANDOM_URL + GIPHY_API_KEY + GIPHY_API_RANDOM_TAGS)
                .then((response) => response.json())
                .then((data) => {
                    setGifData(
                        {
                            url: data.data.url,
                            id: data.data.id,
                            img: data.data.images.original.url,
                            alt: data.data.title
                        }
                    );
                })
                .catch((error) => console.log('Error: ' + error));
        }

        console.log(GIPHY_API_SEARCH_URL + GIPHY_API_KEY + GIPHY_API_SEARCH_RESULT + searchTerm + GIPHY_API_SEARCH_TAGS)

        return (
            <div>DONE</div>
        );
    }
    
    return (
        <div className="App">
            <Header setHeading={ setText }></Header>
            <a href={gifData.url} target="new" key={gifData.id}>
                <img 
                    id="gifResult"
                    src={gifData.img} 
                    alt={gifData.title}
                />
            </a>
            <Trending></Trending>
            <Footer></Footer>
        </div>
    );
}

export default App;