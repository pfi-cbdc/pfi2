import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to P2P Project
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          A Full Stack Django React Application
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This is a modern web application built with Django and React.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 