'use client'
import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

type WeatherProps = {}

const Weather: React.FC<WeatherProps> = ({}) => {
  return (
    <Stack textAlign="center" gap="4" lineHeight={1}>
      <Text fontSize="5xl">69°F</Text>
    </Stack>
  )
}

export default Weather
