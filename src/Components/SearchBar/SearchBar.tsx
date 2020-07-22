import React from 'react';

class SearchBar extends React.Component {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        const giphyAPIURL = 'api.giphy.com/v1/gifs/search';

        fetch(giphyAPIURL)
            .then((response) => response.json())
            .then((data) => console.log('This is your data: '))
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