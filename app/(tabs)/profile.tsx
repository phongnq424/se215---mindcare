import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function ProfileScreen() {
    const router = useRouter();
    const [isEnabled, setIsEnabled] = useState(false);

    // Dữ liệu mẫu cho các dòng cài đặt
    const SETTINGS_ACCOUNT = [
        { id: '1', title: 'Thông tin cá nhân', icon: 'person-outline', color: '#E8F2F0' },
        { id: '2', title: 'Cảm xúc của tôi gần đây', icon: 'medical-outline', color: '#E8F2F0' },
        { id: '3', title: 'Quyền riêng tư & Dữ liệu', icon: 'shield-checkmark-outline', color: '#FDF2E9' },
    ];

    return (
        <View style={styles.container}>
            {/* 1. Header Navigation */}
            <View style={styles.navHeader}>
                <Text style={styles.headerTitle}>Hồ sơ</Text>
                <TouchableOpacity hitSlop={15}>
                    <Ionicons name="settings-outline" size={22} color="#1A1A1A" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

                {/* 2. Profile Info Section */}
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' }}
                            style={styles.avatar}
                        />
                        <TouchableOpacity style={styles.editBadge}>
                            <Ionicons name="pencil" size={14} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.userName}>Mind care user 1</Text>
                    <Text style={styles.userBio}>Sinh viên Thiết kế • Đại học Mỹ thuật</Text>

                    <View style={styles.premiumBadge}>
                        <Ionicons name="ribbon" size={14} color="#B8860B" />
                        <Text style={styles.premiumText}>Thành viên Premium</Text>
                    </View>
                </View>

                {/* 3. Stats Grid (3 thẻ nhỏ) */}
                <View style={styles.statsRow}>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>12</Text>
                        <Text style={styles.statLabel}>Buổi tư vấn</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>4.8</Text>
                        <Text style={styles.statLabel}>Tâm trạng TB</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>5</Text>
                        <Text style={styles.statLabel}>Ngày viết NK</Text>
                    </View>
                </View>

                {/* 4. Tài khoản & Quyền riêng tư */}
                <Text style={styles.sectionLabel}>TÀI KHOẢN & QUYỀN RIÊNG TƯ</Text>
                <View style={styles.menuGroup}>
                    {SETTINGS_ACCOUNT.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.menuItem, index !== SETTINGS_ACCOUNT.length - 1 && styles.borderBottom]}
                        >
                            <View style={[styles.iconBox, { backgroundColor: item.color }]}>
                                <Ionicons name={item.icon as any} size={20} color="#5A827B" />
                            </View>
                            <Text style={styles.menuText}>{item.title}</Text>
                            <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
                        </TouchableOpacity>
                    ))}
                </View>

                {/* 5. Tùy chọn (Switch) */}
                <Text style={styles.sectionLabel}>TÙY CHỌN</Text>
                <View style={styles.menuGroup}>
                    <View style={styles.menuItem}>
                        <View style={[styles.iconBox, { backgroundColor: '#FEF2F2' }]}>
                            <Ionicons name="notifications-outline" size={20} color="#EC7063" />
                        </View>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={styles.menuText}>Nhắc nhở hàng ngày</Text>
                            <Text style={styles.menuSubText}>Nhận thông báo viết nhật ký</Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#D1D1D6", true: "#5A827B" }}
                            thumbColor={"#fff"}
                            onValueChange={() => setIsEnabled(previousState => !previousState)}
                            value={isEnabled}
                        />
                    </View>
                </View>

                {/* 6. Nút Đăng xuất */}
                <TouchableOpacity style={styles.logoutBtn}>
                    <Ionicons name="log-out-outline" size={20} color="#EC7063" style={{ marginRight: 8 }} />
                    <Text style={styles.logoutText}>Đăng xuất</Text>
                </TouchableOpacity>

                <Text style={styles.versionText}>MindCare v2.4.0 (Build 302)</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },

    // Header
    navHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
    },
    headerTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A1A', fontFamily: 'Inter' },

    // Profile Section
    profileSection: { alignItems: 'center', marginTop: 20, marginBottom: 25 },
    avatarContainer: { position: 'relative' },
    avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: '#fff' },
    editBadge: {
        position: 'absolute', bottom: 0, right: 0,
        backgroundColor: '#5A827B', width: 28, height: 28,
        borderRadius: 14, alignItems: 'center', justifyContent: 'center',
        borderWidth: 2, borderColor: '#fff'
    },
    userName: { fontSize: 22, fontWeight: '700', color: '#1A1A1A', marginTop: 12, fontFamily: 'Inter' },
    userBio: { fontSize: 13, color: '#8E8E93', marginTop: 4, fontFamily: 'Inter' },
    premiumBadge: {
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: '#FDF2E9', paddingHorizontal: 12, paddingVertical: 6,
        borderRadius: 15, marginTop: 12
    },
    premiumText: { fontSize: 12, color: '#B8860B', fontWeight: '600', marginLeft: 6 },

    // Stats Grid
    statsRow: { flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', marginBottom: 30 },
    statCard: {
        backgroundColor: '#fff', width: '30%', paddingVertical: 15,
        borderRadius: 20, alignItems: 'center',
        // Shadow
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05, shadowRadius: 8, elevation: 2
    },
    statNumber: { fontSize: 18, fontWeight: '700', color: '#5A827B' },
    statLabel: { fontSize: 11, color: '#8E8E93', marginTop: 4, textAlign: 'center' },

    // Menu List
    sectionLabel: { fontSize: 12, fontWeight: '600', color: '#A0A0A0', marginLeft: 25, marginBottom: 10 },
    menuGroup: {
        backgroundColor: '#fff', marginHorizontal: 20, borderRadius: 24,
        marginBottom: 25, paddingHorizontal: 16,
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04, shadowRadius: 10, elevation: 2
    },
    menuItem: {
        flexDirection: 'row', alignItems: 'center', paddingVertical: 14,
    },
    borderBottom: { borderBottomWidth: 0.5, borderBottomColor: '#F2F2F2' },
    iconBox: { width: 38, height: 38, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    menuText: { flex: 1, marginLeft: 12, fontSize: 15, color: '#1A1A1A', fontWeight: '500' },
    menuSubText: { fontSize: 11, color: '#A0A0A0', marginTop: 2 },

    // Logout & Footer
    logoutBtn: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#fff', marginHorizontal: 20, height: 54, borderRadius: 24,
        borderWidth: 1, borderColor: '#F2F2F2'
    },
    logoutText: { color: '#EC7063', fontSize: 15, fontWeight: '600' },
    versionText: { textAlign: 'center', color: '#C7C7CC', fontSize: 11, marginTop: 20, marginBottom: 10 }
});