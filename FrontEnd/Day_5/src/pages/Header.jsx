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

const Header = () => {

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
          <Button component={Link} to="/Home" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/apply" color="inherit">
            Apply Now
          </Button>
          <Button component={Link} to="/aboutScheme" color="inherit">
            About schemes
          </Button>
          <Button component={Link} to="/eligibleproject" color="inherit">
            Eligible projects
          </Button>
          <Button component={Link} to="/fund" color="inherit">
            Fund allocation
          </Button>
          <Button component={Link} to="/resource" color="inherit">
            Resources
          </Button>
          {

            isLoggedIn ? (<Avatar
              sx={{ bgcolor: deepOrange[500] }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            />) : (<Button component={Link} to="/login" color="inherit">
            Login
          </Button>)
          }
        </Toolbar>
      </AppBar>

      <Drawer
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
      >
        <Toolbar>
          <IconButton backgroundColor='green' aria-label="close" edge="start" onClick={handleDrawerClose} sx={{ marginRight: 2 }}>
            <CancelIcon />
          </IconButton>
        </Toolbar>
        <List>
          <ListItem button component={Link} to="/DrawDash">
            DASHBOARD
          </ListItem>
          <ListItem button component={Link} to="/LoanStatus">
            LOAN STATUS
          </ListItem>
          <ListItem button component={Link} to="/Adminlogin">
            ADMIN
          </ListItem>
          <ListItem button component={Link} to="/login">
            LOGOUT
          </ListItem>
        </List>
      </Drawer>
      
    </>
  );
};

export default Header;








// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import CancelIcon from '@mui/icons-material/Cancel';
// import { blueGrey, pink, green } from '@mui/material/colors';
// import Fade from '@mui/material/Fade';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import './Dashboard.css';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';

// const Header = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);

//   const handleDrawerOpen = () => {
//     setDrawerOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

  
 
//   return (
    
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', backgroundColor: green[100] }}>
//        <div style={{ backgroundColor: '#006400', height: '18px', width: '100vw' }}></div>
//       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//         <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBGW1nk4sIiFYko6ZtifcYj7KkN4dn0d4JrKaTa3HyKohnkC4hGZjxUsXBHxlN7IE2LkejLSdX0AihyphenhyphendQFKJ1LhjsVLotmvNVHCaOtitxsvx-sn2KLdPXahxWaMveu6oUI8ONL0lSDi-m2QlCkeT8FPH_HeFHTNnI5sZBmpqirtDL3EFpljFPv7-7PgFw/s320/gova%20logo.jpg" alt="Government Logo" style={{ width: '15%', height: 'auto', marginRight: '20px' }} />
//         <div style={{ display: 'flex', justifyContent: 'center' }}></div>
//         <div style={{ display: 'flex', marginLeft: '7%' }}>
//           <h1 style={{ color: 'black', fontSize: '25px' }}>
//             Agriculture Infra Financing Facility<br /><div style={{ height: '5px' }}></div>
//             விவசாய உள்கட்டமைப்பு நிதி வசதி <br /><div style={{ height: '5px' }}></div>
//             Department of Agriculture & Farmers Welfare
//           </h1>
//         </div>
//         <div style={{ width: '32%' }}></div>
//         <img src="https://agriinfra.dac.gov.in/Content/images/AIFRound.gif" alt="Agriculture Infra Financing GIF" style={{ width: '7%', height: 'auto', marginBottom: '20px' }} />
//       </div>
      

//       <AppBar position="static" sx={{ backgroundColor: '#006400', mt: -4 }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen} sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             AgroFunds
//           </Typography>
//           <Button component={Link} to="/apply" color="inherit">
//             Home
//           </Button>
//           <Button component={Link} to="/loan-application" color="inherit">
//             Apply Now
//           </Button>
//           <Button component={Link} to="/about" color="inherit">
//             About schemes
//           </Button>
//           <Button component={Link} to="/about" color="inherit">
//             Eligible projects
//           </Button>
//           <Button component={Link} to="/about" color="inherit">
//             Fund allocation
//           </Button>
//           <Button component={Link} to="/about" color="inherit">
//             Resources
//           </Button>
//           <Button component={Link} to="/contact" color="inherit">
//             Contact Us
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         variant="temporary"
//         anchor="left"
//         open={isDrawerOpen}
//         onClose={handleDrawerClose}
//         sx={{
//           '& .MuiDrawer-paper': {
//             width: '200px',
//             backgroundColor: '#006400',
//             color: 'white',
//           },
//         }}
//       >
//         <Toolbar>
//           <IconButton backgroundColor='green' aria-label="close" edge="start" onClick={handleDrawerClose} sx={{ marginRight: 2 }}>
//             <CancelIcon />
//           </IconButton>
//         </Toolbar>
//         <List>
//           <ListItem button component={Link} to="/dashboard">
//             DASHBOARD
//           </ListItem>
//           <ListItem button component={Link} to="/profile">
//             PROFILE
//           </ListItem>
//           <ListItem button component={Link} to="/change-password">
//             SETTINGS
//           </ListItem>
//           <ListItem button component={Link} to="/settings">
//             LOGOUT
//           </ListItem>
          
//         </List>
//       </Drawer>

//     </div>
//   );
// };

// export default Header;