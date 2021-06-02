import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet, 
    SafeAreaView, 
    TextInput, 
    Platform,
    TouchableOpacity,
 } from 'react-native';
 import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard';


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

            <Button />
            <Text style={[styles.title, {marginVertical: 40}]}>
                My Skills
            </Text>
            
            {
                mySkills.map(skill=> (  
                    <SkillCard />
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


})