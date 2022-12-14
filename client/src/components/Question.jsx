import { Checkbox } from "@material-ui/core";
import React from "react";
import Button from "@mui/material/Button";
import { TextField, FormControlLabel } from "@material-ui/core";

const questionStyle = {
  padding: "20px",
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: "15px",
  width: "80%",
  borderRadius: "30px",
  borderStyle: "5px solid",
  textShadow: "0 1px 1px #cccccc",
  display: "flex-column",
  justifyContent: "space-between",
  backgroundColor: "rgba(229, 234, 244, 0.9)",
  boxShadow: "3px 3px 10px 2px rgba(0,0,0,.6)",
};

const questionHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  paddingBottom: "25px",
};

const aStyle = {
  fontSize: "28px",
  fontFamily: "'Roboto', sans-serif",
  textDecoration: "none",
  width: "50%",
};

export default function Question(props) {
  let button;
  if (props.difficulty === "Easy") {
    button = (
      <p style={{ borderRadius: "10px", padding: "5px 15px 5px 15px", color: "white", backgroundColor: "green", fontSize: "20px", fontWeight: "bold" }}>{props.difficulty}</p>
    );
  } else if (props.difficulty === "Moderate") {
    button = (
      <p style={{ borderRadius: "10px", padding: "5px 15px 5px 15px", color: "white", backgroundColor: "orange", fontSize: "20px", fontWeight: "bold" }}>{props.difficulty}</p>
    );
  } else {
    button = <p style={{ borderRadius: "10px", padding: "5px 15px 5px 15px", color: "white", backgroundColor: "red", fontSize: "20px", fontWeight: "bold" }}>{props.difficulty}</p>;
  }
  return (
    <div style={questionStyle}>
      <div style={questionHeaderStyle}>
        <a href={props.url} style={aStyle}>
          {props.name}
        </a>
        {button}
        <FormControlLabel control={<Checkbox checked={props.isComplete} />} label="Complete?" />
      </div>
      <TextField placeholder="Comments" label="Comment" variant="filled" fullWidth />
      <br></br>
      <br></br>
      <Button
        onClick={() => {
          alert("Saved Your Progress.");
        }}
        variant="contained"
        size="large">
        Save
      </Button>
    </div>
  );
}
