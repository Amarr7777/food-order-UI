import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Navigation from './navigation';
import store from './app/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}


