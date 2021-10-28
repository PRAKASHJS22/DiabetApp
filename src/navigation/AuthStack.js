import React from 'react'
import {View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import OTPScreen from '../screens/OTPScreen';
import VerifyScreen from '../screens/VerifyScreen'

const AuthStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}
             options={ {   headerShown:false } }
            />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Otp" component={OTPScreen} />
            <Stack.Screen name="Verify" component={VerifyScreen} />
       </Stack.Navigator>
    )
}

export default AuthStack