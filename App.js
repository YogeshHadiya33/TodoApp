import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Component/Header';
import TodoItem from './Component/TodoItem';

export default function App() {
  const [Todos, SetTodoes] = useState([{
     title: "First Item", id: 1,
  }])
  const [ItemTitle, SetItemTitle] = useState("");
  const AddItemInTodo = () => {
    if (ItemTitle.length > 0) {
      SetTodoes((todo) => {
        return [
          { title: ItemTitle, id: Todos.length + 1 },
          ...todo
        ]

      });
      SetItemTitle("");
      Keyboard.dismiss();
    } else {
      Alert.alert("OOPS!", "Please Enter Title.", [{
        text: "Okay"
      }])
    }


  }
  const pressHandler = (id) => {
    Alert.alert(
      "Delete ?",
      "Are you sure you want to delete this task ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => SetTodoes((todo) => {
          return todo.filter(x => x.id != id);
        }) }
      ]
    );
    

    
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Header Component */}
      <Header />
      <View style={styles.FormBody}>
        <TextInput placeholder="Enter task title" value={ItemTitle} style={styles.TextBox}
          onChangeText={(val) => { SetItemTitle(val) }} />
        <Button title="Add Task" onPress={() => { AddItemInTodo() }} />
      </View>
      <View style={styles.ListBody}>
 
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={Todos}
            renderItem={({ item }) => (
              // Todo Item Component 
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
         
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  FormBody: {
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
  },
  TextBox: {
    width: '90%',
    padding: 10,
    borderWidth: 2,
    borderColor: 'grey',
    marginBottom: 20,
  },
  ListBody: {
    width: '100%',
    padding: 10,
    flex: 1,
  }
});
