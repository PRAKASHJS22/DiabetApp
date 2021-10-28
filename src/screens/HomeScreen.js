import React, { useEffect,useState } from 'react'
import {View,Text,StyleSheet,ActivityIndicator} from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input';
import Card from '../components/Card'
import {login} from '../action/authAction'
import { useDispatch } from 'react-redux'
import ApiManager from '../util/api/services'
import { FlatList } from 'react-native-gesture-handler';
const HomeScreen=({navigation})=>{
    const [data,setData]=useState([])
    const [loader,setLoader]=useState(true)
    
    useEffect(()=>{
        ApiManager.getPlan()
         .then(res=>{
             console.log(res.data.data)
            setLoader(false)
            setData(res.data.data)
         })
         .catch(err=>{
            setLoader(false)
         })
    },[])

    if(loader){
        return(
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'}}>
                    <ActivityIndicator color="white" size={'small'}/>
            </View>
        )
    }
    return(
       <View style={style.container}>
           <FlatList
             data={data}
             renderItem={({item})=>
                <Card onPress={()=>{
                    navigation.navigate('Subscription',{id:item})
                }} item={item}/>
            }
            />
       </View>
    )

}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:20
      
    },
})

export default HomeScreen