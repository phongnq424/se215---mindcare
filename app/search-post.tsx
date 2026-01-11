import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
                </TouchableOpacity>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Tìm bài viết, người dùng..."
                    placeholderTextColor="#B0B0B0"
                    autoFocus
                />
            </View>

            <View style={styles.empty}>
                <Text style={styles.emptyText}>Nhập từ khóa để tìm kiếm</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 52,
        borderBottomWidth: 0.5,
        borderBottomColor: '#EAEAEA',
        gap: 12
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#1A1A1A'
    },
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        fontSize: 14,
        color: '#8E8E93'
    }
});
