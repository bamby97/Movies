/**
 * @format
 
*/
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MoviesDisplay from './screens/MoviesDisplay';
import MovieDetail from './screens/MovieDetail';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer   } from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MoviesDisplay}
        />
        <Stack.Screen name="Profile" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
AppRegistry.registerComponent(appName, () => App);
export default MyStack;

