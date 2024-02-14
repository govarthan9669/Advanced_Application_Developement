import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  Grid,
} from '@mui/material';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';



const LoanStatus = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingStatus, setTrackingStatus] = useState(null);
  const [loading, setLoading] = useState(false);


  
  const {accessToken } = useSelector(state => state.master);

  const handleOrderNumberChange = (e) => {
    setOrderNumber(e.target.value);
  };

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.get(`http://localhost:8080/loan-applications/get/${orderNumber}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Replace with your actual Bearer token
          // "Content-Type": "application/json", // Adjust the Content-Type as needed
        },
      });
  
      setTrackingStatus(response.data);
    } catch (error) {
      console.error('Error fetching tracking status:', error.message);
      setTrackingStatus(null);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <Header />
      <Box width="80%" margin="auto" marginTop="20px">
        <Card>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Loan Tracking
            </Typography>
            <form onSubmit={handleTrackOrder}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={8}>
                  <TextField
                    label="Loan Number(ID)"
                    variant="outlined"
                    fullWidth
                    value={orderNumber}
                    onChange={handleOrderNumberChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Track Loan Status
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>

        {loading && <CircularProgress sx={{ marginTop: '20px' }} />}

        {trackingStatus && (
          <Card sx={{ marginTop: '20px', backgroundColor: getStatusColor(trackingStatus.status) }}>
            <CardContent>
              <Typography variant="h6">Tracking Status:</Typography>
              <Typography>
                    {trackingStatus.status === null
                      ? 'In Progress'
                      : trackingStatus.status === 'Approve'
                      ? 'APPROVED'
                      : trackingStatus.status}
                  </Typography>

              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                Applicant Details:
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography>First Name: {trackingStatus.firstName}</Typography>
                  <Typography>Last Name: {trackingStatus.lastName}</Typography>
                  <Typography>Phone Number: {trackingStatus.mobileNumber}</Typography>
                  <Typography>City: {trackingStatus.city}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography>Loan Request Amount: {trackingStatus.loanAmountRequested}</Typography>
                  <Typography>Loan Purpose: {trackingStatus.loanType}</Typography>
                  
                   <Typography>
              Loan Status: {trackingStatus.status === null ? 'In Progress' : trackingStatus.status}
            </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}
      </Box>
      <Footer />
    </div>
  );
};
const getStatusColor = (status) => {
  if (status === null) {
    
    return '#C2E0FF'; // Blue color for in progress
  }

  const lowerCaseStatus = status.toLowerCase();

  switch (lowerCaseStatus) {
    case 'approve':
      return '#8eff8e'; // Green color for approve
    case 'rejected':
      return '#FF474D'; // Red color for reject
    case 'in progress':
      return '#FFFF9D'; // Yellow color for in progress
    case 'documents needed':
      return '#C2E0FF'; // Blue color for documents needed
    default:
      return '#FFFF9D'; // Default to yellow for in progress
  }
};



export default LoanStatus;
