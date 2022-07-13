
import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable, KeyboardAvoidingView } from 'react-native';
//import * as SQLite from 'expo-sqlite';

export default function ViewPupilScreen(navigation, routes) {

    var studentname = routes.params.studentName;
    console.log(studentname);
    return(
<View>
    <Text>View Pupil Screen</Text>
    <Text>Pupil name: {studentname}</Text>
</View>
    )
}