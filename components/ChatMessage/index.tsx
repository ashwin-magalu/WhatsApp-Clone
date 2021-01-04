import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Message} from "../../types"
import moment from "moment"

export type ChatMessageProps = {
    message: Message,

}

const ChatMessage =(props: ChatMessageProps) => {
const {message} = props

const isMyMessage = () => {
    return message.user.id === "u1"
}

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, 
                {
                    backgroundColor: isMyMessage() ? "#dcf8c5":  "white",
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                }
            ]}>
            {isMyMessage() ? null : <Text style={styles.name}>{message.user.name}</Text>}
            <Text style={styles.message}>{message.content}</Text>
            <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    messageBox: {
        borderRadius: 5,
        padding: 10,
    },
    name: {
        fontWeight: "700",
        fontSize: 14,
        color: "cadetblue",
        marginBottom: 5,
    },
    message: {
        fontSize: 16,
        fontWeight: "500",
        color: "black",
    },
    time: {
        color: "dimgray",
        alignSelf: "flex-end"
    }

})

export default ChatMessage