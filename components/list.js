import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({el, deleteHandler}) {
  return (
    <TouchableOpacity style={styles.touchableElem} onPress={() => deleteHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableElem: {
    padding: 20,
    borderWidth: 1,
    marginTop: "5%",
    width: "60%",
    marginLeft: "20%",
    borderRadius: 5
  },
  text: {
    fontSize: 17,
    textAlign: "center",
  }
});
