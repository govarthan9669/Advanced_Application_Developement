import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { Checkbox, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Header from '../../pages/Header';
import Footer from '../../pages/Footer';

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [validationError, setValidationError] = useState({
    firstName: false,
    lastName: false,
    username: false,
    password: false,
    confirmPassword: false,
    phoneNumber: false,
    agreePolicy: false,
  });

  const handleSignUp = () => {
    // Reset validation errors
    setValidationError({
      firstName: false,
      lastName: false,
      username: false,
      password: false,
      confirmPassword: false,
      phoneNumber: false,
      agreePolicy: false,
    });

    // Form validation
    let isValid = true;

    if (!firstName.trim()) {
      setValidationError((prev) => ({ ...prev, firstName: true }));
      isValid = false;
    }

    if (!lastName.trim()) {
      setValidationError((prev) => ({ ...prev, lastName: true }));
      isValid = false;
    }

    if (!username.trim()) {
      setValidationError((prev) => ({ ...prev, username: true }));
      isValid = false;
    }

    if (!password.trim()) {
      setValidationError((prev) => ({ ...prev, password: true }));
      isValid = false;
    }

    if (password !== confirmPassword) {
      setValidationError((prev) => ({ ...prev, confirmPassword: true }));
      isValid = false;
    }

    if (!phoneNumber.trim() || !phoneNumber.match(/^\d+$/)) {
      setValidationError((prev) => ({ ...prev, phoneNumber: true }));
      isValid = false;
    }

    if (!agreePolicy) {
      setValidationError((prev) => ({ ...prev, agreePolicy: true }));
      isValid = false;
    }

    if (isValid) {
      // Add your signup logic here
      console.log('Signing up with:', firstName, lastName, username, password, phoneNumber);

      // Redirect to the next page after successful signup
      navigate('/login');
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleAgreePolicy = () => {
    setAgreePolicy(!agreePolicy);
  };

  return (
    <div>
      <Header></Header>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        backgroundColor="#C7F6C7"
      >
        <Paper
          elevation={3}
          sx={{
            width: '400px',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#fff',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: '20px', color: '#006400' }}>
            Sign Up
          </Typography>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={validationError.firstName}
            helperText={validationError.firstName && 'Please enter your first name.'}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={validationError.lastName}
            helperText={validationError.lastName && 'Please enter your last name.'}
          />
          <TextField
            label="Username/Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={validationError.username}
            helperText={validationError.username && 'Please enter a username/email.'}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={validationError.password}
            helperText={validationError.password && 'Please enter a password.'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={validationError.confirmPassword}
            helperText={validationError.confirmPassword && 'Passwords do not match.'}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={validationError.phoneNumber}
            helperText={validationError.phoneNumber && 'Please enter a valid phone number.'}
          />
          <Typography variant="body2" sx={{ textAlign: 'left', marginTop: '10px' }}>
          <Checkbox
            checked={agreePolicy}
            onChange={handleToggleAgreePolicy}
            color="primary"
          />
            I agree to all the{' '}
            <Link href="#" color="primary">
              Policies and Terms
            </Link>
          </Typography>
          <Button variant="contained" color="success" fullWidth onClick={handleSignUp} sx={{ marginTop: '15px' }}>
            Sign Up
          </Button>
          <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '10px' }}>
            Already have an account?{' '}
            <Link href="/Login" color="primary">
              Sign In
            </Link>
          </Typography>
        </Paper>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
