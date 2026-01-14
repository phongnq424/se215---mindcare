import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    totalScore: number;
    onBackHome: () => void;
};

export default function ResultScreen({ totalScore, onBackHome }: Props) {
    const getResult = () => {
        if (totalScore <= 10) {
            return {
                title: 'Bạn đang khá ổn 🌱',
                desc: 'Tinh thần của bạn hiện tại tương đối cân bằng. Hãy tiếp tục lắng nghe và chăm sóc bản thân nhé.'
            };
        }
        if (totalScore <= 20) {
            return {
                title: 'Bạn đang hơi mệt 💚',
                desc: 'Có những áp lực nhỏ đang ảnh hưởng đến bạn. Một chút nghỉ ngơi và quan tâm bản thân sẽ rất cần thiết.'
            };
        }
        if (totalScore <= 30) {
            return {
                title: 'Bạn đang chịu nhiều áp lực 🌧️',
                desc: 'Cảm xúc của bạn có vẻ đang bị dồn nén. Đừng ngần ngại chia sẻ hoặc tìm đến những nội dung chữa lành.'
            };
        }
        return {
            title: 'Bạn cần được lắng nghe 🤍',
            desc: 'Bạn không hề yếu đuối. Có thể đây là lúc bạn nên chậm lại và cho bản thân nhiều sự quan tâm hơn.'
        };
    };

    const result = getResult();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{result.title}</Text>
            <Text style={styles.score}>Tổng điểm: {totalScore}/40</Text>
            <Text style={styles.desc}>{result.desc}</Text>

            <TouchableOpacity style={styles.button} onPress={onBackHome}>
                <Text style={styles.buttonText}>Quay về trang chủ</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        padding: 24
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 12
    },
    score: {
        fontSize: 16,
        textAlign: 'center',
        color: '#6B7280',
        marginBottom: 20
    },
    desc: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        color: '#374151',
        marginBottom: 40
    },
    button: {
        backgroundColor: '#4CAF93',
        paddingVertical: 14,
        borderRadius: 12
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    }
});
