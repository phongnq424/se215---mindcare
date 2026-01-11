import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
    Alert,
    Image,
    Keyboard,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function ChatDetailScreen() {
    const router = useRouter();
    const scrollViewRef = useRef<ScrollView>(null);

    const [isListening, setIsListening] = useState(true);
    const [activeChip, setActiveChip] = useState('AI Assistant');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: 'Chào bạn! Mình nhận thấy hôm nay chỉ số stress của bạn hơi cao. Bạn có muốn trò chuyện một chút không?', sender: 'ai' },
        { id: 2, text: 'Mình cảm thấy hơi áp lực vì công việc dạo gần đây. Deadline dí quá nhiều.', sender: 'user' }
    ]);

    const chips = [
        { id: 1, label: 'AI Assistant', icon: '🤖' },
        { id: 2, label: 'Stress Relief', icon: '🧘' },
        { id: 3, label: 'Meditation Guide', icon: '🌿' }
    ];

    // ✅ Scroll khi có tin nhắn mới
    useEffect(() => {
        requestAnimationFrame(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        });
    }, [messages]);

    // ✅ Scroll khi keyboard bật (FIX BUG CHÍNH)
    useEffect(() => {
        const sub = Keyboard.addListener('keyboardDidShow', () => {
            requestAnimationFrame(() => {
                scrollViewRef.current?.scrollToEnd({ animated: true });
            });
        });

        return () => sub.remove();
    }, []);

    const handleAction = () => {
        if (isListening) {
            setIsListening(false);
        } else if (message.trim()) {
            const newMsg = { id: Date.now(), text: message, sender: 'user' };
            setMessages(prev => [...prev, newMsg]);
            setMessage('');

            setTimeout(() => {
                setMessages(prev => [
                    ...prev,
                    { id: Date.now() + 1, text: 'Mình hiểu mà, hãy hít thở sâu nhé!', sender: 'ai' }
                ]);
            }, 800);
        } else {
            setIsListening(true);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} hitSlop={15}>
                    <Ionicons name="chevron-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>

                <View style={styles.headerInfo}>
                    <View style={styles.nameRow}>
                        <Text style={styles.botName}>CareAI Assistant</Text>
                        <View style={styles.onlineDot} />
                    </View>
                    <Text style={styles.statusText}>
                        {isListening ? 'Đang lắng nghe...' : 'Sẵn sàng'}
                    </Text>
                </View>

                <TouchableOpacity onPress={() => Alert.alert('Tùy chọn', 'Menu...')} hitSlop={15}>
                    <Ionicons name="ellipsis-vertical" size={20} color="#1A1A1A" />
                </TouchableOpacity>
            </View>

            <View style={styles.chipContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
                >
                    {chips.map(item => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => setActiveChip(item.label)}
                            style={[styles.chip, activeChip === item.label && styles.chipActive]}
                        >
                            <Text style={[styles.chipText, activeChip === item.label && styles.chipTextActive]}>
                                {item.icon} {item.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <ScrollView
                ref={scrollViewRef}
                style={styles.chatBody}
                contentContainerStyle={{ padding: 20, paddingBottom: 20 }}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.dateSeparator}>Hôm nay, 10:23 AM</Text>

                {messages.map(msg => (
                    <View key={msg.id} style={msg.sender === 'ai' ? styles.aiMessageRow : styles.userMessageRow}>
                        {msg.sender === 'ai' && (
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png' }}
                                style={styles.avatarMini}
                            />
                        )}
                        <View style={msg.sender === 'ai' ? styles.aiBubble : styles.userBubble}>
                            <Text style={msg.sender === 'ai' ? styles.aiText : styles.userText}>
                                {msg.text}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {isListening && (
                <View style={styles.voiceToast}>
                    <Ionicons name="mic" size={14} color="#fff" />
                    <Text style={styles.voiceToastText}>Chế độ giọng nói đang bật</Text>
                </View>
            )}

            <View style={styles.inputBar}>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name="add-circle-outline" size={28} color="#8E8E93" />
                </TouchableOpacity>

                <View style={styles.inputWrapper}>
                    {isListening ? (
                        <TouchableOpacity style={styles.voiceClickArea} onPress={() => setIsListening(false)}>
                            <Ionicons name="stats-chart" size={18} color="#5A827B" />
                            <Text style={styles.voiceIndicator}>Đang nghe... (Dừng)</Text>
                        </TouchableOpacity>
                    ) : (
                        <TextInput
                            style={styles.textInput}
                            placeholder="Nhập tin nhắn..."
                            value={message}
                            onChangeText={setMessage}
                        />
                    )}
                </View>

                <TouchableOpacity
                    style={[styles.micBtn, !isListening && message.length > 0 && styles.sendBtn]}
                    onPress={handleAction}
                >
                    <Ionicons
                        name={!isListening && message.length > 0 ? 'send' : 'mic'}
                        size={22}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 15, paddingBottom: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#F5F5F5' },
    headerInfo: { flex: 1, alignItems: 'center' },
    nameRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    botName: { fontSize: 16, fontWeight: '700', color: '#1A1A1A' },
    onlineDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#4CAF50' },
    statusText: { fontSize: 12, color: '#5A827B', marginTop: 2 },
    chipContainer: { paddingVertical: 12, backgroundColor: '#fff' },
    chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#F5F5F7', marginRight: 8 },
    chipActive: { backgroundColor: '#5A827B' },
    chipText: { fontSize: 12, color: '#666' },
    chipTextActive: { color: '#fff', fontWeight: '600' },
    chatBody: { flex: 1, backgroundColor: '#F9F9F9' },
    dateSeparator: { textAlign: 'center', color: '#999', fontSize: 11, marginVertical: 20, fontWeight: '500' },
    aiMessageRow: { flexDirection: 'row', marginBottom: 20, gap: 10, paddingRight: 40 },
    avatarMini: { width: 32, height: 32, borderRadius: 16 },
    aiBubble: { backgroundColor: '#fff', padding: 14, borderRadius: 20, borderTopLeftRadius: 2, elevation: 1 },
    aiText: { fontSize: 14, color: '#333', lineHeight: 20 },
    userMessageRow: { alignItems: 'flex-end', marginBottom: 20, paddingLeft: 60 },
    userBubble: { backgroundColor: '#5A827B', padding: 14, borderRadius: 20, borderTopRightRadius: 2 },
    userText: { color: '#fff', fontSize: 14, lineHeight: 20 },
    voiceToast: { alignSelf: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: '#3A3A3C', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 25, gap: 8, position: 'absolute', bottom: 100 },
    voiceToastText: { color: '#fff', fontSize: 12, fontWeight: '500' },
    inputBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, gap: 12, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#F2F2F2', paddingBottom: Platform.OS === 'ios' ? 30 : 12 },
    addBtn: { padding: 4 },
    inputWrapper: { flex: 1, height: 46, backgroundColor: '#F0F4F3', borderRadius: 23, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 },
    voiceClickArea: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 },
    voiceIndicator: { fontSize: 13, color: '#5A827B', fontWeight: '600' },
    textInput: { flex: 1, fontSize: 14, color: '#1A1A1A' },
    micBtn: { width: 46, height: 46, borderRadius: 23, backgroundColor: '#5A827B', alignItems: 'center', justifyContent: 'center' },
    sendBtn: { backgroundColor: '#1A1A1A' }
});
