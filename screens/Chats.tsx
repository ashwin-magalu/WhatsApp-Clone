import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ChatListItem from "../components/ChatListItem"
import NewChatButton from '../components/NewChatButton';
import chatRooms from "../data/ChatRooms"

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList data={chatRooms} renderItem={({item})=> 
      <ChatListItem chatRoom={item}  />  
      } keyExtractor={(item)=> item.id} />
      <NewChatButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
