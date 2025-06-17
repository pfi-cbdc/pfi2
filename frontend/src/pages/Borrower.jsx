import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Snackbar,
  Alert
} from '@mui/material';

const Borrower = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/users/waitlist/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setEmail('');
      } else {
        // Handle error response
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to join waitlist. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        py: 8
      }}
    >
      <Container maxWidth="md">
        <Paper 
          elevation={3} 
          sx={{ 
            p: 6, 
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.95)'
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Join Our Borrower Waitlist
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Be the first to know when we launch our borrower program. Get early access and exclusive benefits.
          </Typography>
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ 
              mt: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: '400px',
              mx: 'auto'
            }}
          >
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit"
              variant="contained"
              size="large"
              sx={{ 
                mt: 2,
                py: 1.5,
                backgroundColor: '#2196F3',
                '&:hover': {
                  backgroundColor: '#1976D2'
                }
              }}
            >
              Join Waitlist
            </Button>
          </Box>
        </Paper>
      </Container>
      <Snackbar 
        open={showSuccess} 
        autoHideDuration={6000} 
        onClose={() => setShowSuccess(false)}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success"
        >
          Thanks for joining our waitlist! We'll keep you updated.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Borrower; 