import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import React from 'react'

type RoutineControlsProps = {}

const RoutineControls: React.FC<RoutineControlsProps> = ({}) => {
  return (
    <Flex gap={2} width="full">
      <Box flex={1}></Box>
      <Button>DONE</Button>
    </Flex>
  )
}

export default RoutineControls
