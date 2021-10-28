import React,{Fragment} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input';
import ApiManager from '../util/api/services'
import { Formik } from 'formik';
const LoginScreen=({navigation})=>{
    const handleSubmitData=(values, { setSubmitting })=>{
        const body={
            "mobile":{
                "code":"+91",
                "number":values.number
            },
        }
        ApiManager.loginAccount(body)
        .then(res=>{
            console.log(res.data.data.mobile,"=========")
            navigation.navigate('Otp',{mobile:res.data.data.mobile})
        }).catch(err=>{
            console.log(err,"--------<><>")
        })
    }
    return(
        <View style={style.container}>
        <Formik
         initialValues={{ number: '' }}
          validate={values => {
            const errors = {};
            if(!values.number){
                errors.number="Mobile is Required"
             }
              return errors;
              }}
              onSubmit={handleSubmitData} 
             >
            {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
                 /* and other goodies */
              }) => (
             <Fragment>
                    <Input 
                        value={values.number}
                        onChangeText={handleChange('number')}
                        placeholder={"Mobile"}
                     />
                     {errors.number?<Text style={{color:'red'}}>{errors.number}</Text>:null}
                    <Button title="Login" onPress={handleSubmit}/>
              </Fragment>
            )}
           </Formik>
            <Text 
             onPress={()=>navigation.navigate('Signup')}
            style={style.registertext}>Register now ?</Text>
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
    registertext:{
        color:'#5DB075',
        fontWeight:'bold',
        marginTop:15     
    }
})


export default LoginScreen