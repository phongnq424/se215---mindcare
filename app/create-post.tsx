import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function CreatePostScreen() {
    const [content, setContent] = useState('');

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Tạo bài chia sẻ</Text>
                <View style={{ width: 22 }} />
            </View>

            {/* Input */}
            <TextInput
                style={styles.input}
                placeholder="Bạn đang nghĩ gì?"
                placeholderTextColor="#B0B0B0"
                multiline
                value={content}
                onChangeText={setContent}
            />

            {/* Submit */}
            <TouchableOpacity
                style={[
                    styles.submitButton,
                    !content.trim() && { opacity: 0.5 }
                ]}
                disabled={!content.trim()}
                onPress={() => {
                    console.log('POST:', content);
                    router.back();
                }}
            >
                <Text style={styles.submitText}>Đăng bài</Text>
            </TouchableOpacity>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Thêm vào bài viết</Text>
                <View style={styles.footerIcons}>
                    <Ionicons name="image-outline" size={22} color="#8E8E93" />
                    <Ionicons name="location-outline" size={22} color="#8E8E93" />
                    <Ionicons name="attach-outline" size={22} color="#8E8E93" />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 52,
        borderBottomWidth: 0.5,
        borderBottomColor: '#EAEAEA'
    },

    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#1A1A1A'
    },

    input: {
        flex: 1,
        padding: 16,
        fontSize: 15,
        color: '#1A1A1A',
        textAlignVertical: 'top'
    },

    submitButton: {
        marginHorizontal: 16,
        marginBottom: 12,
        height: 44,
        borderRadius: 8,
        backgroundColor: '#3E7C73',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600'
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#EAEAEA'
    },

    footerText: {
        flex: 1,
        fontSize: 13,
        color: '#8E8E93'
    },

    footerIcons: {
        flexDirection: 'row',
        gap: 14
    }
});
