import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';


export default function AddPupilScreen() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (

    <KeyboardAvoidingView style={styles.container}>



<TextInput
  style={styles.input}
  placeholder='Pupil username'
  onChangeText={setUsername}
/>
      <TextInput
  secureTextEntry={true}
  style={styles.input}
  placeholder='Pupil password'
  onChangeText={setPassword}
/>


<Pressable style={styles.buttons}
        onPress={() => {
        console.warn('Register button pressed');  }} >
    <Text style={styles.text}>Register new student</Text>
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
