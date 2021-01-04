
import React from "react"
import { Image, Text, View, TouchableWithoutFeedback } from "react-native"
import {  User } from "../../types"
import styles from "./style"
import {useNavigation} from "@react-navigation/native"

export type ContactListItemProps = {
    user: User
}

const ContactListItem = (props: ContactListItemProps) => {
const {user} = props

const navigation = useNavigation()

const onClick = () => {
    navigation.navigate("ChatRoom", {id: user.id, name: user.name, imageUri: user.imageUri })
}

    return (
        <TouchableWithoutFeedback onPress={onClick} >
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{uri: user.imageUri}} style={styles.avatar} />
            </View>
            <View  style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ContactListItem