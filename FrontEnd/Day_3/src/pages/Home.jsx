import React, { useState } from 'react';
import Header from './Header';
import { blueGrey, pink, green } from '@mui/material/colors';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Drawer from '@mui/material/Drawer';
const Dashboard = () => {
 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', backgroundColor: green[100] }}>
      <Header handleDrawerOpen={handleDrawerOpen} />

      </div>
  );
};

export default Dashboard;
