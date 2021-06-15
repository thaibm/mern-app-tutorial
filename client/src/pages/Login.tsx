import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LoginForm, { ILoginFormInputs } from '../components/LoginForm';
import { connect } from 'react-redux';
import { loginAction } from '../store/authentication/authenticationActions';
import { RootState } from '../store';
import { useHistory } from 'react-router-dom';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/thaibm">
        ncc.asia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
interface ILoginProps {
  isAuthenticated: boolean;
  login: (payload: ILoginFormInputs) => void;
}

const Login = ({ login, isAuthenticated }: ILoginProps) => {
  const history = useHistory();

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [history, isAuthenticated]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <LoginForm onSubmit={login}></LoginForm>
      </Box>

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: !!state.authentication.token,
  };
};

export default connect(mapStateToProps, { login: loginAction })(Login);
