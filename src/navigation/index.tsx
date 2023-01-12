import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthNavigation from './authNav';

const MainNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigation;
