import { StyleSheet, Text, TouchableOpacity, View, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'

export default function ListNotes({notes, setNotes, handleNoteEditTrigger, handleDelete}: {notes:any, setNotes:any, handleNoteEditTrigger:any, handleDelete:any}) {
  return (
      <View style={styles.container}>
        <FlatList 
            style={styles.container2}
            showsVerticalScrollIndicator={false}
            refreshing={true}
            data={notes}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity style={styles.listItems} 
                     onPress={() => handleNoteEditTrigger(item)}>
                        <Text style={styles.noteDate}>{item.date}</Text>
                        <Text style={styles.noteTitle}>{item.title}</Text>
                            <TouchableOpacity style={styles.delBtn} onPress={() => handleDelete(rowMap, item.key)}>
                                <Text style={styles.delTxt}>Delete</Text>
                            </TouchableOpacity>
                    </TouchableOpacity>
                )
            }}
        />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
    },
    container2: {
        flex:1,
        width:'90%',
    },
    listItems: {
        paddingVertical:25,
        backgroundColor:'white',
        width:'95%',
        marginVertical:10,
        borderRadius:10,
        elevation:2,
        alignSelf:'center'
    },
    noteDate: {
        fontSize:12,
        letterSpacing:2,
        color:'#464646',
        position:'absolute',
        top:10,
        left:10
    },
    noteTitle: {
        fontSize:20,
        textAlign:'center',
        paddingVertical:40,
        color:'#08415C'
    },
    delBtn: {
        position:'absolute',
        width:'100%',
        bottom:0,
    },
    delTxt: {
        backgroundColor:'#A41623',
        color:'white',
        textAlign:'center',
        padding: 5,
        fontSize:17,
        borderWidth:1,
        borderColor:'#E5E5E5',
    }
})

function rowMap(rowMap: any): void {
    throw new Error('Function not implemented.')
}
