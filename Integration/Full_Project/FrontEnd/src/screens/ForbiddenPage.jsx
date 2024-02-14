// ForbiddenPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ForbiddenPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#388e3c', color: 'white' }}>
      <ErrorOutlineIcon sx={{ fontSize: '64px', marginBottom: '20px', color: 'white' }} />
      <Typography variant="h5" gutterBottom sx={{ marginBottom: '20px', color: 'white' }}>
        403 - Forbidden
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '30px', color: 'white' }}>
        Oops! You don't have permission to access this page.
      </Typography>
      <Button component={Link} to="/Home" variant="contained" color="primary" sx={{ textDecoration: 'none', color: 'white', '&:hover': { backgroundColor: '#388e3c', color: 'white' } }}>
        Go to Home Page
      </Button>
    </Box>
  );
};

export default ForbiddenPage;
