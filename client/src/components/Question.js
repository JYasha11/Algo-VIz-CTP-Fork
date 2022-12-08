import { Checkbox } from "@material-ui/core";
import React from "react";

export default function Question(props){
    return(
        <div>
            <a src = {props.url}>{props.name}</a>
            <p>{props.difficulty}</p>
            <textarea>{props.comment}</textarea>
            <Checkbox checked={props.isComplete}/>
        </div>
    )
}