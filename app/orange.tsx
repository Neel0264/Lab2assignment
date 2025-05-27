import { View, Image, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Orange() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orange</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg' }}
        style={styles.image}
      />
      <Link href="/">
        <Text style={styles.back}>← Back to Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  image: { width: 200, height: 200 },
  back: { marginTop: 30, fontSize: 18, color: 'blue' },
});
