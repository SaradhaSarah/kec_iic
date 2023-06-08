import React,{useState} from "react";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './signup.css';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';


function Signup(){
    const [name,setName] = useState('');
    const [lname,setLName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] =useState('');

    const handleSubmit = (e) => {
        
        e.preventDefault();

        if (!name || !email || !pass )
        {
          toast('Please enter all the fields');
          return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) 
        {
          toast("Enter valid mail");
          return;
        }
    
        const article = {
          name: name,
          email: email,
          password: pass
        };
    
        axios.post('http://localhost:3000/api/register', article)

          .then((response)=>{
            toast('Registered successfully');
          })

          .catch(function (error) {
            if (error.response && error.response.data && error.response.data.message) {
              alert(error.response.data.message);
            } else if (error.message) {
              alert(error.message);
            } else {
              alert('An error occurred. Please try again.');
            }
            console.error(error);
          });
      };

    return (
        <>
        <div id="form">

      <form>

        <h2>Sign Up </h2>
        <br/>

        <TextField label="First Name" id="outlined-size-normal" value={name} name="name" onChange={e => setName(e.target.value)} fullWidth/>
        <br/><br/>

        <TextField label="Last Name" id="outlined-size-normal" value={lname} name="lname" onChange={e => setLName(e.target.value)} fullWidth/>
        <br/><br/>

        <TextField label="Email" id="outlined-size-normal" value={email} name="email" onChange={e => setEmail(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="Password" id="outlined-size-normal" value={pass} name="password" onChange={e => setPass(e.target.value)} type="password" fullWidth />
        <br/><br/>
        
        <Button variant="contained" color="success" type="submit" onClick={handleSubmit}>SIGN UP</Button>
      </form>
    </div>


        <ToastContainer/>
        </>
    )
}

export default Signup;
