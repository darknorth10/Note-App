import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AppBar } from "@react-native-material/core";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function Home() {
  return (
    <HomeScreen />
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );

}

const Tab = createMaterialBottomTabNavigator();


export default function App(): JSX.Element {
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