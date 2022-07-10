import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>To do list:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height:100,
    backgroundColor: "silver"
  },
  text: {
    fontSize: 17,
    textAlign: "center"
  }
});
