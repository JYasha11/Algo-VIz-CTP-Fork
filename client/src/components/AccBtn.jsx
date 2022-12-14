import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    padding: "0 25px",
    boxSizing: "border-box",
    borderRadius: "10px",
    background: "#704dff",
    color: "#fff",
    transform: "none",
    textShadow: "0 1px 1px #cccccc",
    transition: "background .3s,border-color .3s,color .3s",
    "&:hover": {
      backgroundColor: "#23226B",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

function CustomBtn(props) {
  return <StyledButton variant="contained">{props.txt}</StyledButton>;
}
export default CustomBtn;
