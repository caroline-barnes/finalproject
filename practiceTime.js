import React, {useState, useEffect} from 'react';
import { View, UseState, SafeAreaView, Text, TextInput, StyleSheet, Pressable, useWindowDimensions, Component } from 'react-native';
import useToggle from './useToggle';

const PracticeTime = () => {

      var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat', 'Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      var date = new Date().getDate();
      var month = new Date().getMonth()+1;
      var day6 = days[new Date().getDay()];  //the current day of the week
      var day5 = days[new Date().getDay()+6]; //previous day... etc
      var day4 = days[new Date().getDay()+5];
      var day3 = days[new Date().getDay()+4];
      var day2 = days[new Date().getDay()+3];
      var day1 = days[new Date().getDay()+2];

      var today = new Date().getDate();
      var yesterday = new Date().getDate(); //but minus 24 hours

const [length1, setLength1] = useState('45');//lengths of practice time inputted
const [length2, setLength2] = useState('30');
const [length3, setLength3] = useState('20');
const [length4, setLength4] = useState('40');
const [length5, setLength5] = useState('25');
const [length6, setLength6] = useState('30');  
//display numbers as 0 before checking database to supercede them with 
//the actual numbers - means 'undefined' won't be an issue hopefully

 //creating toggle features between two different states
const [isEditable, toggleIsEditable] = useToggle();
<>{isEditable ? 'Click here to update times':'Done updating'}</>
const [editable, toggleEditable] = useToggle();
<>{editable ? false : true }</>

return (

    <SafeAreaView>

    <View style={styles.panel}>

        <View style={styles.flexboxes}>
            <Text style={styles.text}>{day1}</Text>
            <TextInput style={styles.numbers}
            keyboardType="numeric" 
            editable={editable ? true : false} 
            onChangeText={setLength1}>{length1}</TextInput>
            <Text style={styles.text}>minutes</Text></View>

        <View style={styles.whiteflexboxes}>
            <Text style={styles.text}>{day2}</Text>
            <TextInput style={styles.numbers} 
            keyboardType="numeric"
            editable={editable ? true : false}
            onChangeText={setLength2}>{length2}</TextInput>
            <Text style={styles.text}>minutes</Text></View>

        <View style={styles.flexboxes}>
            <Text style={styles.text}>{day3}</Text>
            <TextInput style={styles.numbers} 
            keyboardType="numeric"
            editable={editable ? true: false}
            onChangeText={setLength3}>{length3}</TextInput>
            <Text style={styles.text}>minutes</Text></View>

        <View style={styles.whiteflexboxes}>
            <Text style={styles.text}>{day4}</Text>
            <TextInput style={styles.numbers} 
            keyboardType="numeric"
            editable={editable ? true: false}
            onChangeText={setLength4}>{length4}</TextInput>
            <Text style={styles.text}>minutes</Text></View>

        <View style={styles.flexboxes}>
            <Text style={styles.text}>{day5}</Text>
            <TextInput style={styles.numbers} 
            keyboardType="numeric"
            editable={editable ? true: false}
            onChangeText={setLength5}>{length5}</TextInput>
            <Text style={styles.text}>minutes</Text></View>

        <View style={styles.whiteflexboxes}>
            <Text style={styles.text}>{day6}</Text>
            <TextInput style={styles.numbers} 
            keyboardType="numeric"
            editable={editable ? true: false}
            onChangeText={setLength6}>{length6}</TextInput>
            <Text style={styles.text}>minutes</Text></View>

            </View>

    <Pressable style={styles.buttons}
            onPress={  () => { 
                toggleIsEditable(!isEditable);
                toggleEditable(!editable);
              console.log('Update button pressed');
              }} >
             <Text 
            style={{color: 'white', fontWeight: 'bold'}}>
            {isEditable ? 'Done updating' : 'Click here to update times'}
             </Text>
    </Pressable> 
    
    </SafeAreaView>
 
    );
}

const styles = StyleSheet.create ({
    numbers: {       //editable numbers in TextInput
        fontSize: 30,
        fontWeight: 'bold',
    },
    panel: { //container for practiceTime feature
        flexDirection: 'row', 
        width: '100%', 
        paddingHorizontal: 10, 
        height: "30%",
        },

    flexboxes: {  //every other box in the row
        flex: 1,
        height: '100%', 
        backgroundColor: '#32a852', 
    },

    whiteflexboxes: { //every other box, filled in a contrasting colour
        flex: 1,
        height: '100%', 
        backgroundColor: "white" 
    },

    buttons: { //Pressable to start or finish editing
        backgroundColor: 'darkgreen',
        minWidth: '70%',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 15,
        margin: 15,
        alignItems: 'center',
    },
    text: { //smaller text describing minutes and days of the week
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PracticeTime