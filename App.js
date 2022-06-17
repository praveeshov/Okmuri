import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Footer } from './src/customcomponanats';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firstpage from './src/firstpage';
import Settings from './src/Settings';
import Dashboard from './src/dashboard';


const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="firstpage">
        <Stack.Screen name="firstpage" component={firstpage} options={{ headerShown:false }} />
        {/* <Stack.Screen name="Settings" component={Settings} options={{ headerShown:false }} /> */}
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown:false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};



const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
 
    <Tab.Navigator initialRouteName='Dashboard' tabBar={props => <Footer {...props} />}>
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}