// React & Expo Dependencies
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {    StyleSheet, 
            Text, 
            View, 
            Image, 
            TextInput, 
            TouchableWithoutFeedback, 
            Keyboard,  
            ScrollView, 
} from 'react-native'

import { setFirstName, setLastName, setNumber, setMail, setIssue } from '../Store/actions';

import {useSelector, useDispatch} from 'react-redux';

// Custom Components
import Colors from '../Constants/Colors';
import Card from '../Components/Card';
import CustomButton from '../Components/CustomButton';


import { widthToDp, heightToDp } from '../LetMeAdjust';


// SMS & Mail 
import * as SMS from 'expo-sms';

import { sendEmail } from '../Function/send-email';


const ContactUs = (props) => {

    const fname = useSelector((state) => state.fname);
    const lname = useSelector((state) => state.lname);
    const number = useSelector((state) => state.number);
    const mail = useSelector((state) => state.mail);
    const issue = useSelector((state) => state.issue);

    const dispatch = useDispatch();

    const mailHandler = () =>{
        var report = fname + lname + '\n' + mail + '\n' + number + '\n\n Report Statement -: ' + issue;
        sendEmail(
          'info@redpositive.in',
          'Regarding Application Issue Report',
        report
      ).then(() => {
          console.log('Sent Successfully!');
      });
        dispatch(setFirstName(''));
        dispatch(setLastName(''));
        dispatch(setNumber(''));
        dispatch(setMail(''));
        dispatch(setIssue(''));
    }
      
    const smsHandler = async() =>{
        var report = fname + lname + '\n' + mail + '\n' + number + '\n\n Report Statement -: ' + issue;
        await SMS.sendSMSAsync(
            ['8005563581'],
          report
        );
        dispatch(setFirstName(''));
        dispatch(setLastName(''));
        dispatch(setNumber(''));
        dispatch(setMail(''));
        dispatch(setIssue(''));
    }

    return (

        <View style={styles.container}>

            <StatusBar style="light" backgroundColor={Colors.headerBackground}/>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <ScrollView contentContainerStyle={{alignItems:"center"}}>

                    <Image source={require('../assets/Contactus.png')} style={styles.img}/>

                    <Card style={styles.infoContainer}>

                        <Text style={{fontSize:widthToDp("4"), color:Colors.textColor}}> Report an Issue </Text>

                        
                            <View style={styles.nameContainer}>
                                <TextInput 
                                    style={styles.nameInput}
                                    placeholder="First Name"
                                    value={fname}
                                    onChangeText={(text) => {dispatch(setFirstName(text))}}
                                />
                                <TextInput 
                                    style={styles.nameInput}
                                    placeholder="Last Name"
                                    value={lname}
                                    onChangeText={(text) => {dispatch(setLastName(text))}}    
                                />
                            </View>
                            <TextInput 
                                style={styles.contactInput}
                                placeholder="Contact number"
                                keyboardType="number-pad"
                                maxLength={10}
                                value={number}
                                onChangeText={(text) => {dispatch(setNumber(text.replace(/[^0-9]/g, '')))}} 
                            />
                            <TextInput 
                                style={styles.contactInput}
                                placeholder="Mail id"
                                keyboardType="email-address"
                                value={mail}
                                onChangeText={(text) => {dispatch(setMail(text))}} 
                            />
                            <TextInput
                                style={styles.issueBox}
                                placeholder="Type your issue here"
                                value={issue}
                                onChangeText={(text) => {dispatch(setIssue(text))}}
                            />

                            <View style={styles.buttonContainer}> 

                                <CustomButton onPress={mailHandler}>
                                    Send us mail !
                                </CustomButton>

                                <CustomButton onPress={smsHandler}>
                                    Send us SMS !
                                </CustomButton>

                            </View>
                        
                    </Card>

                </ScrollView>

            </TouchableWithoutFeedback>

        </View>

    )
}

export default ContactUs


// Styling's
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        paddingVertical:heightToDp('2'),
        paddingHorizontal:widthToDp('2')
    },
    img:{
        height:heightToDp('30'),
        width:widthToDp('58')
    },infoContainer:{
        paddingVertical:heightToDp('2'),
        paddingHorizontal:widthToDp('5'),
    },
    nameContainer:{
        width:"100%",
        flexDirection:"row",
        marginHorizontal:widthToDp('2'),
        marginVertical:heightToDp('4'),
        height:heightToDp('2')
    },
    nameInput:{
        width:widthToDp('31.5'),
        borderBottomWidth:1,
        marginHorizontal:widthToDp('3'),
        height:heightToDp('5'),
        fontSize:widthToDp('3.6'),
        color:Colors.textColor
    },
    contactInput:{
        width:widthToDp('69'),
        borderBottomWidth:1,
        marginHorizontal:widthToDp('4'),
        height:heightToDp('5'),
        marginVertical:heightToDp('2'),
        fontSize:widthToDp('3.6'),
        color:Colors.textColor
    },
    issueBox:{
        width:widthToDp('69'),
        borderWidth:1,
        marginHorizontal:widthToDp('4'),
        height:heightToDp('9'),
        marginVertical:heightToDp('2'),
        fontSize:widthToDp('3.6'),
        color:Colors.textColor,
        paddingHorizontal:widthToDp('3'),
        borderRadius:widthToDp('4')
    },
    buttonContainer:{
        flexDirection:"row",
        width:"90%",
        justifyContent:"space-between",
        marginVertical:heightToDp('1')
    }
})
