import * as React from 'react';
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

function AdminSignup() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    phone: '',
    email: '',
    password: '',
    allowExtraEmails: false,
    role: 'user',
    address: '',
  });

  const [formErrors, setFormErrors] = React.useState({
    firstName: '',
    phone: '',
    email: '',
    password: '',
    address:'',
  });

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'firstName':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          firstName: value.trim() ? '' : 'First Name is required',
        }));
        break;
      case 'phone':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          phone: value.length >= 10 ? '' : 'Phonenumber must be at least 10 characters',
        }));
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          email: emailRegex.test(value) ? '' : 'Invalid email address',
        }));
        break;
        case 'address':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          address: value.trim() ? '' : 'Address is required',
        }));
        break;
      case 'password':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          password: value.length >= 6 ? '' : 'Password must be at least 6 characters',
        }));
        break;
        
      default:
        break;
        
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));

    validateField(name, fieldValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Object.keys(formData).forEach((fieldName) => {
      validateField(fieldName, formData[fieldName]);
    });

    const hasErrors = Object.values(formErrors).some((error) => error !== '');

    if (!hasErrors) {
      console.log('Form submitted:', formData);
    }
  };

  return (
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error={!!formErrors.firstName}
                  helperText={formErrors.firstName}
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
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
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
                  value={formData.password}
                  onChange={handleInputChange}
                  error={!!formErrors.password}
                  helperText={formErrors.password}
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
                  value={formData.role}
                  onChange={handleInputChange}
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
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={!!formErrors.phone}
                  helperText={formErrors.phone}
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
                  value={formData.address}
                  onChange={handleInputChange}
                  error={!!formErrors.address}
                  helperText={formErrors.address}
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
  );
}

export default AdminSignup;
