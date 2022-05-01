import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useState } from 'react';
import { TextInput } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListNotes from "../components/ListNotes";


export default function HomeScreen() {
    const initialNotes = [{
        date: "03-05-2022",
        title: "Sample",
        key: "1",
    }, {
        date: "03-05-2022",
        title: "PAGOD NA",
        key: "2",
    }, {
        date: "03-04-2022",
        title: "PAGOD NAKO",
        key: "3",
    }, {
        date: "03-04-2022",
        title: "AYOKO NA PO",
        key: "4",
    }

]
    const [notes, setNotes] = useState(initialNotes);

    const [modalVisible, setModalVisible] = useState(false);

    
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
                     <Text style={{color:'#08415C', fontSize:16, padding:5}}>Back</Text>
                     </TouchableOpacity>
                     <TouchableOpacity 
                        onPress={() => setModalVisible(true)} 
                        style={styles.savebtn}>
                     <Text style={{color:'#08415C', fontSize:16, padding:5}}>Save</Text>
                     </TouchableOpacity>
                     <Text style={styles.title}>Title</Text>
                     <TextInput 
                        autoComplete={false}
                        autoCorrect={false}
                        mode="outlined" style={{width:'90%', height:40}} 
                        activeOutlineColor='#08415C'/>
                     <Text style={styles.title}>Content</Text>
                     <TextInput 
                        autoComplete={false}
                        mode="outlined" style={{width:'100%', fontSize:15, padding: 10}}
                        multiline={true} numberOfLines={25}
                        activeOutlineColor='#08415C'/>
                </View>
            </View>
      </Modal>
      
      <ListNotes 
        notes={notes}
        setNotes={setNotes}
     />
      
     <TouchableOpacity style={styles.floatbtn} onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.icon}>
            <Icon 
             name="add"
             size={50}
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
        marginTop: 40
},
 icon: {
     backgroundColor:'#08415C',
     padding:10,
     borderRadius:40
 },
})