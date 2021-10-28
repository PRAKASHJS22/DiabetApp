import React, { useEffect,useState } from 'react'
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native'

import Button from '../components/Button'
import Input from '../components/Input';
import ApiManager from '../util/api/services'
import RazorpayCheckout from 'react-native-razorpay';
const Subscription=({route})=>{
    const [loader,setLoader]=useState(true)
    const [data,setData]=useState({})
    useEffect(()=>{
        setData(route.params.id)
       
    },[route.params.id])

   const openRazorPay=()=>{
     const options = {
        description: '',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_aoVyITw2TJWP9K', // Your api key
        amount: '5000',
        name: 'Helmet',
        prefill: {
        email: 'prakashjs22@gmail.com',
        contact: '8553514688',
        name: 'Prakash Stores'
        },
        theme: {color: '#F37254'}
    }
       RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
       });
   }



    if(!data) return null
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
       <View style={style.container}>
           <Image 
              source={ require('../assets/image/ContentBlock.png') }
              style={{width:'100%',height:200}}
              resizeMode={"cover"}
             />
             <View style={{padding:5}}>
              <Text style={{fontWeight:'bold'}}>{data.name}</Text>
              <Text style={{fontWeight:'400',marginBottom:15}}>{data.period}</Text>
              <Text style={{fontWeight:'300',textAlign:'justify'}}>{data.description}</Text>
            </View>
            <Button title="Subscribe" onPress={openRazorPay}/>
       </View>
       </ScrollView>
    )

}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        padding:10
       
    },
})

export default Subscription