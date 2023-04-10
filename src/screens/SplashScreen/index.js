import React from 'react';
import {View, Dimensions, Image, Text} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import styled from 'styled-components';

const SplashScreen = () => {
  return (
    <StyledContainer>
      <StyledText>Template</StyledText>
      <ActivityIndicator color="white" size={60} />
    </StyledContainer>
  );
};

const StyledText = styled(Text)`
  align-self: center;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
`;
const StyledContainer = styled(View)`
  background-color: red;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default SplashScreen;
