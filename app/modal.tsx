import { StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Về MindCare</Text>
      <View style={styles.separator} />
      <Text style={styles.desc}>Ứng dụng hỗ trợ sức khỏe tâm lý cho sinh viên.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: '700', fontFamily: 'Inter' },
  separator: { marginVertical: 20, height: 1, width: '80%', backgroundColor: '#eee' },
  desc: { fontSize: 16, fontFamily: 'Inter', color: '#666', textAlign: 'center' }
});