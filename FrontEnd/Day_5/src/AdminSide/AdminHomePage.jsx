import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import Footer from '../pages/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
import { AccountBalanceWallet, CheckCircle, Receipt } from '@mui/icons-material';

const StyledCardContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '70vh',
});

const StyledCard = styled(Card)(({ flipped }) => ({
  position: 'relative',
  width: '500px',
  height: '300px',
  margin: '20px',
  borderRadius: '5%',
  textAlign: 'center',
  transition: 'transform 0.3s, background 0.3s',
  cursor: 'pointer',
  backgroundColor: flipped ? '#006400' : '#006400',
  '&:hover': {
    transform: `scale(1.1) rotateY(${flipped ? '180deg' : '0'})`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(${flipped ? 'to bottom left' : 'to bottom right'}, #FF0000, #FF6347)`,
    opacity: `${flipped ? '1' : '0'}`,
    transition: 'opacity 0.3s',
    pointerEvents: 'none',
    zIndex: '-1',
  },
}));

const StyledCardIcon = styled(IconButton)({
  fontSize: 80,
  marginBottom: '10px',
});

const StyledCardText = styled(Typography)(({ flipped }) => ({
  marginBottom: '20px',
  transform: flipped ? 'scaleX(-1)' : 'scaleX(1)',
}));

const AdditionalBoxItem = ({ title, value }) => (
  <div style={{ backgroundColor: 'rgb(40, 167, 69)', padding: '15px', textAlign: 'center', width: '14.9%', height: '150px', marginRight: '20px' }}>
    <Typography variant="h6" sx={{ color: [700] }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: 'white', marginBottom: '20px' }}>
      {value}
    </Typography>
  </div>
);

const AdminHomePage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const additionalBoxItems = [
    {
      title: '  121473   ',
      value: 'Regd. Beneficiary',
    },
    {
      title: '99824 ',
      value: 'No. of Applications',
    },
    {
      title: '₹ 51,543 Cr ',
      value: 'Loan Amt. of Received Appls.',
    },
    {
      title: '207192',
      value: 'User',
    },
    {
      title: '34',
      value: 'State/UTs',
    },
  ];

  return (
    <div>
      <AdminHeader />
      <StyledCardContainer container>
        <Grid item>
          {/* Use Link to navigate to the ManageLoan page */}
          <Link to="/ManageLoan" style={{ textDecoration: 'none' }}>
            <StyledCard onClick={handleCardClick}>
              <CardContent>
                <StyledCardIcon aria-label="Manage Loan">
                  <AccountBalanceWallet style={{ color: '#0000FF' }} />
                </StyledCardIcon>
                <br />
                <br />
                <br />
                <StyledCardText variant="h3" color="white">
                  Manage Loan
                </StyledCardText>
              </CardContent>
            </StyledCard>
          </Link>
        </Grid>
        <Grid item>
          <StyledCard
            flipped={isFlipped}
            onClick={handleCardClick}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <CardContent>
              <StyledCardIcon aria-label={isFlipped ? 'Reject' : 'Approve Loan'}>
                {isFlipped ? (
                  <Receipt style={{ color: '#FF0000' }} />
                ) : (
                  <CheckCircle style={{ color: '#008000' }} />
                )}
              </StyledCardIcon> <br />
              <br />
              <br />
              <StyledCardText variant="h3" color="white" flipped={isFlipped}>
                {isFlipped ? 'Reject Loan' : 'Approve Loan'}
              </StyledCardText>
            </CardContent>
          </StyledCard>
        </Grid>
      </StyledCardContainer>

      {/* Additional Box Items */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {additionalBoxItems.map((item, index) => (
          <AdditionalBoxItem key={index} title={item.title} value={item.value} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AdminHomePage;
