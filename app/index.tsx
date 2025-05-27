import { View, Text, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

const sampleList = [
  { id: 1, name: 'Rishav', github: 'sharmarishav8879' },
  { id: 2, name: 'Ahmad', github: 'AhmadAL79' },
  { id: 3, name: 'Neel', github: 'Neel0264' }
];

export default function HomeScreen() {
  const eventHandlers = () => {
    alert('I am done with the lab1!');
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to Lab 2!</Text>

      {sampleList.map((item, index) => (
        <View key={index} style={{ marginTop: 20, alignItems: 'center' }}>
          <Text>ID: {item.id}</Text>
          <Text>Name: {item.name}</Text>
          <Text>GitHub: {item.github}</Text>
        </View>
      ))}

      <Pressable onPress={eventHandlers}>
        <Text style={styles.link}>Say Hello</Text>
      </Pressable>

      <Text style={{ marginTop: 30 }}>Go to Fruit Pages:</Text>
      <Link href="/apple"><Text style={styles.link}>Apple</Text></Link>
      <Link href="/orange"><Text style={styles.link}>Orange</Text></Link>
      <Link href="/mango"><Text style={styles.link}>Mango</Text></Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
    fontSize: 18,
    marginTop: 10,
  },
});
