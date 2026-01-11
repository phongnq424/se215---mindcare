import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ALL_PODCASTS = [
    { id: '1', title: 'The art of silence', author: 'Lê Minh', duration: '15:20', image: require('../assets/images/podcast1.png') },
    { id: '2', title: 'Meaningful connection', author: 'Trần An', duration: '22:45', image: require('../assets/images/podcast2.png') },
    { id: '3', title: 'Daily podcast', author: 'Sống Khỏe', duration: '10:00', image: require('../assets/images/podcast3.png') },
    { id: '4', title: 'Health weekly', author: 'Dr. Smile', duration: '30:15', image: require('../assets/images/podcast4.png') },
    { id: '5', title: 'Mindful Morning', author: 'An Nhiên', duration: '12:00', image: require('../assets/images/podcast1.png') },
    { id: '6', title: 'Deep Sleep Music', author: 'Relax Studio', duration: '45:00', image: require('../assets/images/podcast2.png') },
];

export default function PodcastListScreen() {
    const router = useRouter();

    const renderPodcastItem = ({ item }: { item: typeof ALL_PODCASTS[0] }) => (
        <TouchableOpacity
            style={styles.podcastItem}
            onPress={() => {/* Logic mở trình phát nhạc */ }}
            activeOpacity={0.7}
        >
            <Image source={item.image} style={styles.itemImage} />

            <View style={styles.itemInfo}>
                <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.itemAuthor}>{item.author}</Text>
                <View style={styles.durationRow}>
                    <Ionicons name="time-outline" size={12} color="#8E8E93" />
                    <Text style={styles.itemDuration}>{item.duration}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.playCircle}>
                <Ionicons name="play" size={18} color="#fff" />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header đồng bộ với Post Detail & Playlist */}
            <View style={styles.navHeader}>
                <TouchableOpacity onPress={() => router.back()} hitSlop={15}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Tất cả Podcast</Text>
                <TouchableOpacity>
                    <Ionicons name="search" size={22} color="#1A1A1A" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={ALL_PODCASTS}
                renderItem={renderPodcastItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },

    // Header đồng bộ
    navHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#F2F2F2',
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: '#1A1A1A',
        fontFamily: 'Inter'
    },

    listContent: { padding: 20 },

    podcastItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    itemImage: {
        width: 70,
        height: 70,
        borderRadius: 12,
        backgroundColor: '#F0F0F0'
    },
    itemInfo: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center'
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1A1A1A',
        fontFamily: 'Inter',
        marginBottom: 4
    },
    itemAuthor: {
        fontSize: 13,
        color: '#8E8E93',
        fontFamily: 'Inter',
        marginBottom: 6
    },
    durationRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemDuration: {
        fontSize: 11,
        color: '#8E8E93',
        marginLeft: 4,
        fontFamily: 'Inter'
    },
    playCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#8CA192', // Màu xanh nhẹ giống Library của bạn
        alignItems: 'center',
        justifyContent: 'center'
    }
});