import { StatusBar } from 'expo-status-bar';
import { React, useEffect, useState, } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native';
//import * as SQLite from 'expo-sqlite';
import Database from '../www/database';
import { NavigationContainer } from '@react-navigation/native';
import { application } from 'express';
import router from '../server/routes';

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [userpw, setUserpw] = useState('');
/*
  const getData = () => {
    require("../server/routes.js");
    console.log('getData called');
    return fetch('http://localhost:3000/pupil')
  
      .then((response) => response.json())
      .then((json) => {
        return json;

      })

      .catch((error) => {
        console.error(error);
      });

  };


  //const pupildb = SQLite.openDatabase('db.pupil'); // returns Database object
  //const teacherdb = SQLite.openDatabase('db.teacher'); // returns Database object
  function openDatabase() {
    if (Platform.OS === "iOS") {
      return {
        transaction: () => {
          return {
            executeSql: () => {},
          };
        },
      };
    }
    const db = SQLite.openDatabase("userdata.db");
    return db;
  }
  const db = openDatabase();

*/
  function pupilLogin(username, userpw) {
    console.log('pupil login button pressed');
    app.get(pupil);
    console.log(username, userpw);
    navigation.navigate('HomeScreen', {username:username} )
    }

function handleTeacherLogin(e) {
    console.log('Teacher login button pressed');
    console.log(username, userpw);
    navigation.navigate('AdminHomeScreen', {username: username});
      }

function handleSignup(e) { 
    console.log('Signup button pressed');
    console.log(username, userpw);
    navigation.navigate('AdminSignupScreen', {username: username});
        }
  return (

    <KeyboardAvoidingView style={styles.container}>

<TextInput
  label={username}
  style={styles.input}
  placeholder='Username'
  onChangeText={setUsername}
/>
      <TextInput
  label={userpw}
  secureTextEntry={true}
  style={styles.input}
  placeholder='Password'
  onChangeText={setUserpw}
/>


<Pressable style={styles.buttons}
        onPress={() => {   
           pupilLogin(username, userpw);
          }} >
    <Text style={styles.text}>Log In</Text>
    </Pressable>

    <Pressable style={styles.buttons}
        onPress={() => {  handleTeacherLogin();  }} >
    <Text style={styles.text}>Teacher Log In</Text>
    </Pressable>

    <Pressable style={styles.buttons}
        onPress={() => {     handleSignup();    }} >
    <Text style={styles.text}>Teacher Signup</Text>
    </Pressable>

    </KeyboardAvoidingView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

  input: {
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    minWidth: '70%',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
  }
});
