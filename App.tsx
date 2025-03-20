import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Index from './screens';

const RootStack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

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

  return (
    <TabStack.Navigator
      tabBar={(props) => (
        <BottomTabBar { ...props } />
      )}
    >
      <TabStack.Screen
        name="Index"
        component={Index}
      />
    </TabStack.Navigator>
  )
}

export default App;
