/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider as StyleProvider} from 'styled-components';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styled from 'styled-components';
import {theme} from './constants/theme';
import {store, persister,} from './redux/store';
import SplashScreen from "./screens/SplashScreen";
import AppNavigator from './navigations';

const App = () => {
  const [loading, setLoading] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };
  console.log("gdgdgdg",)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return clearTimeout();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <PaperProvider theme={theme}>
          <StyleProvider theme={theme}>
            {loading ? (
              <SplashScreen />
            ) : (
              <AppNavigator/>
            )}
          </StyleProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

const HeaderText = styled(Text)`
  align-self: center;
  font-size: 24px;
`;

export default App;
