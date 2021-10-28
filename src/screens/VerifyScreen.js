import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import Button from '../components/Button'
import ApiManager from '../util/api/services'
import {setToken} from '../action/authAction'
import { useDispatch } from 'react-redux'
const VerifyScreen=({navigation})=>{
    const verifyAccount=()=>{
        ApiManager.regComplete()
        .then(res=>{
            navigation.navigate('DrawerStack')
        }).catch(err=>{
            console.log(err,"--------<><>")
        })
    }
    return(
        <View style={style.container}>
            <Image
               source={require('../assets/image/success.png')}
               style={{with:300,height:200}}
               resizeMode={'contain'}
             />
             <Text style={{color:"black",fontSize:20}}>Your account setup account</Text>
            <Button title="Get start" onPress={verifyAccount}/>
        </View> 
    )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
         backgroundColor:'white',
        alignItems:'center'
    },
})

export default VerifyScreen