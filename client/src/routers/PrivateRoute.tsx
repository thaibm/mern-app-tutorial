import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { RootState } from '../store';

export interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute = ({
  component,
  isAuthenticated,
  ...rest
}: PrivateRouteProps) => {
  const Component = component;
  if (Component != null) {
    return (
      <Route
        {...rest}
        render={(props: any) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: !!state.authentication.token,
  } as PrivateRouteProps;
};

export default connect(mapStateToProps)(PrivateRoute);
