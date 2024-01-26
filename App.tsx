import { useState, memo } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Memo2Props = {
  getName: () => string
}

const GreetingLabel = ({getName}: Memo2Props) => {
  console.log('GreetingLabel got rendered!');
  return <Text>Hi {getName()}</Text>;
};

export default function App() {
  const [num1, setNum1] = useState(0);

  const MemoLabel = memo(() => {
    console.log('MemoLabel got rendered!');
    return <Text>Memo</Text>;
  });

  return (
    <View style={s.container}>
      <Button title="Tap" onPress={() => setNum1(num1 + 1)}/>
      <GreetingLabel getName={() => 'Baylor'} />

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
