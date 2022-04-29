import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Icon } from "react-native-elements/dist/icons/Icon";

export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <Text>Home Page</Text>
            <TouchableOpacity style={styles.floatbtn} onPress={() => Alert.alert('Task Added!')}>
                <Text>
                    <Icon 
                        name="add"
                        size={30}
                        raised
                        backgroundColor='#08415C'
                        color='#B5FFE1'
                    />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex:1,
       alignItems:"center",
       justifyContent:"center"
    },

    floatbtn: {
        position:"absolute",
        bottom:100,
        right:30
    },
})