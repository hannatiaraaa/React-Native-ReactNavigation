import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/Shared/Navigation';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
