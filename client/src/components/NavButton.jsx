import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    boxShadow: "transparent",
    border: "transparent",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    padding: "0 25px",
    boxSizing: "border-box",
    borderRadius: "10px",
    background: "#4F25F7",
    color: "#fff",
    textShadow: "0 1px 1px #cccccc",
    transform: "none",
    transition: "background .3s,border-color .3s,color .3s",
    "&:hover": {
      backgroundColor: "#704dff",
      color: "#fff",
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
