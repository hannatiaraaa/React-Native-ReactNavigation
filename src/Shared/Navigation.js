import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity} from 'react-native';
import Home from '../Features/Home/Home';
import About from '../Features/About/About';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'Title',
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Text>Hamburger</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
