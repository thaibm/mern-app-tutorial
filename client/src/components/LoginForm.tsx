import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface ILoginFormInputs {
  email: string;
  password: string;
  remember: boolean;
}

const schema = yup.object().shape({
  email: yup.string().email('Incorrect email.').required('Email is required.'),
  password: yup.string().required('Password is required.'),
  remember: yup.boolean(),
});

const LoginForm = ({
  onSubmit,
}: {
  onSubmit: (data: ILoginFormInputs) => void;
}) => {
  const { control, handleSubmit } = useForm<ILoginFormInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <Controller
        render={({ field, formState }) => (
          <TextField
            {...field}
            error={!!formState.errors.email}
            helperText={formState.errors.email?.message}
            margin='normal'
            label='Email Address'
            fullWidth
            autoFocus
          />
        )}
        name='email'
        control={control}
        defaultValue=''
      />
      <Controller
        render={({ field, formState }) => (
          <TextField
            {...field}
            error={!!formState.errors.password}
            helperText={formState.errors.password?.message}
            margin='normal'
            required
            fullWidth
            label='Password'
            type='password'
            autoComplete='current-password'
          />
        )}
        name='password'
        control={control}
        defaultValue=''
      />

      <FormControlLabel
        control={
          <Controller
            render={({ field }) => <Checkbox {...field} color='primary' />}
            name='remember'
            control={control}
            defaultValue={false}
          />
        }
        label='Remember me'
      />

      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>

      <Grid container>
        <Grid item xs>
          <Link href='#' variant='body2'>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href='#' variant='body2'>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
