import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView} from 'react-native'

import Colors from '../Constants/Colors';
import Card from '../Components/Card';
import CustomButton from '../Components/CustomButton';

import * as SMS from 'expo-sms';

import { sendEmail } from '../Function/send-email';
import Header from '../Components/Header';
import defaultStyles from '../Constants/defaultStyles';

const ContactUs = (props) => {

    const [ fname, setFname ] = useState("");
    const [ lname, setLname ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ mobileNum, setMobileNum ] = useState("");
    var [ report, setReport ] = useState("");

    const mailHandler = () =>{
        report = fname + lname + '\n' + email + '\n' + mobileNum + '\n\n Report Statement -: ' + report;
        sendEmail(
          'info@redpositive.in',
          'Regarding Application Issue Report',
          report
      ).then(() => {
          console.log('Sent Successfully!');
      });
    }
      
    const smsHandler = async() =>{
        report = fname + lname + '\n' + email + '\n' + mobileNum + '\n\n Report Statement -: ' + report;
        await SMS.sendSMSAsync(
            ['8005563581'],
          report
        );
    }

    const clearFieldHandler = () => {
        setFname("");
        setLname("");
        setEmail("");
        setMobileNum("");
        setReport("");
    }

    return (
       
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
            <SafeAreaView style={styles.container}>

                <StatusBar style="light" />
                <Header title="Contact Us"/>

                <Image source={require('../assets/Contactus.png')} style={styles.image}/>

                <Card style={styles.infoContainer}>
                    
                    <Text style={defaultStyles.title}> Report An Issue </Text>

                    <View style={{padding:10, flexDirection:"row", justifyContent:"space-around"}}>
                        <TextInput style={styles.nameInput}
                            placeholder="First Name"
                            placeholderTextColor="#3B5249"
                            value={fname}
                            onChangeText={(text)=>setFname(text)}
                        />
                        <TextInput style={styles.nameInput}
                            placeholder="Last Name"
                            placeholderTextColor="#3B5249"
                            value={lname}
                            onChangeText={(text)=>setLname(text)}
                        />
                    </View>

                    <TextInput style={styles.input}
                            placeholder="email@address.com"
                            placeholderTextColor="#3B5249"
                            value={email}
                            onChangeText={(text)=>setEmail(text)}
                    />

                    <TextInput style={styles.input}
                            placeholder="Mobile Number"
                            placeholderTextColor="#3B5249"
                            value={mobileNum}
                            onChangeText={(text)=>setMobileNum(text)}
                    />

                    <TextInput style={styles.inputBox}
                            placeholder="Share your issue here"
                            placeholderTextColor="#3B5249"
                            textAlign="left"
                            value={report}
                            onChangeText={(text)=>setReport(text)}
                    />
                    
                </Card>

                <View style={{flexDirection:"row", width:"75%", justifyContent:"space-between"}}>
                    <CustomButton onPress={mailHandler}>
                        Send us a Email!    
                    </CustomButton>
                    <CustomButton onPress={smsHandler}>
                        Send us SMS
                    </CustomButton>
                </View>

                <TouchableOpacity onPress={clearFieldHandler}>
                    <Text style={{marginTop:15, color:"grey", textAlign:"center"}}> Clear fields </Text>
                </TouchableOpacity>

            </SafeAreaView>

        </TouchableWithoutFeedback>

    )
}

export default ContactUs

const styles = StyleSheet.create({
    container: {
        flex: 1,       
        backgroundColor:Colors.screenBackground,
        alignItems:"center",
    },
    infoContainer:{
        margin:20,
        overflow:"hidden",
        alignItems:"center",
        padding:5
    },
    image:{
        width:"60%",
        height:"20%",
        marginTop:20
    },
    nameInput:{
        height:40,
        width:150,
        borderBottomWidth:1,
        margin:10
    },
    input:{
        height:40,
        width:"90%",
        borderBottomWidth:1,
        margin:10
    },
    inputBox:{
        padding:20,
        height:"30%",
        width:"90%",
        borderWidth:1,
        margin:10,
        borderRadius:15,
    }
})
