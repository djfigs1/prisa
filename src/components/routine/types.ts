import { Routine } from '@/payload-types'
import { UseQueryResult } from '@tanstack/react-query'
import dayjs from 'dayjs'

export type RoutineStepStatus = 'not-started' | 'in-progress' | 'skipped' | 'completed'

export type RoutineStepState = {
  status: RoutineStepStatus
  startTime?: dayjs.Dayjs
  completionTime?: dayjs.Dayjs
}

export type RoutineStatus = 'not-started' | 'in-progress' | 'completed'

export type RoutineManagerState = {
  currentStepId?: string
  currentStepIndex: number
  status: RoutineStatus
  startTime?: dayjs.Dayjs
  endTime?: dayjs.Dayjs
  stepState: Record<string, RoutineStepState>
}

export interface RoutineManagerHandlers {
  startRoutine: () => void
  cancelRoutine: () => void
  nextStep: () => void
}

export type RoutineManagerContext = RoutineManagerState & RoutineManagerHandlers

export type RoutineState = {
  routine?: Routine
  isLoading: boolean
  error?: Error
} & RoutineManagerContext
