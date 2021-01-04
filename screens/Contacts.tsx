import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ContactListItem from "../components/ContactListItem"
import NewChatButton from '../components/NewChatButton';
import Users from "../data/Users"

export default function Contacts() {
  return (
    <View style={styles.container}>
      <FlatList data={Users} renderItem={({item})=> 
      <ContactListItem user={item}  />  
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
