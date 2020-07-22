import React from 'react';
import './Trending.css';

class Trending extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            gifs : {data: []}
        };
    }

    componentDidMount() {
        const GIPHY_API_TRENDING_URL = 'https://api.giphy.com/v1/gifs/trending'
        const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

        fetch(GIPHY_API_TRENDING_URL + '?api_key=' + GIPHY_API_KEY
            + '&limit=5')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    gifs : data,
                })
            })
            .catch((error) => console.log('Error: ' + error));
    }

    render() {
        const listItems = this.state.gifs.data.map((item: any) =>
            <a href={item.url} target="new" key={item.id}>
                <img src={item.images.original.url} alt={item.title}/>
            </a>
        );

        return (
            <div className="TrendingBar">
                <h1>Top Trending</h1>
                <div className="trending">{listItems}</div>
            </div>
        );
    }
}

export default Trending;