import React from 'react'
import {TextField} from '@mui/material'
import Button from '@mui/material/Button';
import axios from 'axios';
// import {User} from './schema';
import './login.css';

function Register() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
 
  const handleSubmit = () => {
    if (!name || !email || !pwd) {
      alert('Please fill in all fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format.');
      return;
    } 
    axios
      .post('http://localhost:3000/api/register', {
        name: name,
        email: email,
        password: pwd
      })
      .then(function (response) {
        alert("Registered successfully");
        // Handle success response here
      })
      .catch(function (error) {
        if (error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert('An error occurred. Please try again.');
        }
        console.error(error);
      });
  };
    

    return(
        <div id="form">
          
        <form>
            <h2>REGISTRATION FORM</h2>
        <br/>
        <TextField label="Name" id="outlined-size-normal" name="name" value={name} onChange={e=>setName(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="Email" id="outlined-size-normal" value={email} name="email "onChange={e=>setEmail(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="Password" id="outlined-size-normal" value={pwd} name="password"onChange={e=>setPwd(e.target.value)} type={"password"} fullWidth/>
        <br/><br/>
     
        <Button variant="contained" color="success" href="#" type='submit' onClick={handleSubmit}>REGISTER</Button>
        </form >
        </div>
    )
}

export default Register;