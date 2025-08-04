import dayjs from 'dayjs'

export type RoutineStepStatus = 'not-started' | 'in-progress' | 'skipped' | 'completed'

export type RoutineStepState = {
  status: RoutineStepStatus
  startTime?: dayjs.Dayjs
  completionTime?: dayjs.Dayjs
}
