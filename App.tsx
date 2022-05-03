import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AppBar } from "@react-native-material/core";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import AboutScreen from './screens/AboutScreen';


function Home() {
  const [ready, setReady]:boolean | any = useState()

  const initialNotes: any[] | (() => any[]) = []
    //notes usestate
    const [notes, setNotes] = useState(initialNotes);

    // Async
    const getNotes = async ():Promise<any> => {
      try {
        const note = await AsyncStorage.getItem('storedNote')
        return note != null ? setNotes(JSON.parse(note)) : null;
      } catch(e) {
          console.log(e)
      }
    }
    if(!ready) {
      return (
        <AppLoading 
           startAsync={getNotes}
           onFinish={() => setReady(true)}
           onError={console.warn}
         />
      )
    }

    // Calls Home screen
  return (
      <HomeScreen
        notes={notes}
        setNotes={setNotes}
      />
  );
}

function About() {
  return (
    <AboutScreen />
  );

}

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <AppBar title="Notes"
        color='#08415C'
      />
       <Tab.Navigator
      initialRouteName="Home"
      activeColor="#B5FFE1"
      inactiveColor='gray'
      shifting
      barStyle={{ backgroundColor: '#08415C' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'Abouts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
      flex:1,
      flexDirection: "column",
      alignItems:"center",
      backgroundColor: '#fff',
  },
  header: {
      padding:15,
      width: '100%',
      fontSize: 13,
      color: '#000',
      backgroundColor: '#FCA311'
  },

})