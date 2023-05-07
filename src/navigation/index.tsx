import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-Stack';

import {
  InitialScreen,
  SignUpScreen,
  SignInScreen,
  NameScreen,
  DateScreen,
  WorkoutFrequancyScreen,
  SuccessScreen,
} from '../screens';

export type MainStackParamList = {
  InitialScreen: undefined;
  SignUpScreen: undefined;
  SignInScreen: undefined;
  NameScreen: undefined;
  DateScreen: undefined;
  WorkoutFrequancyScreen: undefined;
  SuccessScreen: undefined;
};
const MainStack = createNativeStackNavigator<MainStackParamList>();

export default function screens() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="InitialScreen" component={InitialScreen} />
        <MainStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <MainStack.Screen name="SignInScreen" component={SignInScreen} />
        <MainStack.Screen name="NameScreen" component={NameScreen} />
        <MainStack.Screen name="DateScreen" component={DateScreen} />
        <MainStack.Screen
          name="WorkoutFrequancyScreen"
          component={WorkoutFrequancyScreen}
        />
        <MainStack.Screen name="SuccessScreen" component={SuccessScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
