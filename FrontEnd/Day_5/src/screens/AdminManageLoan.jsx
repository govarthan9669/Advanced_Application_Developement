// import React, { useState } from 'react';
// import AdminHeader from '../AdminSide/AdminHeader';
// import Footer from '../pages/Footer';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import Button from '@mui/material/Button';

// const AdminManageLoan = () => {
//   const [applicants, setApplicants] = useState([
//     {
//       id: 1,
//       name: 'John Doe',
//       phoneNumber: '123-456-7890',
//       address: '123 Main St, City',
//       panCard: 'ABCDE1234F',
//       salary: '$50,000',
//       purposeOfLoan: 'Home Improvement',
//       status: '', // 'Approved', 'Rejected', or ''
//     },
//     // Add more applicant data as needed
//   ]);

//   const handleApprove = (id) => {
//     setApplicants((prevApplicants) =>
//       prevApplicants.map((applicant) =>
//         applicant.id === id ? { ...applicant, status: 'Approved' } : applicant
//       )
//     );
//   };

//   const handleReject = (id) => {
//     setApplicants((prevApplicants) =>
//       prevApplicants.map((applicant) =>
//         applicant.id === id ? { ...applicant, status: 'Rejected' } : applicant
//       )
//     );
//   };

//   return (
//     <>
//       <AdminHeader />

//       <div style={{ padding: '20px' }}>
//         <h1>Manage Loan</h1>

//         <Table style={{ marginTop: '20px' }}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Applicant Name</TableCell>
//               <TableCell>Phone Number</TableCell>
//               <TableCell>Address</TableCell>
//               <TableCell>PAN Card</TableCell>
//               <TableCell>Salary</TableCell>
//               <TableCell>Purpose of Loan</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {applicants.map((applicant) => (
//               <TableRow key={applicant.id} style={{ backgroundColor: getStatusColor(applicant.status), height: '80px' }}>
//                 <TableCell>{applicant.name}</TableCell>
//                 <TableCell>{applicant.phoneNumber}</TableCell>
//                 <TableCell>{applicant.address}</TableCell>
//                 <TableCell>{applicant.panCard}</TableCell>
//                 <TableCell>{applicant.salary}</TableCell>
//                 <TableCell>{applicant.purposeOfLoan}</TableCell>
//                 <TableCell>
//                   <Button onClick={() => handleApprove(applicant.id)} variant="contained" color="success" style={{ marginRight: '10px' }}>
//                     Approve
//                   </Button>
//                   <Button onClick={() => handleReject(applicant.id)} variant="contained" color="error">
//                     Reject
//                   </Button>
//                 </TableCell>
//               </TableRow>
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
//       return '#ff8e8e'; // Red color for rejected
//     default:
//       return ''; // Default color
//   }
// };

// export default AdminManageLoan;


import React, { useState } from 'react';
import AdminHeader from '../AdminSide/AdminHeader';
import Footer from '../pages/Footer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

const AdminManageLoan = () => {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: 'Mari Muthu',
      phoneNumber: '123-456-7890',
      address: '123 Main St, City',
      panCard: 'ABCDE1234F',
      salary: '50,000',
      purposeOfLoan: 'Crop Loan',
      status: '', // 'Approved', 'Rejected', or ''
    },
    // Add more applicant data as needed
  ]);

  const handleApprove = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: 'Approved' } : applicant
      )
    );
  };

  const handleReject = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: 'Rejected' } : applicant
      )
    );
  };

  return (
    <>
      <AdminHeader />

      <div style={{ padding: '20px' }}>
        <h1 style={{ color: 'white', backgroundColor: '#006400', padding: '10px', textAlign: 'center' }}>Manage Loan</h1>

        <Table style={{ marginTop: '20px', border: '2px solid black' }}>
          <TableHead>
            <TableRow style={{ backgroundColor: '#006400' }}>
              <TableCell style={{ color: 'white' }}>Applicant Name</TableCell>
              <TableCell style={{ color: 'white' }}>Phone Number</TableCell>
              <TableCell style={{ color: 'white' }}>Address</TableCell>
              <TableCell style={{ color: 'white' }}>PAN Card</TableCell>
              <TableCell style={{ color: 'white' }}>Salary</TableCell>
              <TableCell style={{ color: 'white' }}>Purpose of Loan</TableCell>
              <TableCell style={{ color: 'white' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicants.map((applicant) => (
              <TableRow
                key={applicant.id}
                style={{
                  backgroundColor: getStatusColor(applicant.status),
                  height: '80px',
                  transition: 'background-color 0.3s',
                  cursor: 'pointer',
                  borderBottom: '2px solid black',
                }}
              >
                <TableCell>{applicant.name}</TableCell>
                <TableCell>{applicant.phoneNumber}</TableCell>
                <TableCell>{applicant.address}</TableCell>
                <TableCell>{applicant.panCard}</TableCell>
                <TableCell>{applicant.salary}</TableCell>
                <TableCell>{applicant.purposeOfLoan}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleApprove(applicant.id)}
                    variant="contained"
                    color="success"
                    style={{ marginRight: '10px' }}
                  >
                    Approve
                  </Button>
                  <Button onClick={() => handleReject(applicant.id)} variant="contained" color="error">
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
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
      return '#8eff8e'; // Green color for approved
    case 'Rejected':
      return '#FF474D'; // Red color for rejected
    default:
      return ''; // Default color
  }
};

export default AdminManageLoan;
