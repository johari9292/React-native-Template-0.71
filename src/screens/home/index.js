import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';


function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={styles.highlight}>Template </Text>
        <Text style={styles.text}>Already Registered! </Text>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('SignIn')}>
          Login Here
        </Button>
        <Text style={styles.text}>Not Registered Yet</Text>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('SignUp')}>
          Sign Up Here
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
  },
  text: {
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
    // fontSize: 30,
  },
  button: {
    marginHorizontal: 40,
  },
});

export default Home;
