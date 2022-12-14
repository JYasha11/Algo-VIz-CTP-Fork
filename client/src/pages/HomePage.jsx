import { Typography } from "@material-ui/core";
import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import gif from "../assets/code.gif";
import NavButton from "../components/NavButton";
import { NavLink } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#06030d",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 36,
      lineHeight: "2rem",
    },
    h5: {
      fontSize: 26,
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "40%",
    marginLeft: "50px",
    marginTop: "10px",
    textAlign: "left",
    paddingRight: "px",
    paddingLeft: "0px",
    textShadow: "0 1px 1px #cccccc",
  },
  bigSpace: {
    marginTop: "1rem",
    paddingBottom: "1rem",
    paddingTop: "3rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  footerSpace: {
    marginTop: "4rem",
    paddingTop: "3rem",
  },
  grid: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    paddingRight: "0px",
    paddingLeft: "0px",
  },
  columns: {
    display: "flex",
    flexDirection: "row",
  },
  smallPicture: {
    justifyContent: "flex-end",
    scale: "100%",
    marginRight: "100px",
    border: "5px solid",
    borderColor: "#47378c",
    width: "300px",
    height: "300px",
    float: "right",
    borderRadius: "50px",
  },
});

export const HomePage = () => {
  const classes = styles();
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: "black",
    };
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className={classes.columns}>
          <div>
            <div className={classes.wrapper}>
              <Typography variant="h4" className={classes.bigSpace} color="primary">
                At AlgoViz We Are Passionate About Programming.
              </Typography>
              <Typography variant="h5" className={classes.littleSpace} color="primary">
                Looking to improve your understanding of data structures and algorithms? Look no further. <br></br>
                <br></br>AlgoViz happily provides users a free collection of practice problems, along with visualizations to aid in comprehension of data structures. <br></br>
                <br></br>Additionally, a cherry on top, you are able to track your progress in each topic, indicated on your account. Let's crush those technical interviews!
              </Typography>
              <NavLink style={navLinkStyles} to="/sign-in/">
                <br></br>
                <br></br>
                <NavButton txt="Get Started"></NavButton>
              </NavLink>
            </div>
          </div>
          <div>
            <img className={classes.smallPicture} src={gif} alt="code" />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};
