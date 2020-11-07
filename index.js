/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import MoviesDisplay from './screens/MoviesDisplay';
//import MovieDetail from './screens/MovieDetail';
//import { StackNavigator } from 'react-navigation';

/*const Navigation = StackNavigator({
    home : {
        screen : MoviesDisplay
    },
    detail : {
        screen : MovieDetail
    },
},{
    headerMode: 'none'
});
 */
//export default Navigation;
AppRegistry.registerComponent(appName, () => App);
