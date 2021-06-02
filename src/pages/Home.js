import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet, 
    SafeAreaView, 
    TextInput, 
    Platform,
    TouchableOpacity
 } from 'react-native';


export function Home(){
    const [newSkill, setNewSkill]= useState('');
    const [mySkills, setMySkills]= useState([]);

    function handleAddNewSkill(){
        setMySkills(oldState=> [...oldState, newSkill])
    }
    return(

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Welcome, João
            </Text>
            <TextInput 
                style={styles.input}
                placeholder= 'New skill'
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />
            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>
                    Add
                </Text>
            </TouchableOpacity>

            <Text style={[styles.title, {marginVertical: 40}]}>
                My Skills
            </Text>
            
            {
                mySkills.map(skill=> (  
                    <TouchableOpacity key={skill} style={styles.buttonSkill}>
                        <Text style={styles.textSkill}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))   
            }
        </SafeAreaView>

    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical:70
      },
      title: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
      },
      input:{
          backgroundColor:'#1F1e25',
          color: '#fff',
          fontSize: 18,
          padding: Platform.OS === 'ios' ? 15 : 10,
          marginTop: 30,
          borderRadius: 8
      },
      button:{
          backgroundColor: '#A370F7',
          padding: 15,
          borderRadius: 7,
          alignItems: 'center',
          marginTop: 20
        
      },
      buttonText:{
          color: '#fff',
          fontSize: 17,
          fontWeight: 'bold'
      },

      buttonSkill:{
        backgroundColor: '#1F1E25',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
      },
      textSkill: {
          color: '#fff',
          fontSize: 22,
          fontWeight: 'bold',

      }
})