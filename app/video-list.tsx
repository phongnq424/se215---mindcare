import { Ionicons } from '@expo/vector-icons';
import { ResizeMode, Video } from 'expo-av';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import video1 from '../assets/videos/natural.mp4';

const { width } = Dimensions.get('window');

export default function VideoDetailScreen() {
    const router = useRouter();
    const { title } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            {/* 1. Video Player Section */}
            <View style={styles.playerContainer}>
                <Video
                    source={video1}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    shouldPlay
                    useNativeControls
                    resizeMode={ResizeMode.COVER}
                    style={styles.videoPlayer}
                />

                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={28} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                {/* 2. Video Info */}
                <View style={styles.infoSection}>
                    <Text style={styles.mainTitle}>{title || "Đang phát video..."}</Text>
                    <Text style={styles.description}>
                        Bài tập này giúp bạn giải tỏa căng thẳng sau một ngày làm việc mệt mỏi. Hãy chọn không gian yên tĩnh để bắt đầu.
                    </Text>
                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <Ionicons name="eye-outline" size={16} color="#8E8E93" />
                            <Text style={styles.statText}>1,200 views</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="calendar-outline" size={16} color="#8E8E93" />
                            <Text style={styles.statText}>2 thg 1, 2024</Text>
                        </View>
                    </View>
                </View>

                {/* 3. Related Videos (Style đồng bộ với Playlist của bạn) */}
                <View style={styles.nextSongSection}>
                    <Text style={styles.nextLabel}>Video liên quan</Text>

                    {[1, 2, 3].map((item) => (
                        <TouchableOpacity key={item} style={styles.nextSongCard}>
                            <View style={styles.nextSongThumbnail}>
                                <Ionicons name="play" size={16} color="#fff" />
                            </View>
                            <View style={styles.nextSongInfo}>
                                <Text style={styles.nextSongName}>Bài tập hít thở sâu số {item}</Text>
                                <Text style={styles.nextSongSub}>08:45 • An Nhiên</Text>
                            </View>
                            <Ionicons name="play-circle" size={28} color="#5A827B" />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    playerContainer: { width: '100%', height: 250, backgroundColor: '#000' },
    videoPlayer: { width: '100%', height: '100%' },
    backButton: { position: 'absolute', top: 40, left: 16, zIndex: 10 },

    content: { flex: 1 },
    infoSection: { padding: 20 },
    mainTitle: { fontSize: 20, fontWeight: '700', color: '#1A1A1A', fontFamily: 'Inter' },
    description: { fontSize: 14, color: '#666', marginTop: 10, lineHeight: 22, fontFamily: 'Inter' },
    statsRow: { flexDirection: 'row', marginTop: 15, gap: 20 },
    statItem: { flexDirection: 'row', alignItems: 'center', gap: 5 },
    statText: { fontSize: 12, color: '#8E8E93' },

    // NEXT SECTION (Đã đồng bộ)
    nextSongSection: {
        marginTop: 10,
        marginHorizontal: 20,
        backgroundColor: '#F8F9FA',
        borderRadius: 20,
        padding: 16,
        marginBottom: 30
    },
    nextLabel: { fontSize: 14, fontWeight: '700', color: '#1A1A1A', marginBottom: 16, fontFamily: 'Inter' },
    nextSongCard: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
    nextSongThumbnail: { width: 60, height: 40, borderRadius: 8, backgroundColor: '#5A827B', justifyContent: 'center', alignItems: 'center' },
    nextSongInfo: { flex: 1, marginLeft: 12 },
    nextSongName: { fontSize: 14, fontWeight: '600', color: '#1A1A1A', fontFamily: 'Inter' },
    nextSongSub: { fontSize: 12, color: '#8E8E93', marginTop: 2, fontFamily: 'Inter' }
});