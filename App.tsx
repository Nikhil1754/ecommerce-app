import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
