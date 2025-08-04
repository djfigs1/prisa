import { Routine } from '@/payload-types'
import { For, Stack } from '@chakra-ui/react'
import React from 'react'
import RoutineStepRow from './RoutineStepRow'
import { RoutineStepState } from './types'

type RoutineStepListProps = {
  routine: Routine
  stepState?: Record<string, RoutineStepState>
}

const RoutineStepList: React.FC<RoutineStepListProps> = ({ routine, stepState }) => {
  return (
    <Stack gap={2}>
      <For each={routine.steps ?? []}>
        {(step) => (
          <RoutineStepRow
            key={step.id}
            name={step.taskName}
            estimatedCompletionTime={step.estimatedCompletionTime ?? undefined}
            optional={step.optional ?? false}
            status={step.id ? stepState?.[step.id]?.status : 'not-started'}
            startTime={step.id ? stepState?.[step.id]?.startTime : undefined}
            completionTime={step.id ? stepState?.[step.id]?.completionTime : undefined}
          />
        )}
      </For>
    </Stack>
  )
}

export default RoutineStepList
