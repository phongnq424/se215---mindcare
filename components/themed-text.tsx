import { StyleSheet, Text, TextProps } from 'react-native';

export function ThemedText({ style, ...otherProps }: TextProps) {
    return <Text style={[styles.defaultText, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
    defaultText: {
        fontFamily: 'Inter', // Luôn ưu tiên font Inter
        color: '#1A1A1A',
    },
});