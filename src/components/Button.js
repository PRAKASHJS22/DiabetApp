import React from 'react'
import {Text,TouchableOpacity,StyleSheet} from 'react-native'

const Button=({title,onPress})=>{
    return(
        <TouchableOpacity
            onPress={onPress}
            style={style.container}>
            <Text style={style.texStyle}>{title}</Text>    
        </TouchableOpacity> 
    )
}
Button.defaultProps={
    title:"Login",
    onPress:()=>{}
}

const style=StyleSheet.create({
    container:{
        width:'90%',
        height:60,
        backgroundColor:'#5DB075' ,
        borderRadius:50,
        marginVertical:40,
        alignItems:'center',
        justifyContent:'center'
    },
    texStyle:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
})

export default Button