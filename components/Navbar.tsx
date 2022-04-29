import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

export default function Navbar() {
    return(
    <View style={styles.container}>
        <View style={styles.navcon}>
            <TouchableOpacity style={styles.navdiv}>
                <Text style={styles.navbtn}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navdiv}>
                <Text style={styles.navbtn}>About</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position:"absolute",
        bottom:0,
        height:'auto',
        width:'100%',
        backgroundColor: '#14213D',
        padding:5
    },
    navcon: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    navdiv: {
        flex:1,
        alignItems:"center",
    },
    navbtn: {
        color: '#fff',
        paddingVertical:7,
    }
    
})