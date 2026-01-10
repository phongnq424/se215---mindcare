import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function PostCard({ user, time, content, imageUri }: any) {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <TouchableOpacity><Ionicons name="ellipsis-horizontal" size={20} color="#999" /></TouchableOpacity>
            </View>

            <Text style={styles.content}>{content}</Text>

            {/* Chỉ hiển thị nếu có link ảnh */}
            {imageUri && (
                <Image source={{ uri: imageUri }} style={styles.postImage} resizeMode="cover" />
            )}

            <View style={styles.footer}>
                <View style={styles.stats}>
                    <Ionicons name="heart-outline" size={20} color="#666" />
                    <Text style={styles.statText}>200</Text>
                    <Ionicons name="chatbubble-outline" size={20} color="#666" style={{ marginLeft: 15 }} />
                    <Text style={styles.statText}>15</Text>
                </View>
                <TouchableOpacity><Ionicons name="share-social-outline" size={20} color="#666" /></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#fff', borderRadius: 20, padding: 16, marginHorizontal: 16, marginVertical: 8, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 10 },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
    avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#eee' },
    userName: { fontFamily: 'Inter', fontWeight: '600', fontSize: 15 },
    time: { fontFamily: 'Inter', fontSize: 12, color: '#999' },
    content: { fontFamily: 'Inter', fontSize: 15, lineHeight: 22, color: '#444', marginBottom: 12 },
    postImage: { width: '100%', height: 200, borderRadius: 15, marginBottom: 12 },
    footer: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 0.5, borderTopColor: '#f0f0f0', paddingTop: 12 },
    stats: { flexDirection: 'row', alignItems: 'center' },
    statText: { marginLeft: 5, color: '#666' }
});