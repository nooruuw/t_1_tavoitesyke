import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
const [age,setAge] = useState('');
const [limits,setLimits] = useState('');



const calculate = () => {
  const ageNum = parseInt(age)
  if (!isNaN(ageNum)) {
  const lowresult = Math.round((220 - ageNum) * 0.65)
  const highresult = Math.round((220 - ageNum)* 0.85)
  setLimits(`${lowresult} - ${highresult}`) 
}
}

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Set your age</Text>
      <TextInput 
      style={styles.field}
      keyboardType ='decimal-pad' 
      value={age}
      onChangeText={text => setAge(text)}
      />
      <Text style={styles.field}>Heart rate limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding : 8,
  },

field:{
  marginBottom: 10,
},

});
