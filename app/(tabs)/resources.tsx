import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const podcastData = [
    { id: '1', title: 'The art of si...', image: require('../../assets/images/podcast1.png') },
    { id: '2', title: 'Meaningful c...', image: require('../../assets/images/podcast2.png') },
    { id: '3', title: 'Daily podcast', image: require('../../assets/images/podcast3.png') },
    { id: '4', title: 'Health weekl...', image: require('../../assets/images/podcast4.png') },
];

const testsData = [
    { id: '1', title: 'Paranoia Test', image: require('../../assets/images/test1.png') },
    { id: '2', title: 'MBTI', image: require('../../assets/images/test2.png') },
    { id: '3', title: 'NAT', image: require('../../assets/images/test3.png') },
];

const articlesData = [
    { id: '1', title: 'Mental Healthcare: Treating Anxiety, Depression, and ADHD with Compassion and Clinical Excellence', image: require('../../assets/images/article1.png') },
    { id: '2', title: 'Max Healthcare partners with Monash University to boost medical research', image: require('../../assets/images/article2.png') },
    { id: '3', title: 'Stress is visibly damaging skin for 50% of Mumbai’s office workers: Experts', image: require('../../assets/images/article3.png') },
];

const screenWidth = Dimensions.get('window').width;

export default function LibraryScreen() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* 1. Header Giữ Nguyên */}
            <View style={styles.header}>
                <Text style={styles.title}>Kho Tàng Tinh Thần</Text>
                <Text style={styles.subtitle}>Khoảnh khắc này, cảm xúc nào đang dẫn lối bạn?</Text>
                <Image source={require('../../assets/images/header_illustration.png')} style={styles.headerImage} />
            </View>

            {/* Podcast */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Podcast</Text>
                    <TouchableOpacity onPress={() => { router.push('/podcast-list') }}>
                        <Text style={styles.seeAllText}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={podcastData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { router.push('/podcast-detail') }} style={styles.podcastCard} activeOpacity={0.7}>
                            <Image source={item.image} style={styles.podcastImage} />
                            <Text style={styles.podcastTitle}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* 2. Điểm chạm ngày - Đưa vào sectionHeader để không bị dính content */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Điểm chạm ngày</Text>
                </View>
                <TouchableOpacity
                    style={styles.quoteCard}
                    onPress={() => router.push('/playlist')}
                    activeOpacity={0.9}
                >
                    <View style={styles.quoteContent}>
                        <Text style={styles.dailyQuote}>
                            “It is better to conquer yourself than to win a thousand battles”
                        </Text>
                        <MaterialCommunityIcons
                            name="format-quote-open"
                            size={40}
                            color="rgba(255,255,255,0.25)"
                            style={styles.quoteIcon}
                        />
                    </View>
                </TouchableOpacity>

                <View style={styles.dailyButtons}>
                    <TouchableOpacity style={styles.dailyBtn} onPress={() => router.push('/playlist')}>
                        <Ionicons name="book-outline" size={20} color="#8E8E93" style={{ marginRight: 8 }} />
                        <Text style={styles.dailyBtnText}>PlayList</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dailyBtn}>
                        <Ionicons name="list-outline" size={20} color="#8E8E93" style={{ marginRight: 8 }} />
                        <Text style={styles.dailyBtnText}>Video</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Self Assessment */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Bạn đã thực sự hiểu về bản thân?</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.seeAllText}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.grid}>
                    {testsData.map(test => (
                        <TouchableOpacity key={test.id} style={styles.gridItem} activeOpacity={0.7}>
                            <Image source={test.image} style={styles.gridImage} />
                            <Text style={styles.gridTitle}>{test.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Recommended Articles - Đưa vào sectionHeader để đồng bộ khoảng cách */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Top bài báo dành cho bạn</Text>
                </View>
                {articlesData.map(article => (
                    <TouchableOpacity key={article.id} style={styles.articleCard} activeOpacity={0.8}>
                        <Image source={article.image} style={styles.articleImage} />
                        <Text style={styles.articleTitle}>{article.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA'
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1A1A1A',
        textAlign: 'left'
    },
    subtitle: {
        fontSize: 14,
        color: '#8E8E93',
        marginTop: 4,
        textAlign: 'left'
    },
    headerImage: {
        width: '100%',
        height: 120,
        marginTop: 15,
        borderRadius: 12,
        resizeMode: 'cover'
    },
    section: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12, // Khoảng cách cố định cho tất cả tiêu đề
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1A1A1A',
        // Bỏ marginBottom ở đây vì sectionHeader đã có
    },
    seeAllText: {
        fontSize: 13,
        color: '#8CA192',
        fontWeight: '600',
    },
    podcastCard: { marginRight: 15, width: 120 },
    podcastImage: { width: 120, height: 120, borderRadius: 12 },
    podcastTitle: { marginTop: 8, fontSize: 13, fontWeight: '500', color: '#1A1A1A' },
    quoteCard: {
        backgroundColor: '#8CA192',
        borderRadius: 24,
        padding: 24,
        position: 'relative',
        overflow: 'hidden',
        minHeight: 100,
        justifyContent: 'center'
    },
    quoteContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    dailyQuote: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '300',
        lineHeight: 26,
        flex: 1,
        paddingRight: 10,
        fontStyle: 'normal'
    },
    quoteIcon: {
        position: 'absolute',
        right: -5,
        bottom: -5,
    },
    dailyButtons: {
        flexDirection: 'row',
        marginTop: 12,
        justifyContent: 'space-between'
    },
    dailyBtn: {
        backgroundColor: '#F0F0F0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 16,
        width: '48%',
    },
    dailyBtnText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#48484A'
    },
    grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    gridItem: { width: '30%', marginBottom: 16, alignItems: 'center' },
    gridImage: { width: screenWidth * 0.25, height: screenWidth * 0.25, borderRadius: 12 },
    gridTitle: { fontSize: 12, textAlign: 'center', marginTop: 8, fontWeight: '500' },
    articleCard: { marginBottom: 20 },
    articleImage: { width: '100%', height: 180, borderRadius: 16 },
    articleTitle: { fontSize: 15, marginTop: 10, fontWeight: '600', color: '#1A1A1A', lineHeight: 22 },
});