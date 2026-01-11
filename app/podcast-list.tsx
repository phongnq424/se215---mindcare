import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const CATEGORIES = ['Tất cả', 'Thư giãn', 'Kiến thức', 'Truyền cảm hứng', 'Chữa lành'];

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
    const [activeTag, setActiveTag] = useState('Tất cả');

    // --- PHẦN HEADER GIỐNG TEST-LIST ---
    const renderHeader = () => (
        <View style={styles.headerContent}>
            {/* 1. Thanh tìm kiếm */}
            <View style={styles.searchSection}>
                <Ionicons name="search-outline" size={20} color="#8E8E93" />
                <TextInput
                    placeholder="Tìm podcast, tác giả..."
                    style={styles.searchInput}
                    placeholderTextColor="#8E8E93"
                />
            </View>

            {/* 2. Tags lọc danh mục */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagScroll}>
                {CATEGORIES.map((tag) => (
                    <TouchableOpacity
                        key={tag}
                        onPress={() => setActiveTag(tag)}
                        style={[styles.tagItem, activeTag === tag && styles.tagItemActive]}
                    >
                        <Text style={[styles.tagText, activeTag === tag && styles.tagTextActive]}>{tag}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* 3. Podcast nổi bật (Featured) */}
            <TouchableOpacity style={styles.featuredCard} activeOpacity={0.9}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80' }}
                    style={styles.featuredImage}
                />
                <View style={styles.featuredOverlay}>
                    <View style={styles.badgeContainer}>
                        <Ionicons name="headset" size={12} color="#fff" style={{ marginRight: 6 }} />
                        <Text style={styles.badgeText}>Đang hot tuần này</Text>
                    </View>
                    <Text style={styles.featuredTitle}>Lắng nghe để thấu hiểu</Text>
                    <Text style={styles.featuredSub}>Series đặc biệt về sức khỏe tinh thần năm 2024</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Danh sách Podcast</Text>
        </View>
    );

    // --- RENDER ITEM PODCAST CỦA CẬU ---
    const renderPodcastItem = ({ item }: { item: typeof ALL_PODCASTS[0] }) => (
        <TouchableOpacity
            style={styles.podcastItem} // Card trắng ở đây
            onPress={() => { /* Logic mở trình phát */ }}
            activeOpacity={0.8}
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

            <View style={styles.playCircle}>
                <Ionicons name="play" size={18} color="#fff" style={{ marginLeft: 2 }} />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Nav Header đồng bộ */}
            <View style={styles.navHeader}>
                <TouchableOpacity onPress={() => router.back()} hitSlop={15}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Podcasts</Text>
                <TouchableOpacity style={styles.userCircle}>
                    <Ionicons name="person" size={16} color="#5A827B" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={ALL_PODCASTS}
                renderItem={renderPodcastItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },

    // Header & Nav
    navHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderBottomColor: '#F2F2F2',
    },
    headerTitle: { fontSize: 17, fontWeight: '700', color: '#1A1A1A', fontFamily: 'Inter' },
    userCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#E8F2F0', alignItems: 'center', justifyContent: 'center' },

    headerContent: { padding: 20 },
    listContent: { paddingBottom: 30 },

    // Search Section
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 46,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    searchInput: { flex: 1, marginLeft: 10, fontSize: 14 },

    // Tag Styles
    tagScroll: { marginTop: 15, marginBottom: 5 },
    tagItem: {
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#F8F9FA',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#F0F0F0'
    },
    tagItemActive: { backgroundColor: '#5A827B', borderColor: '#5A827B' },
    tagText: { fontSize: 13, color: '#666' },
    tagTextActive: { color: '#fff', fontWeight: '600' },

    // Featured Card
    featuredCard: {
        height: 160,
        borderRadius: 24,
        overflow: 'hidden',
        marginTop: 20,
        marginBottom: 25,
    },
    featuredImage: { width: '100%', height: '100%' },
    featuredOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.35)',
        padding: 20,
        justifyContent: 'center'
    },
    featuredTitle: { color: '#fff', fontSize: 20, fontWeight: '700' },
    featuredSub: { color: '#fff', fontSize: 12, opacity: 0.9, marginTop: 4 },
    badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(90, 130, 123, 0.9)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    badgeText: { color: '#fff', fontSize: 11, fontWeight: '600' },

    sectionTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A1A', marginBottom: 15 },

    // Podcast Item (Của cậu)
    podcastItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 16,
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },

    itemImage: {
        width: 65,  // Thu nhỏ lại một chút để cân đối với card
        height: 65,
        borderRadius: 14,
        backgroundColor: '#F0F0F0'
    },
    itemInfo: { flex: 1, marginLeft: 15, justifyContent: 'center' },
    itemTitle: { fontSize: 15, fontWeight: '600', color: '#1A1A1A', marginBottom: 4 },
    itemAuthor: { fontSize: 13, color: '#8E8E93', marginBottom: 6 },
    durationRow: { flexDirection: 'row', alignItems: 'center' },
    itemDuration: { fontSize: 11, color: '#8E8E93', marginLeft: 4 },
    playCircle: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: '#5A827B',
        alignItems: 'center',
        justifyContent: 'center'
    }
});