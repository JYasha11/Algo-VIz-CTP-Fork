import { Checkbox } from "@material-ui/core";
import React from "react";

const questionStyle ={
    padding: "20px",
    margin:"15px",
    width: "50%",
    display: "flex-column",
    justifyContent: "space-between",
    backgroundColor:"rgba(217, 234, 244, 0.657)"
}

const questionHeaderStyle ={
    display:"flex",
    justifyContent:"space-between"
}

const aStyle ={
    fontSize: "24px",
    fontFamily: "'Roboto', sans-serif",
    textDecoration:"none",  
    width:"50%"
}

const commentStyle = {
    width:"50%",
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "2px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f8f8f8",
    resize: "none"
}

export default function Question(props){
    return(
        <div style={questionStyle}>
            
            <div style ={questionHeaderStyle}>
                <a href = {props.url} style={aStyle}>{props.name}</a>
                <p style={{fontWeight:"bold"}}>{props.difficulty}</p>
                <Checkbox checked={props.isComplete}/>
            </div>
            <textarea style={commentStyle}>{props.comment}</textarea>
            
            
        </div>
    )
}