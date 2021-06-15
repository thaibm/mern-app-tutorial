import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import DashboardLayout from '../templates/DashboardLayout';
import PrivateRoute from './PrivateRoute';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact>
          <Login />
        </Route>

        <DashboardLayout>
          <PrivateRoute path='/' exact component={Home} />
        </DashboardLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
