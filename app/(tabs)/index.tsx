import { PostCard } from '@/components/post-card';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CommunityScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>Cộng đồng chia sẻ</Text>
        <Text style={styles.subtitle}>Cùng nhau vượt qua áp lực</Text>
      </View>

      <PostCard
        user={{
          name: 'Người dùng ẩn danh 001',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1'
        }}
        time="20 giờ trước"
        content="Có những ngày đến trường mà lòng nặng trĩu, không hẳn vì bài khó hay điểm kém, mà vì cảm giác mình luôn phải cố gắng để không bị bỏ lại phía sau..."
        imageUri="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=1000"
      />

      <PostCard
        user={{
          name: 'Người dùng ẩn danh 002',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2'
        }}
        time="1 ngày trước"
        content="Áp lực đại học không ồn ào, nhưng âm ỉ và kéo dài. Những đêm làm bài đến khuya, cảm giác hoang mang không biết mình chọn đúng đường không..."
        imageUri="https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=1000"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  headerSection: { padding: 20, backgroundColor: '#fff', marginBottom: 5 },
  title: { fontSize: 22, fontWeight: 'bold', fontFamily: 'Inter' },
  subtitle: { fontSize: 14, color: '#666', fontFamily: 'Inter' }
});