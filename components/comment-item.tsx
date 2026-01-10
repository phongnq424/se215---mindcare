import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function CommentItem({ comment, isReply = false }: any) {
    return (
        <View style={[styles.container, isReply && styles.replyContainer]}>
            <Image source={{ uri: comment.user.avatar }} style={styles.avatar} />
            <View style={styles.contentSection}>
                <View style={styles.bubble}>
                    <Text style={styles.userName}>{comment.user.name}</Text>
                    <Text style={styles.commentText}>{comment.content}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.time}>{comment.time}</Text>
                    <TouchableOpacity><Text style={styles.actionText}>Trả lời</Text></TouchableOpacity>
                </View>

                {/* Hiển thị các phản hồi con nếu có */}
                {comment.replies && comment.replies.map((reply: any) => (
                    <CommentItem key={reply.id} comment={reply} isReply={true} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginTop: 16 },
    replyContainer: { marginLeft: 12, borderLeftWidth: 1, borderLeftColor: '#E5E5EA', paddingLeft: 12 },
    avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#f0f0f0' },
    contentSection: { flex: 1, marginLeft: 10 },
    bubble: { backgroundColor: '#F2F2F7', borderRadius: 12, padding: 10 },
    userName: { fontWeight: '600', fontSize: 13, marginBottom: 2 },
    commentText: { fontSize: 14, color: '#3A3A3C', lineHeight: 18 },
    footer: { flexDirection: 'row', marginTop: 4, marginLeft: 4 },
    time: { fontSize: 12, color: '#8E8E93', marginRight: 15 },
    actionText: { fontSize: 12, fontWeight: '600', color: '#1A1A1A' }
});