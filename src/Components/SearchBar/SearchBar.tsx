import React from 'react';
import { TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <TextField id="outlined-search" label="Search" type="search" variant="outlined"></TextField>
            </div>
        );
    }
}

export default SearchBar;