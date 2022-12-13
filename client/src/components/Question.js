import { Checkbox } from "@material-ui/core";
import React from "react";

const divStyle ={
    padding: "20px",
    backgroundColor: "gray",
    width: "400px"
}

export default function Question(props){
    return(
        <div style={divStyle}>
            <a href = {props.url}>{props.name}</a>
            <p>{props.difficulty}</p>
            <textarea>{props.comment}</textarea>
            <Checkbox checked={props.isComplete}/>
        </div>
    )
}