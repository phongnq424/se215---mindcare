import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

const NEXT_PODCASTS = [
    { id: '1', title: 'Meaningful conver...', time: '10:20', image: require('../assets/images/podcast1.png') },
    { id: '2', title: 'Meaningful conver...', time: '10:20', image: require('../assets/images/podcast2.png') },
    { id: '3', title: 'Meaningful conver...', time: '10:20', image: require('../assets/images/podcast4.png') },
];

export default function PodcastDetailScreen() {
    const router = useRouter();
    const [isPlaying, setIsPlaying] = useState(false);
    const { title, image } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            {/* Header - Đồng bộ cao 52px */}
            <View style={styles.navHeader}>
                <TouchableOpacity onPress={() => router.back()} hitSlop={15}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Playlist dành cho bạn</Text>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={{ marginRight: 10 }}>
                        <MaterialCommunityIcons name="playlist-music" size={24} color="#1A1A1A" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="chevron-down" size={20} color="#1A1A1A" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Thumbnail lớn */}
                <View style={styles.mainContent}>
                    <Image
                        source={require('../assets/images/podcast3.png')}
                        style={styles.mainThumbnail}
                    />
                    <Text style={styles.podcastTitle}>Daily postcast with OLIVIA WILSON</Text>

                    {/* Progress Bar - Đồng bộ màu và style */}
                    <View style={styles.progressSection}>
                        <View style={styles.progressBarBg}>
                            <View style={[styles.progressBarFill, { width: '30%' }]} />
                        </View>
                    </View>

                    {/* Controls - Đồng bộ style nút Play và màu Teal */}
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
                            <Ionicons name={isPlaying ? "pause" : "play"} size={30} color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="play-skip-forward" size={26} color="#5A827B" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="repeat-outline" size={22} color="#8CA192" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Section Podcast tiếp theo - Học theo phong cách nextSongSection của cậu */}
                <View style={styles.nextSongSection}>
                    <Text style={styles.nextLabel}>Podcast tiếp theo</Text>

                    {NEXT_PODCASTS.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.nextSongCard} activeOpacity={0.7}>
                            <Image source={item.image} style={styles.nextSongThumbnail} />
                            <View style={styles.nextSongInfo}>
                                <Text style={styles.nextSongName}>{item.title}</Text>
                                <Text style={styles.nextSongSub}>{item.time} • Podcast chuyên sâu</Text>
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

    // Header chuẩn 52px
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
    headerIcons: { flexDirection: 'row', alignItems: 'center' },

    scrollContent: { paddingBottom: 40 },

    mainContent: { alignItems: 'center', paddingHorizontal: 20, paddingTop: 20 },
    mainThumbnail: {
        width: width - 40,
        height: width - 80,
        borderRadius: 24,
        resizeMode: 'cover'
    },
    podcastTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1A1A1A',
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Inter'
    },

    // Progress Bar
    progressSection: { width: '100%', marginTop: 25 },
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

    // Controls
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 30,
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

    // NEXT SECTION - Style y hệt Playlist của cậu
    nextSongSection: {
        marginTop: 30,
        marginHorizontal: 20,
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
    nextSongCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
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