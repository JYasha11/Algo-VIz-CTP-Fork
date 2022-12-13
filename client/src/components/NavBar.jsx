import React from 'react'
import CustomBtn from './CustomBtn'
import NavButton from './NavButton'
import logo from '../logo.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import { NavLink } from "react-router-dom";


const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "transparent",
        justifyContent: "space-between",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "5%", 
        margin: "15px",
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

export const NavBar = () => {
    const classes = styles()
    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: 'none',
            color: 'black',
        }
    }
    return (
        <div>
                <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                    <img alt = "logo" src={logo} className={classes.logo}/> 
                    <NavLink style = {navLinkStyles} to ='/'>
                        <Typography variant="h2" className={classes.menuItem}>AlgoViz</Typography>
                    </NavLink>
                
                    <NavLink style = {navLinkStyles} to ='/about/'>
                        <NavButton txt = "About"/>
                    </NavLink>

                    <NavLink style = {navLinkStyles} to ='/practice/'>
                        <NavButton txt = "Practice"/>
                    </NavLink>

                    <NavLink style = {navLinkStyles} to ='/vis/'>
                        <NavButton txt = "Visualization"/>
                    </NavLink>

                    <NavLink style = {navLinkStyles} to ='/contact-us/'>
                        <NavButton txt = "Contact Us"/>
                    </NavLink>

                    <NavLink style = {navLinkStyles} to ='/sign-in/'>
                        <CustomBtn txt="Log In"/>
                    </NavLink>
                </Toolbar>  
        </div>)
}

