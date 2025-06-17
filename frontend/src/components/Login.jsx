import { Container, Typography, Box, Paper, TextField, Button, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AuthLayout from './AuthLayout';

const Login = () => {
  return (
    <AuthLayout>
      <Container maxWidth="sm">
        <Box sx={{ mt: 8 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Login
            </Typography>
            <Grid container spacing={3}>
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
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="body2">
                  Don't have an account?{' '}
                  <Link component={RouterLink} to="/signup">
                    Sign up
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

export default Login; 