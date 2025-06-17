import { Container, Typography, Box, Paper, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';

const Lender = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Become a Lender
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Why Lend with Us?
              </Typography>
              <Typography paragraph>
                Join our platform to earn competitive returns while helping others achieve their financial goals.
                Our secure lending platform connects you with verified borrowers.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                How It Works
              </Typography>
              <Typography paragraph>
                1. Sign up as a lender
                2. Set your lending preferences
                3. Browse verified borrowers
                4. Start earning returns
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Lender; 