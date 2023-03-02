import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Application from './src/navigation/Application';
import ApplicationStatus from './src/navigation/ApplicationStatus';
import AllScreens from './src/components/AllScreens';
import CustomSidebarMenu from './src/components/CustomSidebarMenu';
import HomeScreen from './src/components/HomeScreen';
import ApplicationApply from './src/navigation/ApplicationApply';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <NavigationContainer>
      {auth ? (
        <AllScreens />
      ) : (
        <Drawer.Navigator
          drawerContent={props => <CustomSidebarMenu {...props} />} initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Application" component={Application} />
          <Stack.Screen
            name="Application Status"
            component={ApplicationStatus}
          />
               <Stack.Screen
            name="Next"
            component={ApplicationApply}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;

{
  /* <NavigationContainer>
<Drawer.Navigator
  drawerContent={props => <CustomSidebarMenu {...props} />}>
  <Stack.Screen name="Application" component={Application} />
  <Stack.Screen
    name="Application Status"
    component={ApplicationStatus}
  />
</Drawer.Navigator>
</NavigationContainer> */
}

// (
//   <NavigationContainer>
//    <AllScreens/>
//   </NavigationContainer>
//  )
