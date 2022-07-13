import { StatusBar } from 'expo-status-bar';
import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable, KeyboardAvoidingView } from 'react-native';
//import * as SQLite from 'expo-sqlite';
//import { openDatabase } from 'expo-sqlite';
import Database from '../www/database';
//import * as FileSystem from 'expo-file-system';
import { NavigationContainer } from '@react-navigation/native';

export default function AdminSignupScreen( {navigation} ) {


  let db = SQLite.openDatabase({name: 'userdata.db', createFromLocation : "../www/userdata.db", location: 'www'},
  (err) => {
    if (err) { return console.error(err.message);  }
  console.log('Connected to the in-memory SQlite database.');
  });     

  const [username, setUsername] = useState('');
  const [userpw, setUserpw] = useState('');
  const [email, setEmail] = useState('');

  
  const setData = () => {
    if (username.length == 0 || userpw.length == 0) {
      console.log('Please write your data')
    }
    else {
      db.transaction((txn) => {
           txn.executeSql(
          "INSERT INTO teacher (username, userpw, emailaddress) VALUES (?, ?, ?)", 
          [username, userpw, email],
            console.log(username, userpw, email),
            console.log('hi heres some nionsfhiese'),
            console.log(txn),            

          (txn, results) => {
              console.log('this will not get logged');
            }
        );
      })
    }
  }

  
  return (
    <KeyboardAvoidingView style={styles.container}>

<Text style={{fontWeight: 'bold', fontSize: 20, color: 'darkgreen'}}>Teacher Signup page</Text>

      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={setUsername}
      />
            <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder='Password'
        onChangeText={setUserpw}
      />

            <TextInput
        style={styles.input}
        placeholder='Email - for Signup use only'
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Pressable style={styles.buttons} 
        onPress={() => {
        handleSignup();  }}>
      <Text style={styles.text}>Sign Up</Text>
      </Pressable>

    </KeyboardAvoidingView>
  );

   function handleLogin(e) {   
    console.log('Login button pressed');
    console.log(username);
    console.log(userpw);
  }
function handleSignup(e) {    setData(); 
  navigation.navigate('AdminHomeScreen');
  console.log('Signup button pressed');
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    minWidth: '70%',
    alignItems: 'center',
  },
    buttons: {
      backgroundColor: 'darkgreen',
      minWidth: '70%',
      borderRadius: 12,
      paddingHorizontal: 10,
      paddingVertical: 12,
      margin: 8,
      alignItems: 'center',
    
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
});
