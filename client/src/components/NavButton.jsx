import React from 'react'
import {Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
        boxShadow: "transparent",
        border: "transparent",
        fontSize: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        padding: "0 45px",
        boxSizing: "border-box",
        borderRadius: "0", 
        background: "#5377fc",
        color: "#000000",
        transform: "none",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#4f25f7",
            color: "#fff",

          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

function CustomBtn(props) {
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}
export default CustomBtn;