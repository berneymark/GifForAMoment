import React from 'react';

import Box from '@material-ui/core/Box';

import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        }
    })
);

function Results() {
    const classes = useStyles();

    return (
        <Box border={1}>

        </Box>
    )
}

export default Results;