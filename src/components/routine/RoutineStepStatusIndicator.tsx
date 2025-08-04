import { Flex, Status } from '@chakra-ui/react'
import React, { memo } from 'react'
import { RoutineStepStatus } from './types'

type RoutineStepStatusIndicatorProps = { status?: RoutineStepStatus }

const StatusSize = 5

const RoutineStepStatusIndicator: React.FC<RoutineStepStatusIndicatorProps> = memo(({ status }) => {
  const getColorPalette = () => {
    switch (status) {
      case 'in-progress':
        return 'orange'
      case 'completed':
        return 'green'
      case 'skipped':
        return 'gray'
      case 'not-started':
      default:
        return undefined
    }
  }

  return (
    <Flex width={StatusSize} height={StatusSize} alignItems={'center'} justify={'center'}>
      <Status.Root>
        <Status.Indicator colorPalette={getColorPalette()} />
      </Status.Root>
    </Flex>
  )
})

export default RoutineStepStatusIndicator
