import { Box, HStack, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import React from 'react'
import DurationDisplay from '../ui/time/DurationDisplay'
import DurationSince from '../ui/time/DurationSince'
import { RoutineStepStatus } from './types'

type RoutineStepTimeProps = {
  status?: RoutineStepStatus
  estimatedCompletionTime?: number
  startTime?: dayjs.Dayjs
  completionTime?: dayjs.Dayjs
}

const RoutineStepTime: React.FC<RoutineStepTimeProps> = ({
  status,
  estimatedCompletionTime,
  completionTime,
  startTime,
}) => {
  const getColorPalette = () => {
    switch (status) {
      case 'in-progress':
        return 'orange'
      case 'completed':
        return 'green'
      case 'skipped':
      case 'not-started':
      default:
        return 'gray'
    }
  }

  const colorPalette = getColorPalette()
  return (
    <Box
      bgColor={'colorPalette.950'}
      paddingTop={1}
      paddingBottom={1}
      paddingLeft={2}
      paddingRight={2}
      borderColor={'colorPalette.500'}
      borderWidth={1}
      fontSize={'xs'}
      colorPalette={colorPalette}
      color={'colorPalette.fg'}
      borderRadius={'md'}
    >
      <HStack gap={1} alignItems={'center'} justifyContent={'center'}>
        <DurationSince startTime={startTime} endTime={completionTime} />
        <Text>/</Text>
        <DurationDisplay duration={estimatedCompletionTime} />
      </HStack>
    </Box>
  )
}

export default RoutineStepTime
