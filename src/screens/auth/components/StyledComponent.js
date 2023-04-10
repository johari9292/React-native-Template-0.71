import styled from 'styled-components';
import {View, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const MainContainer = styled(View)`
  height: ${height};
  background-color: black;
`;
