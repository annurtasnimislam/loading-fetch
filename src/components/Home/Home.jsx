import React, { useState, useRef } from 'react'
import { Text, Button, ScrollView } from 'react-native'

const API_URL = 'https://ec.healthxbd.com/api/v1' // Replace with your API endpoint

const Home = () => {
    const [info, setInfo] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [limit, setLimit] = useState(5)
    const [medicines] = useState('')

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`${API_URL}/medicines/?search_medicine=${medicines}&skip=0&limit=${limit}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })

            const data = await response.json()

            if (response.ok) {
                console.log('success')
                setInfo(data)
            }
        } catch {
            alert('Please check your internet connection!')
        }
        setIsLoading(false)
    }

    const prevScrollY = useRef(0)

    const handleScroll = (event) => {
        const currentScrollY = event.nativeEvent.contentOffset.y
        if (currentScrollY > prevScrollY.current) {
            console.log('User is scrolling down')
            fetchData()
            setLimit((prev) => prev + 5)
        } else if (currentScrollY < prevScrollY.current) {
            console.log('User is scrolling up')
        }
        prevScrollY.current = currentScrollY
    }

    return (
        <ScrollView onScroll={handleScroll}>
            <Text>Data:</Text>
            {info.map((item) => (
                <Text key={item.id}>{item.name}</Text>
            ))}
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <Button
                    title="Load More"
                    onPress={() => {
                        fetchData()
                        setLimit((prev) => prev + 10)
                    }}
                />
            )}
        </ScrollView>
    )
}

export default Home
