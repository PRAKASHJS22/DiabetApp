import React from 'react'
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native'

const Card=({onPress,item})=>{
    console.log(item,"=======")
    return(
        <TouchableOpacity
          onPress={onPress}
          style={{
                width:'100%',
                height:280,
                borderWidth:0.4,
                borderColor:"#000000"}}>
            <Image 
              source={ require('../assets/image/ContentBlock.png') }
              style={{width:'100%',height:200}}
              resizeMode={"cover"}
             />
             <View style={{padding:5}}>
                <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                <Text style={{fontWeight:'400'}}>{item.description}</Text>
             </View>
        </TouchableOpacity>
    )

}

export default Card