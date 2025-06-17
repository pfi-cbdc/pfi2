import { Container, Typography, Box, Paper, TextField, Button, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AuthLayout from './AuthLayout';

const Signup = () => {
  return (
    <AuthLayout>
      <Container maxWidth="sm">
        <Box sx={{ mt: 8 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Sign Up
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="body2">
                  Already have an account?{' '}
                  <Link component={RouterLink} to="/login">
                    Login
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </AuthLayout>
  );
};

export default Signup; 