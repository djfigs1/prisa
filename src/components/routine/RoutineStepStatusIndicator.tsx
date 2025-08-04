import { Flex, Status } from '@chakra-ui/react'
import React, { memo } from 'react'
import { RoutineStepStatus } from './types'

type RoutineStepStatusIndicatorProps = { status?: RoutineStepStatus }

const StatusSize = 2

const RoutineStepStatusIndicator: React.FC<RoutineStepStatusIndicatorProps> = memo(({ status }) => {
  const getColorPalette = () => {
    switch (status) {
      case 'in-progress':
        return 'orange'
      case 'completed':
        return 'green'
      case 'skipped':
      case 'not-started':
      default:
        return undefined
    }
  }

  return (
    <Flex
      minWidth={StatusSize}
      minHeight={StatusSize}
      alignItems={'center'}
      justify={'center'}
      flex={0}
    >
      <Status.Root>
        {status !== 'not-started' && <Status.Indicator colorPalette={getColorPalette()} />}
      </Status.Root>
    </Flex>
  )
})

export default RoutineStepStatusIndicator
