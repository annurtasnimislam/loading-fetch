import React, { useRef } from 'react'
import { ScrollView, Text, View } from 'react-native'

const Scroll = () => {
    const prevScrollY = useRef(0)

    const handleScroll = (event) => {
        const currentScrollY = event.nativeEvent.contentOffset.y
        if (currentScrollY > prevScrollY.current) {
            console.log('User is scrolling down')
        } else if (currentScrollY < prevScrollY.current) {
            console.log('User is scrolling up')
        }
        prevScrollY.current = currentScrollY
    }
    return (
        <ScrollView onScroll={handleScroll}>
            {/* Your content goes here */}
            <View>
                <Text style={{ padding: 50 }}>tuba</Text>
                <Text style={{ padding: 50 }}>tuba</Text>
                <Text style={{ padding: 50 }}>tuba</Text>
                <Text style={{ padding: 50 }}>tuba</Text>
                <Text style={{ padding: 50 }}>tuba</Text>
                <Text style={{ padding: 50 }}>tuba</Text>
                <Text style={{ padding: 50 }}>tuba</Text>
                <Text style={{ padding: 50 }}>tuba</Text>
            </View>
        </ScrollView>
    )
}

export default Scroll
