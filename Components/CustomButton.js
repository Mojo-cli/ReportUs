import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

const CustomButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.buttonBackground, ...props.style}}>
                <Text style={{...styles.buttonTitle, ...props.style}}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonBackground:{
        width:130,
        height:30,
        backgroundColor:"#184D47",
        borderRadius:10,
        padding:5,
        elevation:4
    },
    buttonTitle:{
        fontSize:15,
        textAlign:"center",
        fontWeight:"bold",
        color:"white"
    }
})
