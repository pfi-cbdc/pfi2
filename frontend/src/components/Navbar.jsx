import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          P2P Project
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/lender">
            Lender
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
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