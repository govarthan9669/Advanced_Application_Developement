// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
// import { Checkbox, FormControlLabel, InputAdornment, IconButton } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import Header from '../../pages/Header';
// import Footer from '../../pages/Footer';

// const generateRandomCaptcha = () => {
//   // Generate a random 4-character alphabetic captcha
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//   return Array.from({ length: 4 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
// };

// const SignIn = () => {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [enteredCaptcha, setEnteredCaptcha] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [captcha, setCaptcha] = useState(generateRandomCaptcha());
//   const [validationError, setValidationError] = useState({ username: false, password: false, captcha: false });

//   const handleLogin = () => {
//     // Reset validation errors
//     setValidationError({ username: false, password: false, captcha: false });

//     // Form validation
//     let isValid = true;

//     if (!username.trim()) {
//       setValidationError((prev) => ({ ...prev, username: true }));
//       isValid = false;
//     }

//     if (!password.trim()) {
//       setValidationError((prev) => ({ ...prev, password: true }));
//       isValid = false;
//     }

//     if (!enteredCaptcha.trim() || !enteredCaptcha.match(/^[a-zA-Z]+$/)) {
//       setValidationError((prev) => ({ ...prev, captcha: true }));
//       isValid = false;
//     }

//     if (isValid) {
//       // Check if the entered captcha is valid
//       if (enteredCaptcha === captcha) {
//         // Add your login logic here
//         console.log('Logging in with:', username, password);

//         // Redirect to the next page after successful login
//         navigate('/Home');
//       } else {
//         console.log('Captcha is not valid. Please try again.');
//         setValidationError((prev) => ({ ...prev, captcha: true }));
//       }
//     }
//   };

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleRefreshCaptcha = () => {
//     // Generate a new captcha
//     setCaptcha(generateRandomCaptcha());
//     setEnteredCaptcha(''); // Clear the entered captcha
//   };

//   const handleForgotPassword = () => {
//     // Add your "forgot password" logic here
//     console.log('Forgot password clicked');
//   };

//   return (
//     <div>
//       <Header></Header>
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       height="100vh"
//       backgroundColor="#C7F6C7"
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           width: '400px',
//           padding: '20px',
//           borderRadius: '10px',
//           backgroundColor: '#fff',
//           textAlign: 'center',
//         }}
//       >
//         <Typography variant="h5" sx={{ marginBottom: '20px', color: '#006400' }}>
//           Sign In
//         </Typography>
//         <TextField
//           label="Username/Email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           error={validationError.username}
//           helperText={validationError.username && 'Please enter a username/email.'}
//         />
//         <TextField
//           label="Password"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           type={showPassword ? 'text' : 'password'}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           error={validationError.password}
//           helperText={validationError.password && 'Please enter a password.'}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={handleTogglePasswordVisibility}>
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
//           <Paper elevation={3} sx={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
//             <Typography variant="h6" sx={{ color: '#000' }}>{captcha}</Typography>
//           </Paper>
//           <Button color="primary" size="small" onClick={handleRefreshCaptcha}>
//             Refresh
//           </Button>
//         </Box>
//         <TextField
//           label="Enter Captcha"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={enteredCaptcha}
//           onChange={(e) => setEnteredCaptcha(e.target.value)}
//           error={validationError.captcha}
//           helperText={validationError.captcha && 'Please enter a valid alphabetic captcha.'}
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={rememberMe}
//               onChange={() => setRememberMe(!rememberMe)}
//               color="primary"
//             />
//           }
//           label="Remember me"
//         />
//         <Button variant="contained" color="success" fullWidth onClick={handleLogin} sx={{ marginTop: '15px' }}>
//           Sign In
//         </Button>
//         <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '15px' }}>
//           <Link onClick={handleForgotPassword} style={{ cursor: 'pointer' }}>
//             Forgot Password?
//           </Link>
//         </Typography>
//         <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '10px' }}>
//             Don't have an account?{' '}
//           <Link href="/SignUp" color="primary">
//             Create an account
//           </Link>
//         </Typography>
//       </Paper>
//     </Box>
//     <Footer></Footer>
//     </div>
//   );
// };

// export default SignIn;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { Checkbox, FormControlLabel, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Header from '../../pages/Header';
import Footer from '../../pages/Footer';
import { useDispatch } from 'react-redux';
import { addToken } from '../../Config/MasterSlice';
import { addRole } from '../../Config/MasterSlice';
import { toggleLogin } from '../../Config/MasterSlice';
import { addUserDetails } from '../../Config/MasterSlice';

const generateRandomCaptcha = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return Array.from({ length: 4 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
};

const SignIn = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [enteredCaptcha, setEnteredCaptcha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [captcha, setCaptcha] = useState(generateRandomCaptcha());
  const [validationError, setValidationError] = useState({ username: false, password: false, captcha: false });

  const handleLogin = async () => {
    setValidationError({ username: false, password: false, captcha: false });

    let isValid = true;

    if (!username.trim()) {
      setValidationError((prev) => ({ ...prev, username: true }));
      isValid = false;
    }

    if (!password.trim()) {
      setValidationError((prev) => ({ ...prev, password: true }));
      isValid = false;
    }

    if (!enteredCaptcha.trim() || !enteredCaptcha.match(/^[a-zA-Z]+$/)) {
      setValidationError((prev) => ({ ...prev, captcha: true }));
      isValid = false;
    }

    if (isValid) {
      if (enteredCaptcha === captcha) {
        try {
          const response = await fetch('http://localhost:8080/authenticate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            }),
          });

          if (!response.ok) {
            console.log('Invalid credentials');
            return;
          }

          const data = await response.json();
          const { jwtToken, user } = data;

          console.log('Login successful. Token:', jwtToken);
          dispatch(addToken(jwtToken));
          dispatch(addRole(user.roles));
          dispatch(addUserDetails(user));
          dispatch(toggleLogin(true));
        
          navigate('/Home');
        } catch (error) {
          console.error('Error during login:', error);
        }
      } else {
        console.log('Captcha is not valid. Please try again.');
        setValidationError((prev) => ({ ...prev, captcha: true }));
      }
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRefreshCaptcha = () => {
    setCaptcha(generateRandomCaptcha());
    setEnteredCaptcha('');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
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
            Sign In
          </Typography>
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
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
            <Paper elevation={3} sx={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
              <Typography variant="h6" sx={{ color: '#000' }}>{captcha}</Typography>
            </Paper>
            <Button color="primary" size="small" onClick={handleRefreshCaptcha}>
              Refresh
            </Button>
          </Box>
          <TextField
            label="Enter Captcha"
            variant="outlined"
            fullWidth
            margin="normal"
            value={enteredCaptcha}
            onChange={(e) => setEnteredCaptcha(e.target.value)}
            error={validationError.captcha}
            helperText={validationError.captcha && 'Please enter a valid alphabetic captcha.'}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button variant="contained" color="success" fullWidth onClick={handleLogin} sx={{ marginTop: '15px' }}>
            Sign In
          </Button>
          <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '15px' }}>
            <Link onClick={handleForgotPassword} style={{ cursor: 'pointer' }}>
              Forgot Password?
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '10px' }}>
            Don't have an account?{' '}
            <Link href="/SignUp" color="primary">
              Create an account
            </Link>
          </Typography>
        </Paper>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default SignIn;



