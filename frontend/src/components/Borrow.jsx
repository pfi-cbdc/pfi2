import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import AuthLayout from './AuthLayout';

const Borrow = () => {
  return (
    <AuthLayout>
      <Container maxWidth="lg">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Borrow Money
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Quick and Easy Loans
                </Typography>
                <Typography paragraph>
                  Get the financial support you need with our simple and transparent borrowing process.
                  Competitive rates and flexible terms available for qualified borrowers.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  How It Works
                </Typography>
                <Typography paragraph>
                  1. Sign up as a borrower
                  2. Complete your profile
                  3. Submit loan request
                  4. Get funded quickly
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AuthLayout>
  );
};

export default Borrow; 