import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image, View } from 'react-native';
import Colors from '../constants/Colors';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ChatRoom from '../screens/ChatRoom';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Contacts from '../screens/Contacts';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  //const navigation = useNavigation()
  const onBackPress = () => {
    //
  }

  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: "left",
      headerTitleStyle: {
        fontWeight: "600"
      }
       }} >
      <Stack.Screen name="Root" component={MainTabNavigator} options={{
        title: "WhatsApp", 
        headerRight: ()=> (
          <View 
          style={{display: "flex", flexDirection: "row", width: 80, 
          justifyContent: "space-between", marginRight: 10,}}>
            <FontAwesome name="search" size={22} color="white" />
            <Feather name="more-vertical" size={22} color="white" />
          </View>
        )
      }} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} options={({route})=> ({
        title: route.params.name,
        /* header: () => (
          <View style={{display: "flex", flexDirection: "row" , width: "60%", justifyContent: "space-between", paddingHorizontal: 10}}>
          <Ionicons name="arrow-back" size={22} color="white" onPress={onBackPress} />
          <Image  source={{uri: route.params.imageUri}} style={{height: 40, width: 40, borderRadius: 20, marginHorizontal: 10}} />
          
          </View>
        ), */
        headerRight: ()=> (
          <View style={{flexDirection: "row",width: 100, alignItems: "center", justifyContent: "space-around", marginRight: 10}}>
          <Ionicons name="videocam" size={22} color="white" />
          <MaterialIcons name="call" size={22} color="white" />
          <Entypo name="dots-three-vertical" size={22} color="white" />
          </View>
        )
      })} />
      <Stack.Screen name="Contacts" component={Contacts} options={{ title: 'Contacts' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
