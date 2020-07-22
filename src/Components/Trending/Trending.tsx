import React from 'react';

class Trending extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            gifs : {data: []}
        };
    }

    componentDidMount() {
        const GIPHY_API_TRENDING_URL = 'https://api.giphy.com/v1/gifs/trending'
        const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

        fetch(GIPHY_API_TRENDING_URL + '?api_key=' + GIPHY_API_KEY)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    gifs : data,
                })
            })
            .catch((error) => console.log('Error: ' + error));
    }

    render() {
        const listItems = this.state.gifs.data.map();

        return (
            <div className="TrendingBar">
                <h1>Top Trending</h1>
                <div className="trending">{listItems}</div>
            </div>
        );
    }
}

export default Trending;