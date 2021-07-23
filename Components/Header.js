import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../Constants/Colors'

import defaultStyles from '../Constants/defaultStyles'
import { heightToDp, widthToDp } from '../LetMeAdjust'

const Header = (props) => {
    return (
        <View style={{...styles.background, ...props.style}}>
            <Text style={defaultStyles.headerTitle}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    background:{
        width:"100%",
        height:heightToDp('10'),
        backgroundColor:Colors.headerBackground,
        justifyContent:"center"
    },
})
