import React from 'react'
import {View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from '../screens/HomeScreen'
import Subscription from '../screens/Subscription'

const HomeStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
             options={{ headerShown:false  }}
            />
             <Stack.Screen name="Subscription" component={Subscription}   options={{ headerShown:false  }} />
         </Stack.Navigator>
    )

}

export default HomeStack