import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function Navbar() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 , }}>
      
      <AppBar position="static" sx={{backgroundColor:"#009688",textAlign:"center",}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
         >   
           <img src="https://cdn.pixabay.com/photo/2016/09/18/03/40/logo-1677364_960_720.png" style={{width:"180px" }} />
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <span>{"<Steve />"}</span>
          </Typography>
         
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{fontSize:"40px" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}