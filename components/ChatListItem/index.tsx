import moment from "moment"
import React from "react"
import { Image, Text, View, TouchableWithoutFeedback } from "react-native"
import { ChatRoom } from "../../types"
import styles from "./style"
import {useNavigation} from "@react-navigation/native"

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
const {chatRoom} = props

const navigation = useNavigation()

const user = chatRoom.users[1]

const onClick = () => {
    navigation.navigate("ChatRoom", {id: chatRoom.id, name: user.name, imageUri: user.imageUri })
}

    return (
        <TouchableWithoutFeedback onPress={onClick} >
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{uri: user.imageUri}} style={styles.avatar} />
            </View>
            <View  style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.lastMessage} ellipsizeMode="tail">{chatRoom.lastMessage.content}</Text>
            </View>
            <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ChatListItem