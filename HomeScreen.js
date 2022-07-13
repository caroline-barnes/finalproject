import { useLinkProps } from '@react-navigation/native';
import { React, useState} from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Pressable } from 'react-native';
import PracticeTime  from '../components/practiceTime';

export default function HomeScreen({ route, navigation }) {
 
    const userFirstName = route.params.username; // username set from previous screen
    return (
      <SafeAreaView style={styles.container}>
          <Text> Hi {userFirstName}, welcome back!</Text>
          
            <Text style={styles.headingText}>Practice Time this week</Text>
        
          <PracticeTime />

  <Text>Lesson notes for your last lesson below: </Text>
    <TextInput style={{height: '30%', 
    borderWidth: 1, 
    padding: 5, 
    marginTop: 0,
    //multiline: 'true', idk why this one isn't working doesnt matter anyway
    borderColor: 'black'}}

    placeholder="Lesson notes will go here when they are inputted into the system
    - whether photographic or text-based. Ideally photos could be taken of hand
-written notes and uploaded to the system for access
Multiline maybe?"
    />  

<Pressable style={styles.buttons} onPress={  () => { 
          console.log('chat button pressed');
        }}>
          <Text style={{color:'white', fontWeight:'bold'}}>
            Click to message your teacher
            </Text>
            </Pressable>    

          </SafeAreaView>
    )     //Lesson Notes will go here, most likely in image format  
}     //probably link to another page listing previous lesson notes with corresponding date

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },

    headingText: {
        fontSize: 25, 
        fontWeight: 'normal', 
        color: 'darkgreen',
        paddingVertical: 5,
    },
    buttons: {
        backgroundColor: 'darkgreen',
        minWidth: '90%',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 15,
        margin: 15,
        alignItems: 'center',
    }
  });