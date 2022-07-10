import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Form({addHandler}) {
    const [text, setValue] = useState('');
    const onChange = (text) => {
        setValue(text);
    };
  return (
   <View>
    <TextInput style={styles.input} onChangeText={onChange} placeholder="Add a task "/>
    <TouchableOpacity style={styles.button} onPress={() => addHandler(text)}>
        <Text style={{color: "blue", fontSize: 15}}>+ Add</Text>
      </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%"
  },
  button: {
    width: "60%",
    marginHorizontal: "20%",
    alignItems: 'center'
  }
});
