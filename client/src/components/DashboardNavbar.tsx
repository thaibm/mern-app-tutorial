import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../assets/logo.svg';
import LogoutIcon from '@material-ui/icons/Logout';
import { connect } from 'react-redux';
import { logoutAction } from '../store/authentication/authenticationActions';
import { Button, Box } from '@material-ui/core';

const DashboardNavbar = ({ logout }: { logout: () => void }) => {
  return (
    <AppBar elevation={0}>
      <Toolbar>
        <RouterLink to='/'>
          <img src={logo} className='App-logo' alt='logo' />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button color='inherit'>
          <LogoutIcon onClick={logout}></LogoutIcon>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default connect(null, { logout: logoutAction })(DashboardNavbar);
