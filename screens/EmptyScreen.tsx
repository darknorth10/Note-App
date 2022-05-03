import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'



export default function EmptyScreen() {
  return (
    <View style={styles.container}>
      <Text>Empty Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        alignItems:"center",
        justifyContent:"center",
    }
})