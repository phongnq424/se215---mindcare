import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AICareScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header Area */}
            <View style={styles.headerBot}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png' }}
                    style={styles.botAvatarLarge}
                />

                <TouchableOpacity
                    style={styles.chatNowBtn}
                    onPress={() => router.push('/chat-detail')}
                    activeOpacity={0.85}
                >
                    <Ionicons name="chatbubble-ellipses-outline" size={18} color="#fff" />
                    <Text style={styles.chatNowText}>Kể tớ nghe hôm nay của bạn</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Main Analysis Card */}
                <TouchableOpacity
                    style={styles.analysisCard}
                    onPress={() => router.push('/chat-detail')}
                >
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Phân tích tâm lý</Text>
                        <Ionicons name="arrow-forward" size={20} color="#5A827B" />
                    </View>

                    {/* Circular Progress (Dùng View giả lập) */}
                    <View style={styles.chartCenter}>
                        <View style={styles.donutCircle}>
                            <Text style={styles.percentageText}>80%</Text>
                            <Text style={styles.statusText}>ỔN ĐỊNH</Text>
                        </View>
                    </View>

                    {/* Progress Bars */}
                    <View style={styles.metricsContainer}>
                        <MetricBar label="Cảm xúc" value={80} total={100} color="#5A827B" />
                        <MetricBar label="Stress" value={45} total={100} color="#FF8A00" />
                        <MetricBar label="Tự tin" value={90} total={100} color="#4A90E2" />
                    </View>

                    {/* Legend */}
                    <View style={styles.legendRow}>
                        <LegendItem color="#5A827B" label="Tích cực" />
                        <LegendItem color="#FF8A00" label="Căng thẳng" />
                        <LegendItem color="#4A90E2" label="Tự tin" />
                    </View>
                </TouchableOpacity>

                {/* Gợi ý thêm phần dưới: Đề xuất hành động */}
                <View style={styles.suggestionSection}>
                    <Text style={styles.sectionTitle}>Đề xuất cho bạn</Text>

                    <View style={styles.suggestionRow}>
                        <SuggestionCard
                            icon="clipboard-outline"
                            label="Chủ động hiểu mình"
                            color="#E8F5E9"
                            onPress={() => router.push('/test-list')}
                        />

                        <SuggestionCard
                            icon="headset-outline"
                            label="Nhạc thư giãn"
                            color="#E3F2FD"
                            onPress={() => router.push('/playlist')}
                        />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

// Sub-components
const MetricBar = ({ label, value, total, color }: any) => (
    <View style={styles.metricItem}>
        <View style={styles.metricLabelRow}>
            <Text style={styles.metricLabel}>{label}</Text>
            <Text style={styles.metricValue}>{value}/{total}</Text>
        </View>
        <View style={styles.barBg}>
            <View style={[styles.barFill, { width: `${value}%`, backgroundColor: color }]} />
        </View>
    </View>
);

const LegendItem = ({ color, label }: any) => (
    <View style={styles.legendItem}>
        <View style={[styles.dot, { backgroundColor: color }]} />
        <Text style={styles.legendLabel}>{label}</Text>
    </View>
);

const SuggestionCard = ({ icon, label, color, onPress }: any) => (
    <TouchableOpacity
        style={[styles.sugCard, { backgroundColor: color }]}
        onPress={onPress}
        activeOpacity={0.8}
    >
        <Ionicons name={icon} size={24} color="#333" />
        <Text style={styles.sugLabel}>{label}</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA'
    },
    headerBot: {
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botAvatarLarge: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    chatNowBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#5A827B',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20
    },

    chatNowText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600'
    },
    scrollContent: {
        padding: 20,
        paddingTop: 0,
        paddingBottom: 40
    },
    analysisCard: {
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1A1A1A'
    },
    chartCenter: {
        alignItems: 'center',
        marginBottom: 30
    },
    donutCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 8,
        borderColor: '#5A827B',
        borderStyle: 'dashed', // Đổi sang dashed để giống ảnh mẫu của cậu
        alignItems: 'center',
        justifyContent: 'center'
    },
    percentageText: {
        fontSize: 24,
        fontWeight: '800',
        color: '#1A1A1A'
    },
    statusText: {
        fontSize: 10,
        color: '#8E8E93',
        fontWeight: '600'
    },
    metricsContainer: {
        gap: 15,
        marginBottom: 20
    },

    metricItem: {
        marginBottom: 12
    },
    metricLabelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    metricLabel: {
        fontSize: 13,
        color: '#666',
        fontWeight: '500'
    },
    metricValue: {
        fontSize: 12,
        color: '#999'
    },
    barBg: {
        height: 6,
        backgroundColor: '#F0F0F0',
        borderRadius: 3,
        overflow: 'hidden'
    },
    barFill: {
        height: '100%',
        borderRadius: 3
    },
    legendRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        borderTopWidth: 1,
        borderTopColor: '#F5F5F5',
        paddingTop: 15
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 6
    },
    legendLabel: {
        fontSize: 11,
        color: '#8E8E93'
    },
    // ---------------------------------------

    suggestionSection: {
        marginTop: 25
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 15,
        color: '#1A1A1A'
    },
    suggestionRow: {
        flexDirection: 'row',
        gap: 12
    },
    sugCard: {
        flex: 1,
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        gap: 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.02)'
    },
    sugLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#444'
    }
});