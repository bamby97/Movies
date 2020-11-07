/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import MoviesDisplay from './screens/MoviesDisplay';
import MovieDetail from './screens/MovieDetail';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from './redux/Store';
import { MenuProvider } from 'react-native-popup-menu';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="MoviesDb"
          component={MoviesDisplay}
        />
        <Stack.Screen name="Movie" component={MovieDetail} />
      </Stack.Navigator>
  );
};

const App = () => {
  return(
  <Provider store={store}>
    <MenuProvider>
    <NavigationContainer>
          <MyStack />
    </NavigationContainer>
    </MenuProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
