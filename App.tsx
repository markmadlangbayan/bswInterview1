import { useState, memo } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Memo2 = memo(({i}: {i: () => string}) => {
  console.log('Memo2 got rendered!');
  return <Text>Hi {i()}</Text>;
});


export default function App() {
  const [num1, setNum1] = useState(0);

  const Memo1 = memo(() => {
    console.log('Memo1 got rendered!');
    return <Text>Memo1</Text>;
  });

  return (
    <View style={styles.container}>
      <View style={styles.memo1}>
        <Button title="Tap" onPress={() => setNum1(num1 + 1)}/>
        <Memo1 />
      </View>

      <Memo2 i={() => 'Baylor'} />
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
  memo1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
