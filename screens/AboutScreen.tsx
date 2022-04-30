import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';


export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>AboutScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    }
})