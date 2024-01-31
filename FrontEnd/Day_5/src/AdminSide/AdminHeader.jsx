// import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { blueGrey, pink, green } from '@mui/material/colors';

const AdminHeader = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);

    const [isDrawerOpen, setDrawerOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setDrawerOpen(true);
    };
  
    const handleDrawerClose = () => {
      setDrawerOpen(false);
    };
  return (
    <>
    
    <div style={{ backgroundColor: '#304D30', height: '18px', width: '100vw' }}></div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBGW1nk4sIiFYko6ZtifcYj7KkN4dn0d4JrKaTa3HyKohnkC4hGZjxUsXBHxlN7IE2LkejLSdX0AihyphenhyphendQFKJ1LhjsVLotmvNVHCaOtitxsvx-sn2KLdPXahxWaMveu6oUI8ONL0lSDi-m2QlCkeT8FPH_HeFHTNnI5sZBmpqirtDL3EFpljFPv7-7PgFw/s320/gova%20logo.jpg" alt="Government Logo" style={{ width: '15%', height: 'auto', marginRight: '20px' }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}></div>
        <div style={{ display: 'flex', marginLeft: '7%' }}>
          <h1 style={{ color: 'black', fontSize: '25px' }}>
            Agriculture Infra Financing Facility<br /><div style={{ height: '5px' }}></div>
            விவசாய உள்கட்டமைப்பு நிதி வசதி <br /><div style={{ height: '5px' }}></div>
            Department of Agriculture & Farmers Welfare
          </h1>
        </div>
        <div style={{ width: '32%' }}></div>
        <img src="https://agriinfra.dac.gov.in/Content/images/AIFRound.gif" alt="Agriculture Infra Financing GIF" style={{ width: '7%', height: 'auto', marginBottom: '20px' }} />
      </div>

      <AppBar position="static" sx={{ backgroundColor: '#304D30', mt: -4 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AgroFunds
          </Typography>
          <Button component={Link} to="/AdminHome" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/ManageLoan" color="inherit">
            Manage Loan
          </Button>
          {/* <Button component={Link} to="/aboutScheme" color="inherit">
            Profile
          </Button> */}
          {/* <Button component={Link} to="/eligibleproject" color="inherit">
            Eligible projects
          </Button>
          <Button component={Link} to="/fund" color="inherit">
            Fund allocation
          </Button>
          <Button component={Link} to="/resource" color="inherit">
            Resources
          </Button> */}
          {

            isLoggedIn ? (<Avatar
              sx={{ bgcolor: deepOrange[500] }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            />) : (<Button component={Link} to="/AdminLogin" color="inherit">
            Login
          </Button>)
          }
        </Toolbar>
      </AppBar>

      {/* <Drawer
        variant="temporary"
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: '200px',
            backgroundColor: '#006400',
            color: 'white',
          },
        }}
      > */}
        {/* <Toolbar>
          <IconButton backgroundColor='green' aria-label="close" edge="start" onClick={handleDrawerClose} sx={{ marginRight: 2 }}>
            <CancelIcon />
          </IconButton>
        </Toolbar>
        <List>
          <ListItem button component={Link} to="/dashboard">
            DASHBOARD
          </ListItem>
          <ListItem button component={Link} to="/profile">
            PROFILE
          </ListItem>
          <ListItem button component={Link} to="/Adminlogin">
            
          </ListItem>
          <ListItem button component={Link} to="/Adminlogin">
            LOGOUT
          </ListItem>
        </List>
      </Drawer> */}
      
    </>
  );
};

export default AdminHeader;





