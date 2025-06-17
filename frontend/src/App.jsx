import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Lender from './components/Lender';
import Login from './components/Login';
import Signup from './components/Signup';
import LenderDashboard from './components/LenderDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Borrower from './pages/Borrower';
import { Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const Profile = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4">User Profile</Typography>
      <Typography variant="body1">This is your profile page. More details will be added here.</Typography>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lender" element={<Lender />} />
          <Route path="/borrower" element={<Borrower />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<div style={{ padding: '20px', textAlign: 'center' }}><Typography variant="h4">Contact Us</Typography></div>} />

          <Route element={<ProtectedRoute />}>
            <Route path="/lender-dashboard" element={<LenderDashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
