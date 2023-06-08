import React from 'react';
import { TextField} from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import './login.css';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate} from 'react-router-dom';


function Login() {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !pass) {
      toast('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast('Invalid email format.');
      return;
    }

    axios
      .post('http://localhost:3000/api/register', {
        email: email,
        password: pass
      })

      .then(function(response) {
        if(response.data === "Login Successful!") {
          toast("Login successful");
          navigate('/home');
        } 
        
        else
        {
          alert('Login successful');
        }
      })
      .catch(function(error) {
        if(error.response && error.response.data && error.response.data.message) {
          alert('Login successful');
        }else
        {
          alert('Login successful');
        }
      });

  };

  return (
    <>

    <div id="form">
      <form>

        <h2>LOGIN</h2>
        <br/>
        <TextField label="Email" id="outlined-size-normal" value={email} name="email" onChange={e => setEmail(e.target.value)} fullWidth/>
        <br/><br/>

        <TextField label="Password" id="outlined-size-normal" value={pass} name="password" onChange={e => setPass(e.target.value)} type="password" fullWidth />
        <br/><br/>

        <Button variant="contained" color="success" type="submit" onClick={handleSubmit}>LOG IN</Button>
      </form>
    </div>

    <ToastContainer />
    </>

  );

}

export default Login;