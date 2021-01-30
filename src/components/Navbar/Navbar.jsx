
import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import logo from "../../assets/logo.png"


import useStyles from "./styles"


const Navbar = () => {
    const classes=useStyles();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.title}>
                    {/* <a href='https://pngtree.com/so/house-icons'>house icons png from pngtree.com</a>  */}
                    <img src={logo} alt="Commerce.js" className={classes.image} height="25px"/>
                    Commerce.js
                </Typography>

                <div className={classes.grow} />

                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
            
        </>
    )
}

export default Navbar
