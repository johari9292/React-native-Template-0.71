import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components';
import {useDispatch} from "react-redux"
import {logout} from '../../redux/slices/auth';
const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <StyledContainer>
      <Text>Dashboard</Text>

      <StyledButton mode="contained" onPress={() => dispatch(logout())}>
        Logout
      </StyledButton>
    </StyledContainer>
  );
};
const StyledContainer = styled(View)`
  height: 100%;
`;
const StyledButton = styled(Button)`
  position: absolute;
  bottom: 5px;
  right: 10px;
`;
export default Dashboard;
