import React from 'react';
import { useSelector } from 'react-redux';
import AppNav from './AppNav';
import AuthNav from './AuthNav';
function AppNavigator() {
  const authState = useSelector(state => state?.authSlice?.status);

  return <>{authState ? <AppNav /> : <AuthNav />}</>;
}

export default AppNavigator;
