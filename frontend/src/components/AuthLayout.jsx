import { Box } from '@mui/material';
import AuthNavbar from './AuthNavbar';

const AuthLayout = ({ children }) => {
  return (
    <Box>
      <AuthNavbar />
      {children}
    </Box>
  );
};

export default AuthLayout; 