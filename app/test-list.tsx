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

const CATEGORIES = ['Tất cả', 'Tính cách', 'Cảm xúc', 'Mối quan hệ'];

const TEST_DATA = [
    {
        id: '1',
        // Thay vì "Paranoia Test" -> Đặt thành một câu hỏi gần gũi
        title: 'Bạn có đang quá nhạy cảm với thế giới xung quanh?',
        description: 'Đôi khi sự cẩn trọng giúp ta an toàn, nhưng quá mức lại là gánh nặng.',
        time: '12 phút',
        code: 'Paranoia',
        image: require('../assets/images/test1.png'),
        color: '#2BB79F'
    },
    {
        id: '2',
        // Thay vì "MBTI" -> Tập trung vào giá trị nhận được
        title: 'Bản sắc thực sự của bạn là gì trong 16 nhóm tính cách?',
        description: 'Hiểu rõ thế mạnh bản thân để chọn hướng đi đúng đắn nhất.',
        time: '20 phút',
        code: 'MBTI',
        image: require('../assets/images/test2.png'),
        color: '#87CEEB'
    },
    {
        id: '3',
        // Thay vì "NAT" -> Nói về cảm xúc hiện tại
        title: 'Những suy nghĩ tiêu cực có đang bủa vây tâm trí bạn?',
        description: 'Nhận diện các "bẫy tâm lý" để tìm lại sự lạc quan vốn có.',
        time: '10 phút',
        code: 'NAT',
        image: require('../assets/images/test3.png'),
        color: '#FFB347'
    },
    {
        id: '4',
        // Thay vì "DASS-21" -> Đặt câu hỏi về áp lực
        title: 'Áp lực cuộc sống dạo này có làm bạn kiệt sức?',
        description: 'Đánh giá mức độ Stress để biết khi nào bạn cần nghỉ ngơi.',
        time: '10 phút',
        code: 'DASS-21',
        image: require('../assets/images/podcast1.png'),
        color: '#EC7063'
    }
];

export default function AssessmentScreen() {
    const router = useRouter();
    const [activeTag, setActiveTag] = useState('Tất cả');

    const renderHeader = () => (
        <View style={styles.headerContent}>
            {/* Thanh tìm kiếm bo tròn */}
            <View style={styles.searchSection}>
                <Ionicons name="search-outline" size={20} color="#8E8E93" />
                <TextInput
                    placeholder="Tìm chủ đề bạn quan tâm..."
                    style={styles.searchInput}
                    placeholderTextColor="#8E8E93"
                />
            </View>

            {/* Tags lọc danh mục */}
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

            {/* Bài test nổi bật nhất */}
            <TouchableOpacity style={styles.featuredCard} activeOpacity={0.95}>
                <Image
                    // Sử dụng ảnh chất lượng cao, tạo cảm giác bình yên
                    source={{ uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80' }}
                    style={styles.featuredImage}
                />
                {/* Lớp phủ tối màu + Nội dung đè lên */}
                <View style={styles.featuredOverlay}>
                    {/* Thêm Badge để trông xịn hơn */}
                    <View style={styles.badgeContainer}>
                        <Ionicons name="sparkles" size={12} color="#fff" style={{ marginRight: 6 }} />
                        <Text style={styles.badgeText}>Gợi ý hôm nay</Text>
                    </View>

                    <Text style={styles.featuredTitle}>Hôm nay bạn thấy thế nào?</Text>
                    <Text style={styles.featuredSub}>Dành 5 phút để lắng nghe tiếng nói bên trong</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Gợi ý cho riêng bạn</Text>
        </View>
    );

    const renderTestItem = ({ item }: { item: typeof TEST_DATA[0] }) => (
        <View style={styles.testCard}>
            {/* Ảnh card lớn chiếm trọn phần trên */}
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.cardImage} />
                <View style={styles.timeTag}>
                    <Ionicons name="timer-outline" size={12} color="#fff" />
                    <Text style={styles.timeTagText}>{item.time}</Text>
                </View>
            </View>

            <View style={styles.testInfo}>
                <Text style={styles.testTitle}>{item.title}</Text>
                <Text style={styles.testDescription}>{item.description}</Text>

                <View style={styles.cardFooter}>
                    <Text style={styles.codeText}>Mã: {item.code}</Text>
                    <TouchableOpacity
                        style={styles.btnPrimary}
                        onPress={() => router.push('/test-detail')} // Chuyển hướng đến trang chi tiết bài viết giả sử
                    >
                        <Text style={styles.btnText}>Làm bài ngay</Text>
                        <Ionicons name="arrow-forward" size={14} color="#fff" style={{ marginLeft: 4 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.navHeader}>
                <TouchableOpacity onPress={() => router.back()} hitSlop={15}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Khám phá bản thân</Text>
                <TouchableOpacity style={styles.userCircle}>
                    <Ionicons name="person" size={16} color="#5A827B" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={TEST_DATA}
                renderItem={renderTestItem}
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
    navHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
    },
    headerTitle: { fontSize: 17, fontWeight: '700', color: '#1A1A1A', fontFamily: 'Inter' },
    userCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#E8F2F0', alignItems: 'center', justifyContent: 'center' },

    headerContent: { padding: 20 },
    listContent: { paddingBottom: 30 },

    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 46,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    searchInput: { flex: 1, marginLeft: 10, fontSize: 14 },

    tagScroll: { marginTop: 15, marginBottom: 5 },
    tagItem: {
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#F0F0F0'
    },
    tagItemActive: { backgroundColor: '#5A827B', borderColor: '#5A827B' },
    tagText: { fontSize: 13, color: '#666' },
    tagTextActive: { color: '#fff', fontWeight: '600' },

    featuredCard: {
        height: 150,
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: 20,
        marginBottom: 25,
    },
    featuredImage: { width: '100%', height: '100%' },
    featuredOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 20,
        justifyContent: 'center'
    },
    featuredTitle: { color: '#fff', fontSize: 18, fontWeight: '700' },
    featuredSub: { color: '#fff', fontSize: 12, opacity: 0.9, marginTop: 4 },

    sectionTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A1A', marginBottom: 15 },

    // CARD STYLE (Giữ phong cách cũ của cậu)
    testCard: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 24,
        marginBottom: 20,
        overflow: 'hidden',
        // Đổ bóng sâu hơn một chút cho hiện đại
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 3,
    },
    imageContainer: {
        height: 140,
        width: '100%',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0'
    },
    timeTag: {
        position: 'absolute',
        bottom: 12,
        right: 12,
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeTagText: { color: '#fff', fontSize: 11, fontWeight: '600', marginLeft: 4 },
    testInfo: { padding: 16 },
    testTitle: { fontSize: 16, fontWeight: '700', color: '#1A1A1A', marginBottom: 6, lineHeight: 22 },
    testDescription: { fontSize: 13, color: '#8E8E93', lineHeight: 18, marginBottom: 16 },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#F2F2F2',
        paddingTop: 12
    },
    codeText: { fontSize: 11, color: '#C7C7CC', fontWeight: '500' },
    btnPrimary: {
        backgroundColor: '#5A827B',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnText: { color: '#fff', fontSize: 13, fontWeight: '700' },
    badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(90, 130, 123, 0.8)', // Màu teal bán trong suốt
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        marginBottom: 12,
    },
    badgeText: { color: '#fff', fontSize: 11, fontWeight: '600' },
});