import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

 const NewChatButton =() => {

    const navigation = useNavigation()

    const newChat = () => {
        navigation.navigate("Contacts")
    }

    return (
        
        <View style={chatStyles.container}>
            <TouchableOpacity onPress={()=> newChat()}>
            <Ionicons name="chatbubbles-sharp" size={28} color="white" style={chatStyles.icon} />
        </TouchableOpacity>
        </View>
    )
}

const chatStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.tint,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    icon: {}
})

export default NewChatButton