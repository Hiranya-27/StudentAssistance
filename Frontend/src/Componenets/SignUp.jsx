// import React from 'react';
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { signUp } from '../service/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const SignUp=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  
  const navigate=useNavigate();

  const handleEmailChange=(value)=>{
    setEmail(value);
  };

  const handleNameChange = (value) => {
    setName(value);
};

  const handlePasswordChange = (value) => {
    setPassword(value);
};

const handleRoleChange = (value) => {
  setRole(value);
};
const handlePhoneChange = (value) => {
  setPhone(value);
};
const handleAddressChange = (value) => {
  setAddress(value);
};

  const handleFormSubmit = (e) => {
      e.preventDefault();

      const form = {
          name: name ,
          email: email,
          password: password,
          Role:role,
          phone:phone,
          address:address


      }
      signUp(form)
      .then((res) => {
          const decoded = jwtDecode(res.data.token);
          sessionStorage.setItem('token', res.data.token);
          console.log(decoded.sub);
          if(decoded.sub === "hiran@gmail.com"){
              setEmail("");
              setPassword("");
              navigate('/');
          }
          else{
              setEmail("");
          setPassword("");
          navigate('/home');
          }
          
      })

          .catch((err) => {
              setEmail("");
              setPassword("");
              setPassword("");
              setRole("");
              setPhone("");
              setAddress("");
              console.log(err);
             
          });
  };

 

  return(
    <div className='sig'>
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onChange={handleNameChange} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  // value={formData.firstName}
                  // onChange={handleInputChange}
                  // error={!!formErrors.firstName}
                  // helperText={formErrors.firstName}
                  InputProps={{
                    style: { borderColor: 'green' }, // Set the border color to green
                  }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  // value={formData.email}
                  onChange={handleEmailChange}
                  // error={!!formErrors.email}
                  // helperText={formErrors.email}
                  InputProps={{
                    style: { borderColor: 'green' }, // Set the border color to green
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // value={formData.password}
                  onChange={handlePasswordChange}
                  // error={!!formErrors.password}
                  // helperText={formErrors.password}
                  InputProps={{
                    style: { borderColor: 'green' }, // Set the border color to green
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  id="role"
                  label="Role"
                  name="role"
                  // value={formData.role}
                  onChange={handleRoleChange}
                  InputProps={{
                    style: { borderColor: 'green' }, // Set the border color to green
                  }}
                >
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </TextField>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="allowExtraEmails" color="primary" />}
                  // label="I want to receive inspiration, marketing promotions and updates via email."
                  checked={formData.allowExtraEmails}
                  onChange={handleInputChange}
                />
              </Grid> */}
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="phone"
                  name="phone"
                  autoComplete="family-name"
                  // value={formData.phone}
                  onChange={handlePhoneChange}
                  // error={!!formErrors.phone}
                  // helperText={formErrors.phone}
                  InputProps={{
                    style: { borderColor: 'green' }, // Set the border color to green
                  }}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id=""
                  label="address"
                  name="address"
                  autoComplete="family-name"
                  // value={formData.address}
                  onChange={handleAddressChange}
                  // error={!!formErrors.address}
                  // helperText={formErrors.address}
                  InputProps={{
                    style: { borderColor: 'green' }, // Set the border color to green
                  }}
                />
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <Link to='/'>
                Sign Up
                </Link>
              </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default SignUp;
