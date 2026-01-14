import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const MOCK_QUESTION = {
    id: 5,
    total: 20,
    category: 'Cảm xúc & Lo âu',
    title: 'Cảm xúc của bạn dạo này thế nào?',
    question: 'Trong 2 tuần qua, bạn có thường xuyên cảm thấy lo lắng hoặc bồn chồn không?',
    options: [
        { id: 'a', label: 'Không bao giờ' },
        { id: 'b', label: 'Hiếm khi' },
        { id: 'c', label: 'Thỉnh thoảng' },
        { id: 'd', label: 'Thường xuyên' },
        { id: 'e', label: 'Luôn luôn' },
    ]
};

export default function TestDetailScreen() {
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<string | null>('c');

    const progress = (MOCK_QUESTION.id / MOCK_QUESTION.total) * 100;

    return (
        <View style={styles.container}>
            {/* 1. Header tinh gọn */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} hitSlop={15}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>

                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle} numberOfLines={1}>
                        {MOCK_QUESTION.title}
                    </Text>
                    {/* Đường line trang trí dưới tiêu đề như trong ảnh của cậu */}
                    <View style={styles.titleUnderline} />
                </View>

                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.exitText}>Thoát</Text>
                </TouchableOpacity>
            </View>

            {/* 2. Thanh tiến độ nằm sát Header */}
            <View style={styles.progressContainer}>
                <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
                </View>
                <Text style={styles.counterText}>Câu {MOCK_QUESTION.id}/{MOCK_QUESTION.total}</Text>
            </View>

            <ScrollView bounces={false} contentContainerStyle={styles.scrollContent}>
                {/* 3. Badge & Question */}
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{MOCK_QUESTION.category}</Text>
                </View>

                <Text style={styles.questionText}>
                    {MOCK_QUESTION.question}
                </Text>

                {/* 4. Danh sách lựa chọn */}
                <View style={styles.optionsList}>
                    {MOCK_QUESTION.options.map((option) => {
                        const isSelected = selectedId === option.id;
                        return (
                            <TouchableOpacity
                                key={option.id}
                                activeOpacity={0.8}
                                onPress={() => setSelectedId(option.id)}
                                style={[styles.optionCard, isSelected && styles.optionCardSelected]}
                            >
                                <View style={[styles.radioCircle, isSelected && styles.radioCircleSelected]}>
                                    {isSelected && <View style={styles.radioInner} />}
                                </View>
                                <Text style={[styles.optionLabel, isSelected && styles.optionLabelSelected]}>
                                    {option.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>

            {/* 5. Footer cố định */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnSecondary}>
                    <Text style={styles.btnSecondaryText}>Quay lại</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnPrimary} onPress={() => router.push('/result-test')}>
                    <Text style={styles.btnPrimaryText}>Tiếp theo</Text>
                    <Ionicons name="arrow-forward" size={18} color="#fff" style={{ marginLeft: 6 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },

    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 50, // Bù đắp cho việc bỏ SafeAreaView
        paddingBottom: 15,
    },
    headerTitleContainer: { flex: 1, alignItems: 'center', marginHorizontal: 10 },
    headerTitle: { fontSize: 15, fontWeight: '700', color: '#1A1A1A' },
    titleUnderline: { width: '80%', height: 2, backgroundColor: '#5A827B', marginTop: 2, opacity: 0.3 },
    exitText: { fontSize: 15, color: '#E57373', fontWeight: '500' },

    // Progress
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    progressBarBg: { flex: 1, height: 6, backgroundColor: '#F0F0F0', borderRadius: 3, overflow: 'hidden' },
    progressBarFill: { height: '100%', backgroundColor: '#5A827B' },
    counterText: { marginLeft: 12, fontSize: 13, color: '#8E8E93', fontWeight: '500' },

    scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },

    badge: {
        backgroundColor: '#E8F2F0',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
        alignSelf: 'flex-start',
        marginBottom: 20
    },
    badgeText: { color: '#5A827B', fontSize: 12, fontWeight: '600' },

    questionText: { fontSize: 20, fontWeight: '800', color: '#1A1A1A', lineHeight: 28, marginBottom: 30 },

    // Options
    optionsList: { gap: 12 },
    optionCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        backgroundColor: '#fff'
    },
    optionCardSelected: { borderColor: '#5A827B', backgroundColor: '#F9FCFB' },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#D1D1D6',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12
    },
    radioCircleSelected: { borderColor: '#5A827B' },
    radioInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#5A827B' },
    optionLabel: { fontSize: 16, color: '#4A4A4A' },
    optionLabelSelected: { color: '#1A1A1A', fontWeight: '600' },

    // Footer
    footer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#F2F2F2',
        gap: 12
    },
    btnSecondary: {
        flex: 1,
        height: 52,
        backgroundColor: '#F5F5F7',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnSecondaryText: { color: '#8E8E93', fontSize: 15, fontWeight: '600' },
    btnPrimary: {
        flex: 2,
        height: 52,
        backgroundColor: '#5A827B',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnPrimaryText: { color: '#fff', fontSize: 15, fontWeight: '700' }
});