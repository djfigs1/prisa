import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React, { memo } from 'react'
import RoutineStepStatusIndicator from './RoutineStepStatusIndicator'
import RoutineStepTime from './RoutineStepTime'
import RoutineOptionalStepIndicator from './RoutineOptionalStepIndicator'
import dayjs from 'dayjs'
import { RoutineStepStatus } from './types'

type RoutineStepRowProps = {
  name: string
  status?: RoutineStepStatus
  optional?: boolean
  estimatedCompletionTime?: number
  startTime?: dayjs.Dayjs
  completionTime?: dayjs.Dayjs
}

const RoutineStepRow: React.FC<RoutineStepRowProps> = memo(
  ({ name, status, estimatedCompletionTime, startTime, completionTime, optional }) => {
    return (
      <Flex alignItems={'center'} gap={4}>
        <RoutineStepStatusIndicator status={status} />
        <Text fontSize={'s'}>{name}</Text>
        <Box flex={1} />
        <HStack gap={2} flex={0}>
          {optional && <RoutineOptionalStepIndicator />}
          <RoutineStepTime
            status={status}
            startTime={startTime}
            completionTime={completionTime}
            estimatedCompletionTime={estimatedCompletionTime}
          />
        </HStack>
      </Flex>
    )
  },
)

export default RoutineStepRow
