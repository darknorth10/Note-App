import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'

export default function ListNotes({notes, setNotes, handleNoteEditTrigger}: {notes:any, setNotes:any, handleNoteEditTrigger:any}) {

  return (
      <View style={styles.container}>
        <FlatList 
            style={styles.container2}
            showsVerticalScrollIndicator={false}
            refreshing={true}
            data={notes}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity style={styles.listItems} onPress={() => handleNoteEditTrigger(item)}>
                        <Text style={styles.noteDate}>{item.date}</Text>
                        <Text style={styles.noteTitle}>{item.title}</Text>
                        <Text style={styles.noteContent}>{item.content}</Text>
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
        paddingHorizontal:45,
        paddingVertical:30,
        color:'#08415C'
    },
    noteContent: {
        fontSize:14,
        textAlign:'center',
        paddingHorizontal:40,
    }
})