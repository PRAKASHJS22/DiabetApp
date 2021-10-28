import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import ApiManager from '../util/api/services'
import {setToken} from '../action/authAction'
import { useDispatch } from 'react-redux'
const OTPScreen=({navigation,route})=>{
    const dispatch = useDispatch()
    const [otp,setOtp]=useState('')
    const OtpVerifcation=()=>{
        if(otp.length<5){
            alert('otp is not valid')
        }
        let body={
                "mobile":route.params.mobile,
                "otp":otp
        }
        ApiManager.verifyOtp(body)
        .then(res=>{
            if(res.data.data.regCompleted){
                dispatch(setToken(res.data.data.token))
                navigation.navigate('DrawerStack')
            }else{
                dispatch(setToken(res.data.data.token))
                navigation.navigate('Verify')
            }
        }).catch(err=>{
            console.log(err,"--------<><>")
        })

    }

    return(
        <View style={style.container}>
            <Text style={style.otptext}>Verify OTP</Text>
            <OTPInputView
              style={{
                  width: '80%',
                 height: 200,
                 color:'black'
                }}
                onCodeChanged={(value)=>setOtp(value)}
               pinCount={5}
               autoFocusOnLoad={false}
               codeInputFieldStyle={style.underlineStyleBase}
               codeInputHighlightStyle={style.underlineStyleHighLighted}
              />
              <Button title="Verify" onPress={OtpVerifcation}/>
        </View>
    )

}
const style=StyleSheet.create({
    otpContainer:{
        backgroundColor:'#E5E5E5',
        borderColor:'#BDBDBD',
        borderWidth:1,
        borderRadius:10,
    },
    container:{
        flex:1,
        justifyContent:'center',
         backgroundColor:'white',
        alignItems:'center'
    },
    otptext:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:50
    },
    underlineStyleBase: {
        width: 50,
        height: 65,
        color:'black'
      },
     
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
        color:'black'
      },
})

export default OTPScreen