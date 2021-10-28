import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import Button from '../components/Button'
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import {logout} from '../action/authAction'
const CusomDrawer=(props)=>{
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const Logout=()=>{
       dispatch(logout())
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'AuthStack' },
              ],
            })
          );
    }
  return(
          <View style={style.container}>
             <Text style={style.textColor} onPress={Logout}>Log out</Text>
          </View>
  )
}
const style=StyleSheet.create({
    textColor:{
        color:'red',
        fontSize:20,
        fontWeight:'700',
        marginBottom:50
    },
    container:{
        flex:1,
        justifyContent:'flex-end',
         backgroundColor:'white',
        alignItems:'center'
    },
})
export default  CusomDrawer