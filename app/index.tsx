import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  }
})
