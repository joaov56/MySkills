import React, { useEffect, useState } from 'react';
import { 
    View,
    Text,
    StyleSheet, 
    SafeAreaView, 
    TextInput, 
    Platform,
    FlatList,
    StatusBar
 } from 'react-native';
 import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard';


export function Home(){
    const [newSkill, setNewSkill]= useState('');
    const [mySkills, setMySkills]= useState([]);
    const [greeting, setGreeting]= useState('')

    useEffect(()=>{
        const currentHour= new Date().getHours();
        if(currentHour < 12){
            setGreeting('Good Morning')
        }
        else if(currentHour >= 12 && currentHour < 18){
            setGreeting('Good afternoon')
        }else{
            setGreeting('Good Night')
        }
    },)

    function handleAddNewSkill(){
        setMySkills(oldState=> [...oldState, newSkill])
    }
    return(

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>

                Welcome, João
            </Text>

            <Text style={styles.greetings}>
                {greeting}
            </Text>
            <TextInput 
                style={styles.input}
                placeholder= 'New skill'
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill}/>
            <Text style={[styles.title, {marginVertical: 40}]}>
                My Skills
            </Text>
            <FlatList 
                data={mySkills}
                keyExtractor={item=> item}
                renderItem={({item})=> (
                    <SkillCard skill={item}/>
                )}
                showsVerticalScrollIndicator={false}
            />
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
      greetings:{
          color: '#fff'
      }


})