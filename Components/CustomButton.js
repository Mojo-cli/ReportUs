import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { heightToDp, widthToDp } from '../LetMeAdjust'

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
        width:widthToDp('31'),
        height:heightToDp('5'),
        backgroundColor:"#184D47",
        borderRadius:widthToDp('2'),
        paddingTop:heightToDp('1'),
        elevation:4
    },
    buttonTitle:{
        fontSize:widthToDp('4'),
        textAlign:"center",
        fontWeight:"bold",
        color:"white"
    }
})
