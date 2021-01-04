import React from 'react'
import { View, Text, FlatList, ImageBackground } from 'react-native'
import {useRoute} from "@react-navigation/native"
import ChatMessage from "../components/ChatMessage"
import Messages from "../data/Chats"
import ChatInput from '../components/ChatInput/ChatInput'
import BG from "../assets/images/BG.png"

export default function ChatRoom() {
const route = useRoute()


    return (
        <ImageBackground source={BG} style={{width: "100%", height: "100%", display: 'flex'}}>
        <FlatList data={Messages.messages} 
        renderItem={({item})=> (
            <ChatMessage message={item} />
        )}
        />
        <ChatInput />
        </ImageBackground>
        )
}
