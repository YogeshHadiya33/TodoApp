
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default function TodoItem({ item, pressHandler }) {
    return (
        <View style={styles.ItemList}>
            <View style={styles.item} >
                <Text styles={styles.ItemText}>{item.title}</Text>
            </View>
            <TouchableOpacity onPress={() => pressHandler(item.id)} style={styles.DeleteIcon}>
                <MaterialIcons name="delete" color="red" size={25} style={styles.Icon} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => pressHandler(item.id)} style={styles.EditIcon}>
                <MaterialIcons name="edit" size={25} color="green" />
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'pink',
        marginTop: 20,
        padding: 13,
        borderStyle: 'dashed',
        borderWidth: 1,         
        borderColor: '#bbb',
        borderRadius: 10,
        flex:8,
    },
    Icon:{
        textAlign:'center',
        alignItems:'center'
    },
    DeleteIcon: {
        backgroundColor: 'pink',
        marginTop: 20,
        padding: 15,
        borderStyle: 'dashed',
        borderWidth: 1,         
        borderColor: '#bbb',
        borderRadius: 10,
        flex: 1,
    },
    EditIcon: {
        flex: 1,
        backgroundColor: 'pink',
        marginTop: 20,
        padding: 13,
        borderStyle: 'dashed',
        borderWidth: 1,         
        borderColor: '#bbb',
        borderRadius: 10,
    },
    ItemText: {
        fontSize: 28,
    },
    ItemList: {
        flexDirection: 'row',
    }
});