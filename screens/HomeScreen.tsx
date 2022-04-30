import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useState } from 'react';
import { TextInput } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [note, setNote] = useState("")

    const CreateNotes = async () => {
        const value = await AsyncStorage.getItem('notes')
        const n = value ? JSON.parse(value) : []
        n.push(note)
        await AsyncStorage.setItem('notes', JSON.stringify(n))
        .then(() => setModalVisible(!modalVisible))
        setNote('')
    }
    return(
        <View style={styles.container}>
            <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
         <View style={styles.container}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.hideModal}>
                  <Text style={{color:'#08415C'}}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => setModalVisible(true)} 
            style={styles.savebtn}>
            <Text style={{color:'#08415C'}} onPress={CreateNotes} >Save</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Title</Text>
            <TextInput 
                autoComplete={false} 
                mode="outlined" style={{width:'90%', height:40}} 
                activeOutlineColor='#08415C'/>
            <Text style={styles.title}>Content</Text>
            <TextInput 
                autoComplete={false}
                mode="outlined" style={{width:'100%', fontSize:12}}
                multiline={true} numberOfLines={25}
                activeOutlineColor='#08415C'/>
                value = {note}
                onChangeText = {setNote}
          </View>
        </View>
      </Modal>
            <Text>Home Page</Text>
            <TouchableOpacity style={styles.floatbtn} onPress={() => setModalVisible(!modalVisible)}>
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
    modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      modalView: {
        height:'100%',
        width:'100%',
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
    },
    hideModal: {
        position:"absolute",
        top:0,
        left:0,
        padding:10,
    },
    savebtn: {
        position:"absolute",
        top:0,
        right:0,
        padding:10,
    },
    title: {
        marginTop:20
}
})