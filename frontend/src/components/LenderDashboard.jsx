import { Container, Typography, Box, Paper, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';

const LenderDashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lender Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>Your Portfolio</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Total Invested" secondary="$10,000" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Total Earnings" secondary="$500" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Active Loans" secondary="5" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>Recent Activities</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Loan ID: #001 - Repayment received" secondary="2 hours ago" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Loan ID: #002 - New investment" secondary="1 day ago" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Loan ID: #003 - Interest payment" secondary="3 days ago" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LenderDashboard; 