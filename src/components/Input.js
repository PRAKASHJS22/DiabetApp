import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'

const Input=({placeholder,value,onChangeText})=>{
    return(
        <TextInput
               style={style.container}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
    )

}
const style=StyleSheet.create({
    container:{
        width:'90%',
        height:60,
        backgroundColor:'#E5E5E5',
        borderColor:'#BDBDBD',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginVertical:10
    }
})

export default Input