import { StyleSheet, Text, View, Image } from 'react-native'
import * as React from 'react';



export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.abtContainer}>
        <Text style={styles.txt}>This is created by Albus Group</Text>
        <Text style={styles.sy}>School Year 2022</Text>
        <Image source={require('../assets/logo2.png')}
            style={styles.logo} 
        />
        <Text style={styles.text2}>Project for Application Development</Text>
        <Text style={styles.text2}>Created using React Native</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
    },
    abtContainer: {
      backgroundColor:'white',
      padding:30,
      elevation:3,
      borderRadius:10,
      width:'80%',
      marginTop:50,
    },
    txt: {
      fontSize:18,
      textAlign:'center',
      marginVertical: 10,
      color:'#08415C'
    },
    sy: {
      textAlign:'center',
      color: 'gray',
      fontWeight:'bold',
    },
    text2: {
      fontSize: 14,
      color: 'black',
      padding:5,
      textAlign:'center',
    },
    logo: {
      height: '50%',
      width: '100%',
      marginVertical:20
      
    }
})