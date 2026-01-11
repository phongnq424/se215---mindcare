import { CommentItem } from '@/components/comment-item';
import { usePost } from '@/context/PostContext';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const COMMENTS_DATA = [
    {
        id: '1',
        user: { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=lan' },
        content: 'Mình đọc mà thấy giống mình quá...',
        time: '1 giờ trước',
        replies: [
            {
                id: '1-1',
                user: { name: 'Người dùng ẩn danh 010', avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=010' },
                content: 'Áp lực nhất là khi mọi người nghĩ mình ổn...',
                time: '1 giờ trước'
            }
        ]
    }
];

export default function PostDetailScreen() {
    const router = useRouter();
    const { postId } = useLocalSearchParams();
    const { getPostById, toggleLike } = usePost();

    const post = getPostById(postId as string);
    if (!post) return null;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.navHeader}>
                <TouchableOpacity onPress={() => router.back()} hitSlop={15}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>

                <View style={styles.userInfoHeader}>
                    <Image source={{ uri: post.user.avatar }} style={styles.smallAvatar} />
                    <View>
                        <Text style={styles.userNameHeader}>{post.user.name}</Text>
                        <Text style={styles.dateHeader}>{post.time}</Text>
                    </View>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.postContent}>
                    <Text style={styles.fullText}>{post.content}</Text>

                    {post.imageUri && (
                        <Image
                            source={typeof post.imageUri === 'string' ? { uri: post.imageUri } : post.imageUri}
                            style={styles.mainImage} // Sử dụng style đã khai báo ở dưới cho sạch
                        />
                    )}
                </View>

                {/* Interaction */}
                <View style={styles.detailFooter}>
                    <View style={styles.statsGroup}>
                        <TouchableOpacity
                            style={styles.statItem}
                            onPress={() => toggleLike(post.id)}
                        >
                            <Ionicons
                                name={post.liked ? 'heart' : 'heart-outline'}
                                size={18}
                                color={post.liked ? '#FF6B6B' : '#A0A0A0'}
                            />
                            <Text style={styles.statText}>{post.likeCount}</Text>
                        </TouchableOpacity>

                        <View style={styles.statItem}>
                            <Ionicons name="chatbubble-outline" size={17} color="#A0A0A0" />
                            <Text style={styles.statText}>{post.comments}</Text>
                        </View>

                        <View style={styles.statItem}>
                            <Ionicons name="share-outline" size={18} color="#A0A0A0" />
                            <Text style={styles.statText}>{post.shares}</Text>
                        </View>
                    </View>
                </View>

                {/* Comments */}
                <View style={{ paddingHorizontal: 16, paddingBottom: 100 }}>
                    {COMMENTS_DATA.map(item => (
                        <CommentItem key={item.id} comment={item} />
                    ))}
                </View>
            </ScrollView>

            {/* Input bar */}
            <View style={styles.inputBar}>
                <Image
                    source={{ uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=me' }}
                    style={styles.inputAvatar}
                />
                <View style={styles.textInputPlaceholder}>
                    <Text style={styles.inputPlaceholderText}>Viết bình luận...</Text>
                </View>
                <Ionicons name="send" size={20} color="#007AFF" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },

    navHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#EAEAEA',
        height: 60
    },

    userInfoHeader: { flexDirection: 'row', marginLeft: 12, alignItems: 'center' },
    smallAvatar: { width: 36, height: 36, borderRadius: 18 },

    userNameHeader: {
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Inter'
    },

    dateHeader: {
        fontSize: 11,
        color: '#8E8E93',
        fontFamily: 'Inter'
    },

    postContent: { padding: 16 },

    fullText: {
        fontSize: 15,
        lineHeight: 22,
        color: '#1A1A1A',
        fontFamily: 'Inter'
    },

    mainImage: {
        width: '100%',
        height: 220,
        borderRadius: 12,
        marginTop: 12
    },

    detailFooter: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#F2F2F2',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginVertical: 8
    },

    statsGroup: { flexDirection: 'row', alignItems: 'center' },

    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    },

    statText: {
        marginLeft: 6,
        color: '#A0A0A0',
        fontSize: 13,
        fontFamily: 'Inter'
    },

    inputBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderTopWidth: 0.5,
        borderTopColor: '#F2F2F2',
    },

    inputAvatar: { width: 30, height: 30, borderRadius: 15 },

    textInputPlaceholder: {
        flex: 1,
        backgroundColor: '#F2F2F7',
        borderRadius: 20,
        marginHorizontal: 12,
        paddingVertical: 8,
        paddingHorizontal: 16
    },

    inputPlaceholderText: {
        color: '#8E8E93',
        fontFamily: 'Inter'
    }
});
