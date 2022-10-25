import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RandomDrink from './Components/RandomDrink';
import { Provider } from 'react-redux';
import store from './redux/store/';


export default function App() {
  return (
    <Provider store={store}>
      <RandomDrink/>
    </Provider>
  );
}


