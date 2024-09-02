import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Helloooo!!!!</Text>
      <Text style={styles.dummyText}>Ceren was here.</Text>
      <Button title="Tap me!!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 16,
  },
});
