import { ActionSheet } from '@/components/action-sheet';
import { PostCard } from '@/components/post-card';
import { usePost } from '@/context/PostContext';
import { Ionicons } from '@expo/vector-icons'; // Đảm bảo đã cài đặt thư viện icon
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CommunityScreen() {
  const { posts, toggleLike } = usePost();
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER CẬP NHẬT */}
      <View style={styles.headerSection}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.title}>Cộng đồng chia sẻ</Text>
            <Text style={styles.subtitle}>Chia sẻ và kết nối cùng mọi người</Text>
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push('/create-post')}
            >
              <Ionicons name="add" size={24} color="#1A1A1A" />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.iconButton, { borderHorizontal: 0 }]}
              onPress={() => router.push('/search-post')}
            >
              <Ionicons name="search-outline" size={22} color="#1A1A1A" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* DANH SÁCH BÀI VIẾT GIỮ NGUYÊN */}
        {posts.map(post => (
          <PostCard
            key={post.id}
            {...post}
            onLike={() => toggleLike(post.id)}
            onPressMenu={() => setActionSheetVisible(true)}
            onPressDetail={() =>
              router.push({
                pathname: '/post-detail',
                params: { postId: post.id }
              })
            }
          />
        ))}
      </ScrollView>

      <ActionSheet
        visible={actionSheetVisible}
        onClose={() => setActionSheetVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA'
  },
  headerSection: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingTop: 15, // Tăng thêm một chút cho thoáng
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F2F2F2'
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12, // Bo góc như trong ảnh mẫu
    borderWidth: 1,
    borderColor: '#E5E5EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: '#1A1A1A'
  },
  subtitle: {
    fontSize: 14,
    color: '#8E8E93',
    fontFamily: 'Inter',
    marginTop: 4
  }
});