import React from 'react'
import axios from 'axios';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

{/*https://mailtrap.io/blog/react-contact-form/*/}

const styles = {
  contact: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  form: {
    width: "50%",
    textAlign: "center",
  },
  label: {
    color: "rgb(26, 26, 26)",
    fontSize: "28px",
    alignItems: "left",
    display: "flex",
    border: "hidden",
    width: "25%",
    borderRadius: "8px",
    padding: "5px 15px 5px 20px",
    justifyContent: "center",
    backgroundColor: "rgba(220, 224, 239, 0.54)",
  },
  input: {
    marginBottom: "30px",
    marginTop: "10px",
    padding: "20px",
    border: "2px solid",
  },
  p: {
    fontSize: "40px",
    width: "100%",
    marginBottom: "30px",
    color: "white",
  }

}

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    width: "60%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: "20px",
    marginLeft: "500px",
  }
})(Typography);

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  resetForm(){
    this.setState({name: "", email: "", message: ""})
  }
  render() {
    return(
      <div> 
      <WhiteTextTypography gutterBottom variant="h3" align="center">
      Hello <span class="wave">👋</span>, we'd love for you to get in contact with us.
       </WhiteTextTypography >
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
    );
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
  handleSubmit(event) {
  }
}
export default ContactPage;
