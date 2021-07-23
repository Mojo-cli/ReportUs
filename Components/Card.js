import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../Constants/Colors'
import { heightToDp, widthToDp } from '../LetMeAdjust'

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
        width:widthToDp('85'),
        height:heightToDp('54'),
        backgroundColor:Colors.cardBackground,
        borderRadius:20,
        overflow:"hidden",
        alignItems:"center"
    }
})
