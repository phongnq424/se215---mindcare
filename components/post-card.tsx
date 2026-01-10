import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function PostCard({
    user,
    time,
    content,
    imageUri,
    liked = false,
    likeCount = 0,
    comments = 15,
    shares = 5,
    onLike,
    onPressMenu,
    onPressDetail
}: any) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <View style={styles.card}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <TouchableOpacity onPress={onPressMenu} hitSlop={10}>
                    <Ionicons name="ellipsis-horizontal" size={18} color="#C7C7CC" />
                </TouchableOpacity>
            </View>

            {/* Nội dung bài viết với tính năng Xem thêm */}
            <View style={styles.contentContainer}>
                <TouchableOpacity onPress={onPressDetail} activeOpacity={0.9}>
                    <Text
                        style={styles.content}
                        numberOfLines={isExpanded ? undefined : 2}
                    >
                        {content}
                    </Text>
                </TouchableOpacity>

                {/* Chỉ hiện nút "Xem thêm" nếu nội dung đủ dài */}
                {content.length > 60 && (
                    <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                        <Text style={styles.readMoreText}>
                            {isExpanded ? ' Thu gọn' : '... Xem thêm'}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>

            {imageUri && (
                <Image source={{ uri: imageUri }} style={styles.postImage} resizeMode="cover" />
            )}

            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.statsGroup}>
                    <TouchableOpacity style={styles.statItem} onPress={onLike}>
                        <Ionicons
                            name={liked ? 'heart' : 'heart-outline'}
                            size={16}
                            color={liked ? '#FF6B6B' : '#A0A0A0'}
                        />
                        <Text style={styles.statText}>{likeCount}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.statItem}>
                        <Ionicons name="chatbubble-outline" size={15} color="#A0A0A0" />
                        <Text style={styles.statText}>{comments}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.statItem}>
                        <Ionicons name="share-outline" size={16} color="#A0A0A0" />
                        <Text style={styles.statText}>{shares}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 2
    },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#f5f5f5' },
    userName: { fontFamily: 'Inter', fontWeight: '500', fontSize: 14, color: '#1A1A1A' },
    time: { fontFamily: 'Inter', fontSize: 11, color: '#B0B0B0', marginTop: 1 },
    contentContainer: { marginBottom: 12 },
    content: {
        fontFamily: 'Inter',
        fontSize: 14,
        lineHeight: 20,
        color: '#4A4A4A',
    },
    readMoreText: {
        color: '#8E8E93',
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 13,
        marginTop: 4,
    },
    postImage: { width: '100%', height: 180, borderRadius: 12, marginBottom: 12 },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#F2F2F2'
    },
    statsGroup: { flexDirection: 'row', alignItems: 'center' },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    statText: {
        marginLeft: 4,
        color: '#A0A0A0',
        fontSize: 12,
        fontFamily: 'Inter',
    }
});
