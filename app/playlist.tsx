import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function PlaylistScreen() {
    const router = useRouter();
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.navHeader}>
                <TouchableOpacity onPress={() => router.back()} hitSlop={15}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Playlist dành cho bạn</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="playlist-music-outline" size={24} color="#1A1A1A" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Gợi ý tương tác */}
                <Text style={styles.instructionText}>
                    Sau mỗi cột mốc âm thanh, bạn sẽ thấy câu hỏi <Text style={{ fontWeight: '700' }}>Yes/No</Text> xuất hiện. Cho tớ biết cảm xúc của bạn nhé!
                </Text>

                {/* Card Tương tác chính */}
                <View style={styles.mainCard}>
                    <Image
                        source={{ uri: 'https://api.dicebear.com/7.x/illustrations/png?seed=music-vibe' }}
                        style={styles.cardIllustration}
                    />

                    <View style={styles.cardContent}>
                        <Text style={styles.quoteTop}>Then again,</Text>
                        <Text style={styles.quoteMain}>It's not the same, isn't it?</Text>

                        <View style={styles.divider} />

                        <Text style={styles.questionText}>
                            Âm nhạc tớ mang đến có khiến cậu bớt cảm thấy lạc lỏng?
                        </Text>

                        <View style={styles.choiceGroup}>
                            <TouchableOpacity style={styles.choiceBtn}>
                                <Text style={styles.choiceText}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.choiceBtn}>
                                <Text style={styles.choiceText}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Thông tin bài hát */}
                <View style={styles.songInfoSection}>
                    <Text style={styles.songTitle}>Nuvole Bianche – Ludovico Einaudi</Text>
                    <Text style={styles.songDesc}>
                        Piano tối giản, nhịp đều, giúp tâm trí chậm lại và ổn định cảm xúc.
                    </Text>
                </View>

                {/* Thanh Progress */}
                <View style={styles.progressSection}>
                    <View style={styles.timeLabels}>
                        <Text style={styles.timeText}>02/10</Text>
                    </View>
                    <View style={styles.progressBarBg}>
                        <View style={[styles.progressBarFill, { width: '35%' }]} />
                    </View>
                </View>

                {/* Bộ điều khiển nhạc */}
                <View style={styles.controls}>
                    <TouchableOpacity>
                        <Ionicons name="shuffle-outline" size={22} color="#8CA192" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="play-skip-back" size={26} color="#5A827B" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.playBtn}
                        onPress={() => setIsPlaying(!isPlaying)}
                    >
                        <Ionicons
                            name={isPlaying ? "pause" : "play"}
                            size={30}
                            color="#fff"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name="play-skip-forward" size={26} color="#5A827B" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="repeat-outline" size={22} color="#8CA192" />
                    </TouchableOpacity>
                </View>

                {/* Bài hát tiếp theo */}
                <View style={styles.nextSongSection}>
                    <Text style={styles.nextLabel}>Bài hát tiếp theo</Text>
                    <TouchableOpacity style={styles.nextSongCard}>
                        <View style={styles.nextSongThumbnail} />
                        <View style={styles.nextSongInfo}>
                            <Text style={styles.nextSongName}>River Flows in You...</Text>
                            <Text style={styles.nextSongSub}>Piano chậm, giai điệu lạ..</Text>
                        </View>
                        <Ionicons name="play-circle" size={28} color="#5A827B" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },

    // Đã đồng bộ với Header của trang Post Detail
    navHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        height: 52,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1A1A1A',
        fontFamily: 'Inter'
    },

    scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },

    instructionText: {
        fontSize: 13,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
        marginVertical: 15,
        fontFamily: 'Inter',
        paddingHorizontal: 10
    },

    mainCard: {
        backgroundColor: '#F3D9B1',
        borderRadius: 24,
        height: width * 0.95,
        overflow: 'hidden',
    },
    cardIllustration: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.5
    },
    cardContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    quoteTop: {
        fontSize: 16,
        color: '#4A4A4A',
        fontFamily: 'Inter',
        fontWeight: '300'
    },
    quoteMain: {
        fontSize: 19,
        fontWeight: '600',
        color: '#1A1A1A',
        marginTop: 6,
        fontFamily: 'Inter'
    },
    divider: {
        width: 30,
        height: 1.5,
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginVertical: 24
    },
    questionText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#4A4A4A',
        lineHeight: 22,
        marginBottom: 25,
        fontFamily: 'Inter'
    },
    choiceGroup: { flexDirection: 'row', gap: 16 },
    choiceBtn: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#5A827B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    choiceText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
        fontFamily: 'Inter'
    },

    songInfoSection: { alignItems: 'center', marginTop: 28 },
    songTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: '#1A1A1A',
        fontFamily: 'Inter'
    },
    songDesc: {
        fontSize: 13,
        color: '#8E8E93',
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 20,
        fontFamily: 'Inter'
    },

    progressSection: { marginTop: 24 },
    timeText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#4A4A4A',
        fontFamily: 'Inter',
        marginBottom: 8
    },
    progressBarBg: {
        width: '100%',
        height: 4,
        backgroundColor: '#F2F2F2',
        borderRadius: 2
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#5A827B',
        borderRadius: 2
    },

    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 35,
        paddingHorizontal: 10
    },
    playBtn: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#5A827B',
        alignItems: 'center',
        justifyContent: 'center',
    },

    nextSongSection: {
        marginTop: 40,
        backgroundColor: '#F8F9FA',
        borderRadius: 20,
        padding: 16
    },
    nextLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: 16,
        fontFamily: 'Inter'
    },
    nextSongCard: { flexDirection: 'row', alignItems: 'center' },
    nextSongThumbnail: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#5A827B'
    },
    nextSongInfo: { flex: 1, marginLeft: 12 },
    nextSongName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1A1A1A',
        fontFamily: 'Inter'
    },
    nextSongSub: {
        fontSize: 12,
        color: '#8E8E93',
        marginTop: 4,
        fontFamily: 'Inter'
    }
});