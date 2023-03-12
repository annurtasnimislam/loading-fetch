import { useContext } from 'react'
import { View, Text } from 'react-native'
import UserName from '../../contexts/userName'
import tw from '../../library/tailwind'

export default function Home() {
    const { userName, setUserName } = useContext(UserName)

    const handleSubmit = () => {
        setUserName('Antor')
    }

    return (
        <View style={tw`flex-1 justify-center items-center bg-deep_primary`}>
            <Text style={tw`log_btn`} onPress={handleSubmit}>
                HEALTHx
            </Text>
            <Text style={tw`text-white`}>Name: {userName}</Text>
        </View>
    )
}
