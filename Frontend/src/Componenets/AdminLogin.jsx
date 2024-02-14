import  { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signIn } from '../service/auth';
const defaultTheme = createTheme();

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const validateEmail = () => {
    const { email } = formData;
    if (!email) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
      return false;
    }

    setFormErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    return true;
  };

  const validatePassword = () => {
    const { password } = formData;
    if (!password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
      return false;
    }

    if (password.length < 6) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must Be at least 6 characters',
      }));
      return false;
    }

    setFormErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    signIn(formData)
        .then((res) => {
            
            sessionStorage.setItem('token', res.data.token);
           
            navigate('/home');
        })
        .catch((err) => {
            console.log(err);
           
        });
      }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url("https://i.pinimg.com/originals/97/ae/28/97ae288bc10481a0152460e9a3c5faeb.gif")',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleInputChange}
                onBlur={validateEmail}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={validatePassword}
                error={!!formErrors.password}
                helperText={formErrors.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {/* <Link to='/home'> */}
                Sign In
                {/* </Link> */}
              </Button>
              <Grid container>
                <Grid item xs>
                <Link to='/adminHome'>
                If you are an admin,Login here
                </Link>
                </Grid>
                <Grid item>
                <Link to='/signup'>
                Dont have an account? Sign Up
                </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default AdminLogin;
