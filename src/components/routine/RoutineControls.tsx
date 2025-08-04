import { Box, Button, Flex, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { RoutineStatus } from './types'

type RoutineControlsProps = {
  status: RoutineStatus
  onStart?: () => void
  onNext?: () => void
}

const RoutineControls: React.FC<RoutineControlsProps> = ({ status, onStart, onNext }) => {
  return (
    <HStack gap={2} width="full">
      {status === 'not-started' && (
        <Button colorScheme="blue" flex={1} onClick={onStart}>
          START
        </Button>
      )}
      {status === 'in-progress' && (
        <Button flex={1} onClick={onNext}>
          COMPLETE STEP
        </Button>
      )}
    </HStack>
  )
}

export default RoutineControls
