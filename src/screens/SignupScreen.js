import React, { Fragment } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Input from '../components/Input'
import Button  from '../components/Button'
import { Formik } from 'formik';
import ApiManager from '../util/api/services'
const SignupScreen=({navigation})=>{
    const handleSubmitData=(values, { setSubmitting })=>{
        console.log(values)
        const body={
            "mobile":{
                "code":"+91",
                "number":values.number
            },
            "name":values.name,
            "email":values.email
        }
        ApiManager.createAccount(body)
        .then(res=>{
            navigation.navigate('Otp',{mobile:res.data.data.mobile})
        }).catch(err=>{
            console.log(err,"--------<><>")
        })

    }
    return(
        <View style={style.container}>
       <Text style={style.logotext}>Sign up</Text>
         <Formik
         initialValues={{ number: '', name: '',email:'' }}
         validate={values => {
            const errors = {};
            if(!values.name){
                errors.name="Name is Required"
            }
            if(!values.number){
                errors.number="Mobile is Required"
             }
             if (!values.email) {
                errors.email = 'Email is Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
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
                    value={values.name}
                     onChangeText={handleChange('name')}
                     placeholder={"Name"}
                     />
                     {errors.name?<Text style={{color:'red'}}>{errors.name}</Text>:null}
                    <Input 
                        value={values.number}
                        onChangeText={handleChange('number')}
                        placeholder={"Mobile"}
                     />
                     {errors.number?<Text style={{color:'red'}}>{errors.number}</Text>:null}
                    <Input
                        value={values.email}
                        onChangeText={handleChange('email')}
                        placeholder={"Email"}/>
                     {errors.email?<Text style={{color:'red'}}>{errors.email}</Text>:null}
                    <Button title="Sign up" onPress={handleSubmit}/>
              </Fragment>
            )}
           </Formik>
        </View>

    )
}

const style=StyleSheet.create({
    closebutton:{
        position:'absolute',
        top:20,
        right:20
    },
    logotext:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:50
    },
    container:{
        flex:1,
        justifyContent:'center',
         backgroundColor:'white',
        alignItems:'center',
       
    }
})   
export default SignupScreen