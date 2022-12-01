import React, { Component } from 'react';
import {Typography} from '@material-ui/core'; 
import { createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function SignInPage() {
    const classes = styles(); 
    return (
      <div className = "SignIn">
      <ThemeProvider theme={theme}>
        <div className = {classes.wrapper}>
        <h1>Sign in to AlgoViz</h1>
        <div>
          <label for = "login-field">Email</label>

          <input id = "login-field" type = "text" autocapitalize="none" 
          autocorrect="off" autocomplete="username" autofocus="autofocus"></input>

        </div>
        <div>
          <label for = "password-field">Password</label>
          <input id = "password-field">

          </input>
          <button>Sign In</button>
        </div>
        </div>
        </ThemeProvider>
      </div>
    );
}
export default SignInPage;
