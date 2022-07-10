import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Header from './components/header';
import ListItem from './components/list';
import Form from './components/form';

export default function App() {
  const [ListofItems, setList] = useState([
    {text: "first", key: '1'},
    {text: "second", key: '2'},
    {text: "third", key: '3'}
  ]);

  const addHandler = (text) =>{
    if(text != "" && text !== undefined  && text !== " ")
    {
      setList((list) => {
        return [
          {text: text, key: Math.random().toString(36).substring(7)},
          ...list
        ]
      })
    }
  };

  const deleteHandler = (key) =>{
    setList((list) => {
      return list.filter(ListofItems => ListofItems.key != key)
    })
  }

  return (
    <View style={{flex: 1}}>
      <Header/>
      <Form addHandler={addHandler}/>
      <View style={{flex: 1}}>
        <FlatList contentContainerStyle={{ paddingBottom: "20%"}} data={ListofItems} renderItem={({item}) => (
          <ListItem el={item} deleteHandler={deleteHandler}/>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    top: "40%",
    fontSize: 17,
    textAlign: "center",
    padding: 20,
    borderWidth: 1,
    marginTop: "5%",
    width: "60%",
    marginLeft: "20%",
    borderRadius: 5
  }
});
