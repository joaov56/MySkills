import React from 'react';
import { 
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export function SkillCard(){
    return(
        <TouchableOpacity key="1" style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                Skill
            </Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({

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