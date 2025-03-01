import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox, StatusBar } from 'react-native';
import colors from './src/assets/colors/AppColors';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
LogBox.ignoreAllLogs()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.bgClr} barStyle={'dark-content'} />
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
