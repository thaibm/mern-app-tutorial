import React from 'react';
import { Container, experimentalStyled } from '@material-ui/core';
import DashboardNavbar from '../components/DashboardNavbar';

const DashboardLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
}));

const DashboardLayoutContent = experimentalStyled(Container)(() => ({
  marginTop: 64,
  paddingTop: 30,
  paddingBottom: 30,
}));

const DashboardLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <DashboardLayoutRoot>
      <DashboardNavbar />

      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
