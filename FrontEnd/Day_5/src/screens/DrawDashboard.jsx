import React from 'react';
import { Card, CardContent, Typography, Box, TextField } from '@mui/material';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const DrawDashboard = () => {
  return (
    <div>
      <Header />

      {/* Heading with specified CSS */}
      <div style={{ backgroundColor: '#006400', padding: '15px', marginTop: '20px', marginLeft: '18%', borderRadius: '5px', width: '60%' }}>
        <Typography variant="h5" sx={{ color: '#fff', textAlign: 'center' }}>
          Dashboard
        </Typography>
      </div>

      {/* Card with full image */}
      <Box width="62%" marginLeft="18%" marginTop="20px">
        <Card>
          <CardContent>
            {/* Full image */}
            <img src="./images/dashBoardFull.jpeg" alt="Full Image" style={{ width: '100%', height: 'auto' }} />

            {/* Your dashboard content goes here */}
          </CardContent>
        </Card>
      </Box>

      <Footer />
    </div>
  );
};

export default DrawDashboard;
