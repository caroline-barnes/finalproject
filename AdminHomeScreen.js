import { useLinkProps } from '@react-navigation/native';
import { React, useState} from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function AdminHomeScreen ( {navigation, route} ) {

  var username = route.params.username;
   var studentName = 'RoisinF';
   var studentName2 = 'PatrickD';

   return (
      <View>
         <Text>Hi {username}, welcome back! </Text>
         <Text>Click on students' names to view their page</Text>
         <Pressable style={styles.panel}
         onPress={() => {
               console.log('View pupil button pressed');
               navigation.navigate("ViewPupilScreen", {studentName:studentName});
         }}> 
            <Text style={styles.text}>
               {studentName}'s page
            </Text>
         </Pressable>

         <Pressable style={styles.buttons} 
        onPress={() => {
        console.log('add pupil button pressed');  
        navigation.navigate("AddPupilScreen");
        }}>
      <Text style={styles.text}>Add New Pupil</Text>
      </Pressable>
      </View>
   ) 
}

const styles = StyleSheet.create({
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
   },
   panel: {
      //height: '20%',
      width: '95%',
      borderColor: 'black',
      borderWidth:1,
      borderRadius: 12,
      backgroundColor: '#32a852',
      margin: 5,
      alignItems: 'center',
      paddingVertical: 12,
   }
});

{/* 

SELECT * FROM pupil WHERE teacherid = teacherid
get number of results
if number=0 - button 'add your first student'
whatever number is - make that many buttons
---button 'add another student'
get array of students to put names in
separate button for all messages/chats? probably

*/}

