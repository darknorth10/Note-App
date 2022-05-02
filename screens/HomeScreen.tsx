import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal, ToastAndroid } from 'react-native';
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
    },
]
    //notes usestate
    const [notes, setNotes] = useState(initialNotes);

    //modal usestate
    const [modalVisible, setModalVisible] = useState(false);

    //input values
    const [addNoteTitle, setAddNoteTitle]:any = useState();
    const [addNoteContent, setAddNoteContent]:any = useState();

    // adding new notes
    const addNewNote = (note: any) => {
        const newNote = [...notes, note]
        setNotes(newNote);
    }

    //closing modal
    const handleCloseModal = () => {
        setAddNoteTitle('')
        setAddNoteContent('')
        setModalVisible(false)
    }

    //saving note
    const handleSubmit = () => {
        if(!noteToBeEdited) {
            if(addNoteContent !== '') {
                addNewNote({
                    title: addNoteTitle,
                    date: new Date().toUTCString(),
                    content: addNoteContent,
                    key: `${(notes[notes.length-1] && parseInt(notes[notes.length -1].key) + 1) || 1}`
                });
                handleCloseModal()
            }
            else {
                alert("Please input some content before saving.")
            }
        } else {
            handleNoteEdit({
                title: addNoteTitle,
                date: new Date().toUTCString(),
            })
        }

        
        
    }

    const [noteToBeEdited, setNoteToBeEdit] = useState(null)
    // handling edit note trigger
    const handleNoteEditTrigger = (notes: any) => {
        setNoteToBeEdit(notes);
        setModalVisible(true);
        setAddNoteTitle(notes.title);
        setAddNoteContent(notes.content);
    }
    // NOTE EDIT
    const handleNoteEdit = (editedNote: any) => {
        const newNote:any = [...notes];
        const noteIndex = notes.findIndex((note) => note.key === editedNote.key);
        newNote.splice(noteIndex, 1, editedNote);
        setNotes(newNote);
        setNoteToBeEdit(null);
        setModalVisible(false);
    }

    return(
        <View style={styles.container}>

         <Modal
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
             <View style={styles.container}>
                 <View style={styles.modalView}>
                     <TouchableOpacity
                        onPress={() => handleCloseModal()}
                        style={styles.hideModal}>
                     <Text style={{color:'#08415C', fontSize:16, padding:5}}>Back</Text>
                     </TouchableOpacity>
                     <TouchableOpacity 
                        style={styles.savebtn}>
                     <Text
                        style={{color:'#08415C', fontSize:16, padding:5}}
                        onPress = {handleSubmit}
                      >Save</Text>
                     </TouchableOpacity>
                     <Text style={styles.title}>Title</Text>
                     <TextInput 
                        autoComplete={false}
                        autoCorrect={false}
                        mode="outlined" style={{width:'90%', height:40}} 
                        activeOutlineColor='#08415C'
                        onChangeText={(text) => setAddNoteTitle(text)}
                        value={addNoteTitle}
                        onSubmitEditing = {handleSubmit}
                        />
                     <Text style={styles.title}>Content</Text>
                     <TextInput 
                        autoComplete={false}
                        mode="outlined" style={{width:'100%', fontSize:15, padding: 10}}
                        multiline={true} numberOfLines={25}
                        activeOutlineColor='#08415C'
                        onChangeText={(text) => setAddNoteContent(text)}
                        value={addNoteContent}
                        onSubmitEditing = {handleSubmit} 
                    />
                </View>
            </View>
      </Modal>
      
      <ListNotes 
        notes={notes}
        setNotes={setNotes}
        handleNoteEditTrigger={handleNoteEditTrigger}
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