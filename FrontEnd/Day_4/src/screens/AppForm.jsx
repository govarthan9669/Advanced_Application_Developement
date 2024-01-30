// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import {
//   Container,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Grid,
//   Button,
// } from '@mui/material';
// import Header from '../pages/Header';
// import Footer from '../pages/Footer';

// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     gender: '',
//     maritalStatus: '',
//     mobileNumber: '',
//     email: '',
//     streetAddress: '',
//     streetAddressLine2: '',
//     city: '',
//     state: '',
//     nationality: '',
//     postalCode: '',
//     employmentStatus: '',
//     employerName: '',
//     jobTitle: '',
//     monthlyIncome: '',
//     lengthOfEmployment: '',
//     monthlyExpenses: '',
//     otherDebts: '',
//     bankStatements: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [step, setStep] = useState(1);

//   const handleInputChange = (field) => (event) => {
//     setFormData({ ...formData, [field]: event.target.value });
//     setErrors({ ...errors, [field]: '' });
//   };

//   const validatePersonalInformation = () => {
//     const newErrors = {};

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First Name is required';
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last Name is required';
//     }

//     if (!formData.dateOfBirth.trim()) {
//       newErrors.dateOfBirth = 'Date of Birth is required';
//     }

//     if (!formData.gender) {
//       newErrors.gender = 'Gender is required';
//     }

//     if (!formData.maritalStatus) {
//       newErrors.maritalStatus = 'Marital Status is required';
//     }

//     const emailRegex = /^\S+@\S+\.\S+$/;
//     if (!formData.email.trim() || !emailRegex.test(formData.email)) {
//       newErrors.email = 'Invalid Email';
//     }

//     const phoneRegex = /^\d{10}$/;
//     if (!formData.mobileNumber.trim() || !phoneRegex.test(formData.mobileNumber)) {
//       newErrors.mobileNumber = 'Invalid Phone Number';
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (step === 1 && validatePersonalInformation()) {
//       setStep(2);
//     }
//   };

//   const handleBack = () => {
//     setStep(1);
//   };

//   return (
//     <div>
//       <div style={{ backgroundColor: '#C7F6C7' }}>
//         <Header />
//         <Container maxWidth="sm" style={{ marginBottom: '28px' }}>
          // <Typography variant="h4" gutterBottom>
          //   <h3 style={{ color: 'black' }}>
          //     {step === 1 ? 'Personal Information' : 'Employment Information'}
          //   </h3>
          // </Typography>
          // <form>
          //   {step === 1 && (
              
          //       {step === 1 && (
          //         <Grid item xs={12}>
          //           <Button type="button" variant="contained" color="primary" fullWidth onClick={handleNext}>
          //             Next
          //           </Button>
          //         </Grid>
          //       )}
          //     </Grid>
          //   )}

          //   {step === 2 && (
          //     <Grid container spacing={2} justifyContent="flex-start">
          //       <Grid item xs={12} justifyContent="flex-end">
          //         <Typography variant="h4" gutterBottom>
          //           <h3 style={{ color: 'black' }}> Employment </h3>
          //         </Typography>
          //       </Grid>
          //       <Grid item xs={12}>
          //         <FormControl fullWidth variant="outlined">
          //           <InputLabel>Employment Status</InputLabel>
          //           <Select
          //             label="Employment Status"
          //             value={formData.employmentStatus}
          //             onChange={handleInputChange('employmentStatus')}
          //             error={!!errors.employmentStatus}
          //           >
          //             <MenuItem value="employed">Employed</MenuItem>
          //             <MenuItem value="unemployed">Unemployed</MenuItem>
          //             <MenuItem value="selfEmployed">Self-employed</MenuItem>
          //           </Select>
          //         </FormControl>
          //       </Grid>
          //       <Grid item xs={12}>
          //         <TextField
          //           fullWidth
          //           label="Employer Name"
          //           variant="outlined"
          //           value={formData.employerName}
          //           onChange={handleInputChange('employerName')}
          //         />
          //       </Grid>
          //       <Grid item xs={12} sm={6}>
          //         <TextField
          //           fullWidth
          //           label="Job Title"
          //           variant="outlined"
          //           value={formData.jobTitle}
          //           onChange={handleInputChange('jobTitle')}
          //         />
          //       </Grid>
          //       <Grid item xs={12}>
          //         <TextField
          //           fullWidth
          //           label="Monthly Income"
          //           variant="outlined"
          //           value={formData.monthlyIncome}
          //           onChange={handleInputChange('monthlyIncome')}
          //         />
          //       </Grid>
          //       <Grid item xs={12}>
          //         <TextField
          //           fullWidth
          //           label="Length of Employment"
          //           variant="outlined"
          //           value={formData.lengthOfEmployment}
          //           onChange={handleInputChange('lengthOfEmployment')}
          //         />
          //       </Grid>
          //       <Grid item xs={12} justifyContent="flex-end">
          //         <Typography variant="h4" gutterBottom>
          //           <h3 style={{ color: 'black' }}> Financial Information</h3>
          //         </Typography>
          //       </Grid>
          //       <Grid item xs={12}>
          //         <TextField
          //           fullWidth
          //           label="Monthly Expenses"
          //           variant="outlined"
          //           value={formData.monthlyExpenses}
          //           onChange={handleInputChange('monthlyExpenses')}
          //         />
          //       </Grid>
          //       <Grid item xs={12}>
          //         <TextField
          //           fullWidth
          //           label="Other Debts"
          //           variant="outlined"
          //           value={formData.otherDebts}
          //           onChange={handleInputChange('otherDebts')}
          //         />
          //       </Grid>
          //       <Grid item xs={12}>
          //         <TextField
          //           fullWidth
          //           label="Bank Statements"
          //           variant="outlined"
          //           value={formData.bankStatements}
          //           onChange={handleInputChange('bankStatements')}
          //         />
          //       </Grid>
//                 <Grid item xs={12}>
//                   <Button type="button" variant="contained" color="primary" fullWidth onClick={handleBack}>
//                     Back
//                   </Button>
//                 </Grid>
//               </Grid>
//             )}
//           </form>
//         </Container>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MyForm;



import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Typography, FormControl, InputLabel, Select, MenuItem, Grid, Button } from '@mui/material';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const MyForm = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const sections = [
    { title: 'Personal Information', fields: ['firstName', 'lastName', 'dateOfBirth', 'gender', 'maritalStatus','mobileNumber', 'email', 'streetAddress', 'streetAddressLine2', 'city', 'state', 'nationality', 'postalCode'] },
   
    { title: 'Employee Information', fields: ['employeeMobileNumber', 'employeeEmail', 'employeeStreetAddress', 'employeeStreetAddressLine2', 'employeeCity', 'employeeState', 'employeeNationality', 'employeePostalCode'] },
    { title: 'Loan Details', fields: ['loanAmountRequested', 'loanPurpose', 'loanTerm'] },
    { title: 'Credit Information', fields: ['creditScore', 'creditHistory'] },
    { title: 'Co-Applicant Information', fields: ['coApplicantPersonalInfo', 'coApplicantFinancialInfo'] },
    { title: 'Documents to Upload', fields: ['photoID', 'proofOfAddress', 'payStubs', 'employmentVerification', 'bankStatements', 'otherFinancialDocs'] },
    { title: 'Agreements and Disclosures', fields: ['termsConditions', 'privacyPolicy', 'consentToCreditCheck'] },
    { title: 'Submit and Review', fields: ['summary'] },
    { title: 'Confirmation Page', fields: [] },
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    mobileNumber: '',
    email: '',
    streetAddress: '',
    streetAddressLine2: '',
    city: '',
    state: '',
    nationality: '',
    postalCode: '',
    employeeMobileNumber: '',
    employeeEmail: '',
    employeeStreetAddress: '',
    employeeStreetAddressLine2: '',
    employeeCity: '',
    employeeState: '',
    employeeNationality: '',
    employeePostalCode: '',
    loanAmountRequested: '',
    loanPurpose: '',
    loanTerm: '',
    creditScore: '',
    creditHistory: '',
    coApplicantPersonalInfo: '',
    coApplicantFinancialInfo: '',
    photoID: '',
    proofOfAddress: '',
    payStubs: '',
    employmentVerification: '',
    bankStatements: '',
    otherFinancialDocs: '',
    termsConditions: '',
    privacyPolicy: '',
    consentToCreditCheck: '',
    summary: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
  
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
  
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
  
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = 'Date of Birth is required';
    }
  
    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }
  
    if (!formData.maritalStatus) {
      newErrors.maritalStatus = 'Marital Status is required';
    }
  
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid Email';
    }
  
    const phoneRegex = /^\d{10}$/;
    if (!formData.mobileNumber.trim() || !phoneRegex.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Invalid Phone Number';
    }
  
    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };
  

  const handleNext = () => {
    if (validateForm()) {
      setCurrentSection((prevSection) => prevSection + 1);
    }
  };

  const handleBack = () => {
    setCurrentSection((prevSection) => prevSection - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Additional logic for form submission
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: "" }}>
        <Header />
        <Container maxWidth="sm" style={{ marginBottom: "28px" }}>
          <Typography variant="h4" gutterBottom>
            <h3 style={{ color: 'black' }}>{sections[currentSection - 1].title}</h3>
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="flex-start">
              {sections[currentSection - 1].fields.map((field) => (
                <Grid key={field} item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={field === 'dateOfBirth' ? 'Date of Birth' : field.charAt(0).toUpperCase() + field.slice(1)}
                    variant="outlined"
                    type={field === 'dateOfBirth' ? 'date' : 'text'}
                    InputLabelProps={{ shrink: true }}
                    value={formData[field]}
                    onChange={handleInputChange(field)}
                    error={!!errors[field]}
                    helperText={errors[field]}
                  />
                </Grid>
              ))}
              <Grid item xs={6}>
                {currentSection > 1 && (
                  <Button onClick={handleBack} variant="contained" color="secondary" fullWidth>
                    Back
                  </Button>
                )}
              </Grid>
              <Grid item xs={6}>
                {currentSection < sections.length && (
                  <Button onClick={handleNext} type="button" variant="contained" color="primary" fullWidth>
                    Next
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default MyForm;




