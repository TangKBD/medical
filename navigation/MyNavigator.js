import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectRoleScreen from '../screens/SelectRoleScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MyNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectRole">
        <Stack.Screen name="SelectRole" component={SelectRoleScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigator;