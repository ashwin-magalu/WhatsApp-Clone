import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const  ChatInput = () => {
const [message, setMessage] = useState("")

const sendMessage = () => {
    //
    setMessage("")
}

    return (
        <View style={inputStyles.container}>
            <View style={inputStyles.mainContainer}>
                <Entypo name="emoji-happy" size={24} color="dimgray" />
                <TextInput style={inputStyles.textInput} placeholder="Type here..." value={message} onChangeText={(text)=> setMessage(text)} multiline={true} />
                <Entypo name="attachment" size={24} color="dimgray" style={inputStyles.icon} />
                {!message &&
                <SimpleLineIcons name="camera" size={24} color="dimgray" style={inputStyles.icon} />
                }
            </View>
            <View style={inputStyles.buttonContainer}>
                {!message ? <FontAwesome name="microphone" size={28} color="white" /> :
                <FontAwesome name="send" size={28} color="white" onPress={sendMessage} />
                }
            </View>
        </View>
    )
}

const inputStyles = StyleSheet.create({
    container:{
        flexDirection: "row",
        margin: 10,
        alignItems: "center",
    },
    mainContainer:{
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 50,
        marginRight:10,
        flex: 1, 
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
        borderWidth: 0,
    },
    icon: {
        marginHorizontal: 5
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default ChatInput