import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Our Mission
              </Typography>
              <Typography paragraph>
                We're dedicated to creating a more accessible and transparent financial ecosystem
                by connecting lenders and borrowers directly through our secure platform.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Our Vision
              </Typography>
              <Typography paragraph>
                To revolutionize peer-to-peer lending by making it simple, secure, and beneficial
                for everyone involved in the process.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 