import { useState, memo } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Memo2Props = {
  getName: () => string
}

const GreetingLabel = ({getName}: Memo2Props) => {
  console.log('Memo2 got rendered!');
  return <Text>Hi {getName()}</Text>;
};

const name = () => 'Baylor';

export default function App() {
  const [num1, setNum1] = useState(0);

  const Memo1 = memo(() => {
    console.log('Memo1 got rendered!');
    return <Text>Memo1</Text>;
  });

  return (
    <View style={s.container}>
      <Button title="Tap" onPress={() => setNum1(num1 + 1)}/>
      <Memo1 />

      <GreetingLabel getName={name} />
    </View>
  );
}

const s = StyleSheet.create({
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
