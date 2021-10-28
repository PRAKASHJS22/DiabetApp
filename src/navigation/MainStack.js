import React from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AuthStack from './AuthStack'
import DrawerStack from './DrawerStack';
const Stack = createNativeStackNavigator();
import {useSelector, useDispatch} from 'react-redux'


const MainStack=()=>{
    const isLogined=useSelector(state=>state.authReducer.logined)
    console.log(isLogined,"isLogined")
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLogined?"DrawerStack":"AuthStack"}>
                <Stack.Screen name="AuthStack" component={AuthStack}
                 options={
                     {
                         headerShown:false
                     }
                 }
                />
                <Stack.Screen name="DrawerStack" component={DrawerStack} 
                 options={
                    {
                        headerShown:false
                    }
                }
                />
           </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default MainStack