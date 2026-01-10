import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export function ActionSheet({ visible, onClose }: { visible: boolean, onClose: () => void }) {
    return (
        <Modal visible={visible} transparent animationType="slide">
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <View style={styles.sheet}>
                            <View style={styles.handle} />

                            {/* Nhóm 1 */}
                            <View style={styles.section}>
                                <MenuOption icon="add-circle-outline" label="Quan tâm" />
                                <MenuOption icon="remove-circle-outline" label="Không quan tâm" last />
                            </View>

                            {/* Nhóm 2 */}
                            <View style={styles.section}>
                                <MenuOption icon="bookmark-outline" label="Lưu bài viết" />
                                <MenuOption icon="alert-circle-outline" label="Báo cáo bài viết" />
                                <MenuOption icon="notifications-outline" label="Nhận thông báo về bài viết" last />
                            </View>

                            {/* Nhóm 3 */}
                            <View style={styles.section}>
                                <MenuOption icon="close-circle-outline" label="Bỏ theo dõi người dùng" last color="#407873" />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

// Component con cho từng dòng menu
function MenuOption({ icon, label, last, color = "#1A1A1A" }: any) {
    return (
        <TouchableOpacity style={[styles.option, !last && styles.border]}>
            <Ionicons name={icon} size={22} color={color} />
            <Text style={[styles.label, { color }]}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' },
    sheet: { backgroundColor: '#F2F2F7', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 16, paddingBottom: 40 },
    handle: { width: 40, height: 5, backgroundColor: '#C7C7CC', borderRadius: 3, alignSelf: 'center', marginBottom: 15 },
    section: { backgroundColor: '#fff', borderRadius: 12, marginBottom: 15, overflow: 'hidden' },
    option: { flexDirection: 'row', alignItems: 'center', padding: 15 },
    border: { borderBottomWidth: 0.5, borderBottomColor: '#E5E5EA' },
    label: { marginLeft: 12, fontSize: 16, fontFamily: 'Inter', fontWeight: '500' }
});