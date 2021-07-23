import { StyleSheet } from "react-native";
import { heightToDp, widthToDp } from "../LetMeAdjust";
import Colors from "./Colors";

export default StyleSheet.create({
    headerTitle:{
        fontSize:widthToDp('5'),
        textAlign:'left',
        color:"white",
        paddingTop:heightToDp("2"),
        paddingLeft:widthToDp('2')
    },
    title:{
        fontSize:18,
        color:Colors.textColor
    },
    normalText:{
        fontSize:18,
        color:Colors.textColor
    }
})