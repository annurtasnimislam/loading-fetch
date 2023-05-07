import { View, KeyboardAvoidingView, ScrollView } from 'react-native'
import tw from '../../../library/tailwind'

export default function Wrapper({ children }) {
    return (
        <KeyboardAvoidingView style={tw`flex-1`}>
            <View style={tw`${styles.container}`}>
                <ScrollView style={tw`${styles.wrapper}`}>{children}</ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = {
    container: 'flex-1 justify-center',
    wrapper: 'flex-1 bg-white px-8 py-10',
}
