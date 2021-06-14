import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import DashboardLayout from '../templates/DashboardLayout';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>

        <DashboardLayout>
          <Route path="/" exact>
            <Home />
          </Route>
        </DashboardLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
