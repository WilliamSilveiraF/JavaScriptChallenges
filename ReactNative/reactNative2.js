import { StyleSheet, Text, Button, SafeAreaView, NativeModules, Platform, Alert } from 'react-native';
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Teste</Text>
      <Button title="Click me" onPress={() => Alert.alert("My title", "My message", [
        { text: "Yes"},
        { text: "No"}
      ])}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    marginTop: STATUSBAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
