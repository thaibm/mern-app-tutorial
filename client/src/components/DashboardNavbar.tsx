import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../assets/logo.svg';

const DashboardNavbar = () => {
  return (
    <AppBar elevation={0}>
      <Toolbar>
        <RouterLink to='/'>
          <img src={logo} className='App-logo' alt='logo' />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
