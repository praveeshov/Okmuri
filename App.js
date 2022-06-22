import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Footer } from './src/customcomponanats';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firstpage from './src/firstpage';
import Settings from './src/Settings';
import Dashboard from './src/dashboard';
import Addcontact from './src/addcontact';
import MainSettings from './src/mainsettings';
import Contactlist from './src/contactlist';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="firstpage">
        <Stack.Screen name="firstpage" component={firstpage} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Settings" component={Settings} options={{ headerShown:false }} /> */}
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (

    <Tab.Navigator initialRouteName='Dashboard' tabBar={props => <Footer {...props} />}>
      <Tab.Screen name='addcontact' component={Addcontact} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Tab.Screen name='contactlist' component={Contactlist} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}