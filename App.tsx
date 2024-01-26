import { useState, memo } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type GreetingLabelProps = {
  getName: () => string
}

const GreetingLabel = memo(({getName}: GreetingLabelProps) => {
  console.log('GreetingLabel got rendered!');
  return <Text>Hi {getName()}</Text>;
});

const MemoLabel = memo(() => {
  console.log('MemoLabel got rendered!');
  return <Text>Memo</Text>;
});

const getName = () => 'Baylor';

export default function App() {
  const [num1, setNum1] = useState(0);

  return (
    <View style={s.container}>
      <Button title="Tap" onPress={() => setNum1(num1 + 1)}/>
      <GreetingLabel getName={getName} />

      <MemoLabel />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
