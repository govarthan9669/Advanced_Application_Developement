import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const LoanStatus = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingStatus, setTrackingStatus] = useState(null);

  const handleOrderNumberChange = (e) => {
    setOrderNumber(e.target.value);
  };

  const handleTrackOrder = (e) => {
    e.preventDefault();
    const trackingStatusFromAPI = getTrackingStatusFromAPI(orderNumber);
    setTrackingStatus(trackingStatusFromAPI);
  };

  const getTrackingStatusFromAPI = (orderNumber) => {
    const trackingStatuses = [
      { orderNumber: '123456', status: 'Inprogress', day: 'Today' },
      { orderNumber: '789012', status: 'Rejected', day: 'Yesterday' },
      { orderNumber: '345678', status: 'Approved', day: 'Today' },
      { orderNumber: '901234', status: 'Documents Needed', day: 'Yesterday' },
    ];

    return trackingStatuses.find((status) => status.orderNumber === orderNumber) || null;
  };

  return (
    <div>
      <Header />
      <Box width="60%" margin="auto" marginTop="20px">
        {/* Green Card for Loan Tracking Form */}
        <Card>
          <CardContent>
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '20px' }}>
              Loan Tracking
            </Typography>
            <form onSubmit={handleTrackOrder}>
              <TextField
                label="Loan Number(ID)"
                variant="outlined"
                fullWidth
                value={orderNumber}
                onChange={handleOrderNumberChange}
                required
                sx={{ marginBottom: '20px' }}
              />
              <Button type="submit" variant="contained" color="primary">
                Track Loan Status
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Card for Displaying Tracking Details */}
        {trackingStatus && (
          <Card sx={{ marginTop: '20px' }}>
            <CardContent>
              <Typography variant="h6">Tracking Status:</Typography>
              <Typography>
                {trackingStatus.day} - {trackingStatus.status}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
      <Footer />
    </div>
  );
};

export default LoanStatus;
