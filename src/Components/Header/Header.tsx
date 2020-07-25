import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { createStyles, fade, Theme, withStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';

const styles = (theme:Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            }
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto'
            }
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'relative',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        inputRoot: {
            color: 'inherit'
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                width: '20ch',
                },
            },
        }
    }
);

function Header(props: any) {
    const { classes } = props;

    var searchVal = "";

    const onSearch = (event: any) => {
        props.setHeading(searchVal);
    }

    const onType = (event: any) => {
        searchVal = event.target.value;
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography 
                        className={classes.title}
                        align="left">
                        Gif For a Moment
                    </Typography>
                    <div className={classes.search}>
                        <InputBase
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            placeholder="search..."
                            onChange={onType}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <IconButton onClick={onSearch}>
                        <SearchIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Header);