import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firstpage from './src/firstpage';
import Settings from './src/Settings';


const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="firstpage">
        <Stack.Screen name="firstpage" component={firstpage} options={{ headerShown:false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};