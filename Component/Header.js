import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.Header}>
            <StatusBar style="auto" />
            <Text style={styles.TitleText}>My Task</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: 'orange', 
        height: 80,
        alignItems:'center'
    },
    TitleText: {
        fontSize: 25,
        fontWeight:'bold',
        marginTop:30,
        color:'white',
    }
});