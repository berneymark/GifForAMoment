import React from 'react';

import Typography from '@material-ui/core/Typography';

import GiphyLogo from '../../img/1024px-Giphy-logo.png'


function Footer() {
    return (
        <div className="Footer">
            <Typography>Created by Mark Berney 2020. Powered by </Typography>
            <img
                src={GiphyLogo}
                alt="Giphy Logo"/>
        </div>
    )
}

export default Footer;

