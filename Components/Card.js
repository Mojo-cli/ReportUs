import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../Constants/Colors'

const Card = (props) => {
    return (
        <View style={{...styles.background, ...props.style}}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    background:{
        width:"90%",
        height:"50%",
        backgroundColor:Colors.cardBackground,
        borderRadius:20
    }
})
