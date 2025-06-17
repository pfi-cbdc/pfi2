import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          P2P Project
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {isLoggedIn ? (
            <>
              <Button color="inherit" component={Link} to="/lender">
                Lender
              </Button>
              <Button color="inherit" component={Link} to="/profile">
                Profile
              </Button>
              <Button 
                color="inherit" 
                onClick={handleLogout}
                variant="outlined"
                sx={{ 
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/lender">
                Lender
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/signup"
                variant="outlined"
                sx={{ 
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Sign Up
              </Button>
            </>
          )}
          <Button 
            color="inherit" 
            component={Link} 
            to="/contact"
            variant="outlined"
            sx={{ 
              borderColor: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 