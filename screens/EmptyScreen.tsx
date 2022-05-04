import { StyleSheet, Text, View, Image } from 'react-native'
import * as React from 'react';



export default function EmptyScreen() {
  return (
    <View style={styles.container}>
      <Text> empty note </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        
    },

    logo: {
      height: '50%',
      width: '100%',
      marginVertical:20
      
    }
})