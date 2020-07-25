import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import GiphyLogo from '../../img/1024px-Giphy-logo.png'
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        logo: {
            height: 20,
            paddingLeft: 10
        }
    })
);

function Footer() {
    const classes = useStyles();

    return (
        <Box>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item>
                    <Typography variant="overline">
                        Created by Mark Berney 2020. Powered by
                    </Typography>
                </Grid>
                <Grid item>
                    <img
                        className={classes.logo}
                        src={GiphyLogo}
                        alt="Giphy Logo"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;

