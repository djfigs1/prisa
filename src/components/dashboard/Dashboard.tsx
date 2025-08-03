'use client'
import { Box, Button, Card, Flex, HStack, IconButton, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import TechCard from '../ui/TechCard'
import Clock from './widgets/Clock'
import Weather from './widgets/Weather'
import { MdClose, MdEject } from 'react-icons/md'
import DND from './widgets/DND'

type DashboardProps = {
  dashboardId: string
}

const Dashboard: React.FC<DashboardProps> = ({ dashboardId }) => {
  const [bgImgUrl, setBgImgUrl] = React.useState<string | undefined>(undefined)
  const [colorPalette, setColorPalette] = React.useState<string | undefined>()

  useEffect(() => {
    // Fetch the background image URL from an API or other source
    const fetchBgImage = async () => {
      const response = await fetch(`/api/dashboards/${dashboardId}`)
      const data = await response.json()
      setBgImgUrl(data.backgroundImage.url)
      setColorPalette(data.colorPalette)
    }

    fetchBgImage()
  }, [dashboardId])

  return (
    <Box
      width="100vw"
      height="100vh"
      color="colorPalette.500"
      bgImage={bgImgUrl ? `url("${bgImgUrl}")` : undefined}
      bgSize="cover"
      bgPos="center"
      colorPalette={colorPalette}
    >
      <Box position="absolute" bottom={8} left={8} right={8}>
        <Flex alignItems={'center'} justifyContent={'center'} width="full">
          <TechCard>
            <Card.Body minWidth={'1200px'}>
              <HStack gap="16" width="100%" alignItems={'center'} justifyContent={'center'}>
                <HStack flex={1} justifyContent={'center'}>
                  <Weather />
                </HStack>
                <Clock />
                <HStack flex={1} justifyContent={'center'}>
                  <DND />
                </HStack>
              </HStack>
            </Card.Body>
          </TechCard>
        </Flex>
      </Box>
    </Box>
  )
}

export default Dashboard
