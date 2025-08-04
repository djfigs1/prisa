import { Badge } from '@chakra-ui/react'
import React, { memo } from 'react'

type RoutineOptionalStepIndicatorProps = {}

const RoutineOptionalStepIndicator: React.FC<RoutineOptionalStepIndicatorProps> = memo(({}) => {
  return <Badge variant={'solid'}>OPTIONAL</Badge>
})

export default RoutineOptionalStepIndicator
