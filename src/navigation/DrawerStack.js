import React from 'react'
import {View} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import HomeStack  from './HomeStack';
import CusomDrawer from './CusomDrawer'
const DrawerStack=()=> {
    return (
      <Drawer.Navigator
       drawerContent={props => <CusomDrawer {...props} />} 
        screenOptions={{
          // overlayColor: 'transparent'
        }}
      >
        <Drawer.Screen name="Home" component={HomeStack} />
        
      </Drawer.Navigator>
    );
  }

  export default DrawerStack