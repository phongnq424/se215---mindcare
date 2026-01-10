import { PostProvider } from '@/context/PostContext';
import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    useFonts
} from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import { Text } from 'react-native';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Inter: Inter_400Regular,
        'Inter-Medium': Inter_500Medium,
        'Inter-SemiBold': Inter_600SemiBold,
        'Inter-Bold': Inter_700Bold
    });

    if (!fontsLoaded) {
        return <Text />;
    }

    return (
        <PostProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </PostProvider>
    );
}
