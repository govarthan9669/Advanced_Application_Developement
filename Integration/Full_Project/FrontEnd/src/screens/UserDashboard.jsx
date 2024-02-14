
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Avatar from '@mui/material/Avatar';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
// import Badge from '@mui/material/Badge';
// import Button from '@mui/material/Button';
// import Header from '../pages/Header';
// import Footer from '../pages/Footer';
// import { green } from '@mui/material/colors';

// const styles = {
//   card: {
//     width: '100%',
//     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//   },
//   avatar: {
//     width: '100px',
//     height: '100px',
//     marginBottom: '1rem',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '1rem',
//   },
//   greenIcon: {
//     color: green[500],
//   },
//   detailsContainer: {
//     padding: '1rem',
//     borderTop: '1px solid #e1e1e1',
//   },
//   value: {
//     color: '#3f3f3f',
//     marginBottom: '0.5rem',
//   },
//   button: {
//     width: '100%',
//     padding: '1rem',
//     marginTop: '1rem',
//   },
// };

// const UserDashboard = () => {
//   const { userDetails } = useSelector((state) => state.master);

//   useEffect(() => {
//     // You can perform any additional actions on component mount here
//   }, []);

//   return (
//     <>
//       <Header />
//       <Box sx={{ backgroundColor: '#fff', padding: '20px',width:'65%' }}>
//         <Grid container spacing={2} alignItems="center" justifyContent="center">
//           <Grid item xs={12} sm={6}>
//             {/* Profile Card */}
//             <Card variant="outlined" sx={styles.card}>
//               <Grid container direction="column" justifyContent="center" alignItems="center">
//                 {/* CARD HEADER START */}
//                 <Grid item sx={styles.header}>
//                   {/* PROFILE PHOTO */}
//                   <Badge
//                     overlap="circular"
//                     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                     badgeContent={<PhotoCameraIcon sx={styles.greenIcon} />}
//                   >
//                     <Avatar src="https://example.com/path-to-profile-image.jpg" sx={styles.avatar} />
//                   </Badge>

//                   {/* USERNAME & EMAIL */}
//                   <Typography variant="h6" sx={{ color: '#3f3f3f', marginTop: '0.5rem' }}>
//                     {userDetails.name}
//                   </Typography>
//                   <Typography color="text.secondary" sx={{ color: '#6b6b6b', marginBottom: '1rem' }}>
//                     {userDetails.email}
//                   </Typography>
//                 </Grid>
//                 {/* CARD HEADER END */}
//                 {/* DETAILS CONTAINER */}
//                 <Grid container sx={styles.detailsContainer}>
//                   <Grid item xs={4}>
//                     <Typography variant="body1" sx={styles.value}>
//                       Username
//                     </Typography>
//                     <Typography variant="body1" sx={styles.value}>
//                       Email
//                     </Typography>
//                     <Typography variant="body1" sx={styles.value}>
//                       MobileNumber
//                     </Typography>
//                     <Typography variant="body1" sx={styles.value}>
//                       city
//                     </Typography>
//                     <Typography variant="body1" sx={styles.value}>
//                       city
//                     </Typography>
//                     <Typography variant="body1" sx={styles.value}>
//                       state
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} sx={{ textAlign: 'end' }}>
//                     <Typography variant="body1" sx={styles.value}>
//                       {userDetails.name}
//                     </Typography>
//                     <Typography variant="body1" sx={styles.value}>
//                       {userDetails.email}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//                 {/* BUTTON */}
//                 <Grid item sx={styles.button}>
//                   <Button variant="contained" color="success" sx={{ width: '100%', p: 1 }}>
//                     View Profile
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Card>
//           </Grid>
          <Grid item xs={12} sm={6}>
            {/* Right side content */}
            {/* Add your right-side content here */}
            {/* Example: */}
            <Box sx={{ marginBottom:'51px',padding: '50px', border: '1px solid #d3d3d3', backgroundColor: '#fff',width:'1000px' }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#3f3f3f' }}>
                Additional Content
              </Typography>
              <Typography variant="body1" sx={{ color: '#6b6b6b' }}>
                This is some additional content on the right side of the user dashboard.
                Customize and add more components as needed.
              </Typography>
            </Box>
            <Box sx={{ marginBottom:'',padding: '50px', border: '1px solid #d3d3d3', backgroundColor: '#fff',width:'1000px',height:'200px' }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#3f3f3f' }}>
                Additional Content
              </Typography>
              
            </Box>
          </Grid>
//         </Grid>
//       </Box>
//       <Footer />
//     </>
//   );
// };

// export default UserDashboard;



import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { green } from '@mui/material/colors';
import axios from 'axios';
import LoanStatus from './LoanStatus'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const styles = {
  card: {
    width: '100%',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: '100px',
    height: '100px',
    marginBottom: '1rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  greenIcon: {
    color: green[500],
  },
  detailsContainer: {
    padding: '1rem',
    borderTop: '1px solid #e1e1e1',
  },
  value: {
    color: '#3f3f3f',
    marginBottom: '0.5rem',
  },
  button: {
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
  },
};

const UserDashboard = () => {
  const { userDetails } = useSelector((state) => state.master);

  const initialState = {
    "id":"",
    "username":"",
    "email": "",
    "dob":"",
    "city":"",
    "state":"",
    "mobileNum":"",
    "loanAmountRequested":"",
    "loanType":"",
    "loan status":""
  };
  
  const [additionalDetails, setAdditionalDetails] = useState(initialState);



  const {accessToken } = useSelector(state => state.master);
  useEffect(() => {
   
  }, []);

  const handleViewProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/loan-application/verify/${userDetails.email}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setAdditionalDetails(response.data);
    } catch (error) {
      console.error('Error fetching additional details:', error.message);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/loan-applications/verify/${userDetails.email}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        setAdditionalDetails(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching additional details:', error.message);
      }
    };
  
    // Call the fetchData function when the component mounts
    fetchData();
  }, [accessToken, userDetails.email]);


  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: '#fff', padding: '20px', width: '65%' }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Card variant="outlined" sx={styles.card}>
              <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item sx={styles.header}>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={<PhotoCameraIcon sx={styles.greenIcon} />}
                  >
                    <Avatar src="" sx={styles.avatar} />
                  </Badge>
                  <Typography variant="h6" sx={{ color: '#3f3f3f', marginTop: '0.5rem' }}>
                    {userDetails.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ color: '#6b6b6b', marginBottom: '1rem' }}>
                    {userDetails.email}
                  </Typography>
                </Grid>
                <Grid container sx={styles.detailsContainer}>
                  <Grid item xs={4}>
                    <Typography variant="body1" sx={styles.value}>
                      Username
                    </Typography>
                    <Typography variant="body1" sx={styles.value}>
                      Email
                    </Typography>
                    <Typography variant="body1" sx={styles.value}>
                      Date Of Birth
                    </Typography>
                    <Typography variant="body1" sx={styles.value}>
                      MobileNumber
                    </Typography>
                    <Typography variant="body1" sx={styles.value}>
                      city
                    </Typography>
                    
                    <Typography variant="body1" sx={styles.value}>
                      state
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: 'end' }}>
                    <Typography variant="body1" sx={styles.value}>
                      {additionalDetails.name}
                    </Typography>
                    <Typography variant="body1" sx={styles.value}>
                      {additionalDetails.email}
                    </Typography>
                    <Typography variant="body1" sx={styles.value}>
                      {additionalDetails.dateOfBirth}
                    </Typography>
                    <Typography variant="body1" sx={styles.value}>
                      {additionalDetails.mobileNumber}
                    </Typography>
                    <Typography variant="body1" sx={styles.value}>
                      {additionalDetails.city}
                    </Typography>
                    <Typography variant="body1" sx={styles.value}>
                      {additionalDetails.state}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item sx={styles.button}>
                  <Button variant="contained" color="success" onClick={handleViewProfile} sx={{ width: '100%', p: 1 }}>
                    View Profile
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          
          {/* {additionalDetails && (
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" sx={styles.card}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                  <Grid item sx={styles.detailsContainer}>
                    <Typography variant="h6">Additional Details</Typography>
                    <Typography variant="body1" sx={styles.value}>
                      Mobile Number: {additionalDetails.mobileNumber}
                    </Typography>
                    <Typography variant="body1" sx={styles.value}>
                      City: {additionalDetails.city}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          )} */}


<Grid item xs={12} sm={6}>
            {/* Right side content */}
            {/* Add your right-side content here */}
            {/* Example: */}
            <Box sx={{ marginBottom:'51px',padding: '50px', border: '1px solid #d3d3d3', backgroundColor: '#fff',width:'1000px' }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#3f3f3f' }}>
                Additional Content
              </Typography>
              <Typography variant="body1" sx={{ color: '#6b6b6b' }}>
              This is some additional content on the right side of the user dashboard. 
      Below is a summary of recent loan applicants:
              </Typography>
            </Box>
            <Box sx={{ marginBottom:'', padding: '50px', border: '1px solid #d3d3d3', backgroundColor: '#fff', width:'1000px', height:'auto' }}>
          <Typography variant="h5" gutterBottom sx={{ color: '#3f3f3f' }}>
            Recent Applied Loan
          </Typography>
          
          <Table style={{ marginTop: '20px', border: '2px solid black' }}>
            <TableHead>
              <TableRow style={{ backgroundColor: '#006400' }}>

                <TableCell style={{ color: 'white' }}>Application Id</TableCell>
                <TableCell style={{ color: 'white' }}>Applicant Name</TableCell>
                <TableCell style={{ color: 'white' }}>Phone Number</TableCell>
                <TableCell style={{ color: 'white' }}>Address</TableCell>
                <TableCell style={{ color: 'white' }}>Loan Amount Requested</TableCell>
                <TableCell style={{ color: 'white' }}>Purpose of Loan</TableCell>
                <TableCell style={{ color: 'white' }}>Status</TableCell>
                <TableCell style={{ color: 'white' }}>Actions</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={additionalDetails.firstName}>
                  <TableCell>{additionalDetails.id}</TableCell>
                  <TableCell>{`${additionalDetails.firstName} ${additionalDetails.lastName}`}</TableCell>
                  <TableCell>{additionalDetails.mobileNum}</TableCell>
                  <TableCell>{additionalDetails.city}</TableCell>
                  <TableCell>{additionalDetails.loanAmountRequested}</TableCell>
                  <TableCell>{additionalDetails.loanType}</TableCell>
                  <TableCell>{additionalDetails.status}</TableCell>
                  <TableCell>
                    {/* <Button
                      onClick={() => handleViewDetails(additionalDetails.email)}
                      variant="contained"
                      color="info"
                      style={{ marginRight: '10px' }}
                    >
                      View
                    </Button> */}
                  </TableCell>
                 
                </TableRow>

            </TableBody>
          </Table>
        </Box>
          </Grid>




        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default UserDashboard;
