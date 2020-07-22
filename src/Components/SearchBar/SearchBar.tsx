import React from 'react';

class SearchBar extends React.Component {
    componentDidMount() {
        //const GIPHY_API_SEARCH_URL = 'https://api.giphy.com/v1/gifs/search';
        const GIPHY_API_RANDOM_URL = 'https://api.giphy.com/v1/gifs/random'
        const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

        fetch(GIPHY_API_RANDOM_URL + '?api_key=' + GIPHY_API_KEY)
            .then((response) => response.json())
            .then((data) => console.log('This is your data: ', data))
            .catch(function(error) {
                console.log('There was an error.');
            });
    }

    render() {
        return (
            <div>
                <h1>This component has loaded.</h1>
            </div>
        );
    }
}

export default SearchBar;