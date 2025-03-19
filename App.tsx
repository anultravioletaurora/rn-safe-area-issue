import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import {
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Index from './screens';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function Navigation(): React.JSX.Element {

  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Tabs"
        component={Tabs}
      />
    </RootStack.Navigator>
  )
}

function Tabs(): React.JSX.Element {
  const TabStack = createBottomTabNavigator();

  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Index"
        component={Index}
      />
    </TabStack.Navigator>
  )
}

export default App;
