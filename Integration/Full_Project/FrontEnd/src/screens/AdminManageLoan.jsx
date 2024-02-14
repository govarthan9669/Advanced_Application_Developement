// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Collapse from '@mui/material/Collapse';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import AdminHeader from '../AdminSide/AdminHeader';
// import Footer from '../pages/Footer';
// import { useDispatch } from 'react-redux';

// const AdminManageLoan = () => {
//   const [applicants, setApplicants] = useState([]);
//   const [expandedApplicantId, setExpandedApplicantId] = useState(null);
//   const [selectedApplicantDetails, setSelectedApplicantDetails] = useState(null);


//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetchLoanApplicants();
//   }, []);

//   const fetchLoanApplicants = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/loan-applications/get');
//       setApplicants(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   };

//   const handleViewDetails = async (id) => {
//     try {
//       setExpandedApplicantId((prevId) => (prevId === id ? null : id));

//       if (expandedApplicantId !== id) {
//         const response = await axios.get(`http://localhost:8080/loan-applications/get/${id}`);
//         setSelectedApplicantDetails(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching details:', error.message);
//     }
//   };

//   const handleApprove = async (id) => {
//     setApplicants((prevApplicants) =>
//       prevApplicants.map((applicant) =>
//         applicant.id === id ? { ...applicant, status: 'Approved' } : applicant
//       )
//     );
//     const response = await axios.get(`http://localhost:8080/loan-applications/approve-status/${id}/Approve`);
//   };
  
//   const handleReject = async (id) => {
//     setApplicants((prevApplicants) =>
//     prevApplicants.map((applicant) =>
//     applicant.id === id ? { ...applicant, status: 'Rejected' } : applicant
//     )
//     );
//     const response = await axios.get(`http://localhost:8080/loan-applications/approve-status/${id}/Rejected`);
//   };

//   return (
//     <>
//       <AdminHeader />

//       <div style={{ padding: '20px' }}>
//         <h1 style={{ color: 'white', backgroundColor: '#006400', padding: '10px', textAlign: 'center' }}>
//           Manage Loan
//         </h1>

//         <Table style={{ marginTop: '20px', border: '2px solid black' }}>
//           <TableHead>
//             <TableRow style={{ backgroundColor: '#006400' }}>
//               <TableCell style={{ color: 'white' }}>Applicant Name</TableCell>
//               <TableCell style={{ color: 'white' }}>Phone Number</TableCell>
//               <TableCell style={{ color: 'white' }}>Address</TableCell>
//               <TableCell style={{ color: 'white' }}>Loan Amount Requested</TableCell>
//               <TableCell style={{ color: 'white' }}>Purpose of Loan</TableCell>
//               <TableCell style={{ color: 'white' }}>Actions</TableCell>
//               <TableCell style={{ color: 'white' }}>Approve/Reject</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {applicants.map((applicant) => (
//               <React.Fragment key={applicant.id}>
//                 <TableRow
//                   style={{
//                     backgroundColor: getStatusColor(applicant.status),
//                     height: '80px',
//                     transition: 'background-color 0.3s',
//                     cursor: 'pointer',
//                     borderBottom: '2px solid black',
//                   }}
//                 >
//                   <TableCell>{`${applicant.firstName} ${applicant.lastName}`}</TableCell>
//                   <TableCell>{applicant.mobileNumber}</TableCell>
//                   <TableCell>{applicant.city}</TableCell>
//                   <TableCell>{applicant.loanAmountRequested}</TableCell>
//                   <TableCell>{applicant.loanType}</TableCell>
//                   <TableCell>
//                     <Button
//                       onClick={() => handleViewDetails(applicant.id)}
//                       variant="contained"
//                       color="info"
//                       style={{ marginRight: '10px' }}
//                     >
//                       View
//                     </Button>
//                   </TableCell>
//                   <TableCell>
//                     <Button
//                       onClick={() => handleApprove(applicant.id)}
//                       variant="contained"
//                       color="success"
//                       style={{ marginRight: '10px' }}
//                     >
//                       <CheckCircleIcon />
//                     </Button>
//                     <Button onClick={() => handleReject(applicant.id)} variant="contained" color="error">
//                       <HighlightOffIcon />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell colSpan={7}>
//                     <Collapse in={expandedApplicantId === applicant.id}>
//                       <Box>
//                         {selectedApplicantDetails && (
//                           <div>
//                             <p>Additional Details:</p>
//                             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
//                               <div>
//                                 {/* Column 1 */}
//                                 <p>Date of Birth: {selectedApplicantDetails.dateOfBirth}</p>
//                                 <p>Gender: {selectedApplicantDetails.gender}</p>
//                                 <p>Marital Status: {selectedApplicantDetails.maritalStatus}</p>
//                                 <p>Mobile Number: {selectedApplicantDetails.mobileNumber}</p>
//                                 <p>Nationality: {selectedApplicantDetails.nationality}</p>
//                                 <p>Postal Code: {selectedApplicantDetails.postalCode}</p>
//                                 <p>Employee Mobile Number: {selectedApplicantDetails.employeeMobileNumber}</p>
//                                 <p>Employee Email: {selectedApplicantDetails.employeeEmail}</p>
//                                 <p>Employee Street Address: {selectedApplicantDetails.employeeStreetAddress}</p>
//                                 <p>Employee Street Address Line 2: {selectedApplicantDetails.employeeStreetAddressLine2}</p>
//                               </div>
//                               <div>
//                                 <p>State: {selectedApplicantDetails.state}</p>
//                                 <p>Nationality: {selectedApplicantDetails.nationality}</p>
//                                 <p>Postal Code: {selectedApplicantDetails.postalCode}</p>
//                                 <p>Employee Mobile Number: {selectedApplicantDetails.employeeMobileNumber}</p>
//                                 <p>Employee Email: {selectedApplicantDetails.employeeEmail}</p>
//                                 <p>Employee Street Address: {selectedApplicantDetails.employeeStreetAddress}</p>
//                                 <p>Employee Street Address Line 2: {selectedApplicantDetails.employeeStreetAddressLine2}</p>
//                                 <p>Employee City: {selectedApplicantDetails.employeeCity}</p>
//                                 <p>Employee State: {selectedApplicantDetails.employeeState}</p>
//                                 <p>Employee Nationality: {selectedApplicantDetails.employeeNationality}</p>
//                               </div>
//                               <div>
//                               <p>Employee Postal Code: {selectedApplicantDetails.employeePostalCode}</p>
//                                   <p>Loan Amount Requested: {selectedApplicantDetails.loanAmountRequested}</p>
//                                   <p>Loan Purpose: {selectedApplicantDetails.loanPurpose}</p>
//                                   <p>Loan Term: {selectedApplicantDetails.loanTerm}</p>
//                                   <p>Loan Type: {selectedApplicantDetails.loanType}</p>
//                                   <p>Credit Score: {selectedApplicantDetails.creditScore}</p>
//                                   <p>Credit History: {selectedApplicantDetails.creditHistory}</p>
//                                   <p>Co-Applicant Personal Info: {selectedApplicantDetails.coApplicantPersonalInfo}</p>
//                                   <p>Co-Applicant Financial Info: {selectedApplicantDetails.coApplicantFinancialInfo}</p>
//                                   <p>Photo ID: {selectedApplicantDetails.photoID}</p>
//                                 </div>
//                               <div>
//                                 {/* Column 4 */}
//                                 {/* Add details for column 4 */}
//                                 <p>Employee Postal Code: {selectedApplicantDetails.employeePostalCode}</p>
//                                     <p>Loan Amount Requested: {selectedApplicantDetails.loanAmountRequested}</p>
//                                     <p>Loan Purpose: {selectedApplicantDetails.loanPurpose}</p>
//                                     <p>Loan Term: {selectedApplicantDetails.loanTerm}</p>
//                                     <p>Loan Type: {selectedApplicantDetails.loanType}</p>
//                                     <p>Credit Score: {selectedApplicantDetails.creditScore}</p>
//                                     <p>Credit History: {selectedApplicantDetails.creditHistory}</p>
//                                     <p>Co-Applicant Personal Info: {selectedApplicantDetails.coApplicantPersonalInfo}</p>
//                                     <p>Co-Applicant Financial Info: {selectedApplicantDetails.coApplicantFinancialInfo}</p>
//                                     <p>Photo ID: {selectedApplicantDetails.photoID}</p>
                                  
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </Box>
//                     </Collapse>
//                   </TableCell>
//                 </TableRow>
//               </React.Fragment>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       <Footer />
//     </>
//   );
// };

// const getStatusColor = (status) => {
//   switch (status) {
//     case 'Approved':
//       return '#8eff8e'; // Green color for approved
//     case 'Rejected':
//       return '#FF474D'; // Red color for rejected
//     default:
//       return ''; // Default color
//   }
// };

// export default AdminManageLoan;







import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import AdminHeader from '../AdminSide/AdminHeader';
import Footer from '../pages/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../pages/Header';

const AdminManageLoan = () => {
  const [applicants, setApplicants] = useState([]);
  const [expandedApplicantId, setExpandedApplicantId] = useState(null);
  const [selectedApplicantDetails, setSelectedApplicantDetails] = useState(null);

  const {accessToken } = useSelector(state => state.master);

  console.log('Access Token:', accessToken)

  useEffect(() => {
    fetchLoanApplicants();
  }, []);

  const fetchLoanApplicants = async () => {
    try {
      
      const response = await axios.get('http://localhost:8080/loan-applications/get', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setApplicants(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleViewDetails = async (id) => {
    try {
      setExpandedApplicantId((prevId) => (prevId === id ? null : id));
  
      if (expandedApplicantId !== id) {
        const response = await axios.get(`http://localhost:8080/loan-applications/get/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setSelectedApplicantDetails(response.data);
      }
    } catch (error) {
      console.error('Error fetching details:', error.message);
    }
  };

  const handleApprove = async (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: 'Approved' } : applicant
      )
    );
    try {
     
      await axios.get(`http://localhost:8080/loan-applications/approve-status/${id}/Approve`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.error('Error approving:', error.message);
    }
  };

  const handleReject = async (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: 'Rejected' } : applicant
      )
    );
    try {
      await axios.get(`http://localhost:8080/loan-applications/approve-status/${id}/Rejected`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.error('Error rejecting:', error.message);
    }
  };

  return (
    <>
      <Header />

      <div style={{ padding: '20px' }}>
        <h1 style={{ color: 'white', backgroundColor: '#006400', padding: '10px', textAlign: 'center' }}>
          Manage Loan
        </h1>

        <Table style={{ marginTop: '20px', border: '2px solid black' }}>
          <TableHead>
            <TableRow style={{ backgroundColor: '#006400' }}>
              <TableCell style={{ color: 'white' }}>Applicant Name</TableCell>
              <TableCell style={{ color: 'white' }}>Phone Number</TableCell>
              <TableCell style={{ color: 'white' }}>Address</TableCell>
              <TableCell style={{ color: 'white' }}>Loan Amount Requested</TableCell>
              <TableCell style={{ color: 'white' }}>Purpose of Loan</TableCell>
              <TableCell style={{ color: 'white' }}>Actions</TableCell>
              <TableCell style={{ color: 'white' }}>Approve/Reject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicants.map((applicant) => (
              <React.Fragment key={applicant.id}>
                <TableRow
                  style={{
                    backgroundColor: getStatusColor(applicant.status),
                    height: '80px',
                    transition: 'background-color 0.3s',
                    cursor: 'pointer',
                    borderBottom: '2px solid black',
                  }}
                >
                  <TableCell>{`${applicant.firstName} ${applicant.lastName}`}</TableCell>
                  <TableCell>{applicant.mobileNumber}</TableCell>
                  <TableCell>{applicant.city}</TableCell>
                  <TableCell>{applicant.loanAmountRequested}</TableCell>
                  <TableCell>{applicant.loanType}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleViewDetails(applicant.id)}
                      variant="contained"
                      color="info"
                      style={{ marginRight: '10px' }}
                    >
                      View
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleApprove(applicant.id)}
                      variant="contained"
                      color="success"
                      style={{ marginRight: '10px' }}
                    >
                      <CheckCircleIcon />
                    </Button>
                    <Button onClick={() => handleReject(applicant.id)} variant="contained" color="error">
                      <HighlightOffIcon />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={7}>
                    <Collapse in={expandedApplicantId === applicant.id}>
                      <Box>
                        {selectedApplicantDetails && (
                          <div>
                            <p>Additional Details:</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                              <div>
                                <p>Date of Birth: {selectedApplicantDetails.dateOfBirth}</p>
                                <p>Gender: {selectedApplicantDetails.gender}</p>
                                <p>Marital Status: {selectedApplicantDetails.maritalStatus}</p>
                                <p>Mobile Number: {selectedApplicantDetails.mobileNumber}</p>
                                <p>Nationality: {selectedApplicantDetails.nationality}</p>
                                <p>Postal Code: {selectedApplicantDetails.postalCode}</p>
                                <p>Employee Mobile Number: {selectedApplicantDetails.employeeMobileNumber}</p>
                                <p>Employee Email: {selectedApplicantDetails.employeeEmail}</p>
                                <p>Employee Street Address: {selectedApplicantDetails.employeeStreetAddress}</p>
                                <p>Employee Street Address Line 2: {selectedApplicantDetails.employeeStreetAddressLine2}</p>
                              </div>
                              <div>
                                <p>State: {selectedApplicantDetails.state}</p>
                                <p>Nationality: {selectedApplicantDetails.nationality}</p>
                                <p>Postal Code: {selectedApplicantDetails.postalCode}</p>
                                <p>Employee Mobile Number: {selectedApplicantDetails.employeeMobileNumber}</p>
                                <p>Employee Email: {selectedApplicantDetails.employeeEmail}</p>
                                <p>Employee Street Address: {selectedApplicantDetails.employeeStreetAddress}</p>
                                <p>Employee Street Address Line 2: {selectedApplicantDetails.employeeStreetAddressLine2}</p>
                                <p>Employee City: {selectedApplicantDetails.employeeCity}</p>
                                <p>Employee State: {selectedApplicantDetails.employeeState}</p>
                                <p>Employee Nationality: {selectedApplicantDetails.employeeNationality}</p>
                              </div>
                              <div>
                                <p>Employee Postal Code: {selectedApplicantDetails.employeePostalCode}</p>
                                <p>Loan Amount Requested: {selectedApplicantDetails.loanAmountRequested}</p>
                                <p>Loan Purpose: {selectedApplicantDetails.loanPurpose}</p>
                                <p>Loan Term: {selectedApplicantDetails.loanTerm}</p>
                                <p>Loan Type: {selectedApplicantDetails.loanType}</p>
                                <p>Credit Score: {selectedApplicantDetails.creditScore}</p>
                                <p>Credit History: {selectedApplicantDetails.creditHistory}</p>
                                <p>Co-Applicant Personal Info: {selectedApplicantDetails.coApplicantPersonalInfo}</p>
                                <p>Co-Applicant Financial Info: {selectedApplicantDetails.coApplicantFinancialInfo}</p>
                                <p>Photo ID: {selectedApplicantDetails.photoID}</p>
                              </div>
                              <div>
                                <p>Employee Postal Code: {selectedApplicantDetails.employeePostalCode}</p>
                                <p>Loan Amount Requested: {selectedApplicantDetails.loanAmountRequested}</p>
                                <p>Loan Purpose: {selectedApplicantDetails.loanPurpose}</p>
                                <p>Loan Term: {selectedApplicantDetails.loanTerm}</p>
                                <p>Loan Type: {selectedApplicantDetails.loanType}</p>
                                <p>Credit Score: {selectedApplicantDetails.creditScore}</p>
                                <p>Credit History: {selectedApplicantDetails.creditHistory}</p>
                                <p>Co-Applicant Personal Info: {selectedApplicantDetails.coApplicantPersonalInfo}</p>
                                <p>Co-Applicant Financial Info: {selectedApplicantDetails.coApplicantFinancialInfo}</p>
                                <p>Photo ID: {selectedApplicantDetails.photoID}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>

      <Footer />
    </>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Approved':
      return '#8eff8e';
    case 'Rejected':
      return '#FF474D';
    default:
      return '';
  }
};

export default AdminManageLoan;
