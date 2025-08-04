import { Routine } from '@/payload-types'
import dayjs from 'dayjs'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { RoutineManagerContext, RoutineStepStatus } from '../types'

type RoutineStore = RoutineManagerContext & {
  routine?: Routine
  initializeRoutine: (routine: Routine) => void
  setStepStatus: (stepId: string, status: RoutineStepStatus, time?: dayjs.Dayjs) => void
}

export const createRoutineStore = () =>
  create(
    immer<RoutineStore>((set, get) => ({
      // Initial state
      currentStepIndex: 0,
      status: 'not-started',
      stepState: {},
      routine: undefined,

      // Initialize routine with steps
      initializeRoutine: (routine: Routine) =>
        set((draft) => {
          draft.routine = routine
          draft.currentStepIndex = 0
          draft.status = 'not-started'

          // Initialize all steps as not-started
          if (routine.steps) {
            routine.steps.forEach((step) => {
              if (step.id) {
                draft.stepState[step.id] = {
                  status: 'not-started',
                }
              }
            })
          }
        }),

      // Set individual step status
      setStepStatus: (stepId: string, status: RoutineStepStatus, time?: dayjs.Dayjs) =>
        set((draft) => {
          if (!draft.stepState[stepId]) {
            draft.stepState[stepId] = { status: 'not-started' }
          }

          draft.stepState[stepId].status = status

          if (status === 'in-progress' && time) {
            draft.stepState[stepId].startTime = time
            draft.stepState[stepId].completionTime = undefined
          } else if (status === 'completed' && time) {
            draft.stepState[stepId].completionTime = time
          }
        }),

      // Start the routine
      startRoutine: () =>
        set((draft) => {
          const state = get()
          if (state.routine?.steps && state.routine.steps.length > 0) {
            draft.status = 'in-progress'
            draft.startTime = dayjs()
            draft.currentStepIndex = 0
            draft.currentStepId = state.routine.steps[0]?.id || undefined

            // Mark first step as in-progress
            if (draft.currentStepId) {
              draft.stepState[draft.currentStepId] = {
                status: 'in-progress',
                startTime: dayjs(),
              }
            }
          }
        }),

      // Cancel the routine
      cancelRoutine: () =>
        set((draft) => {
          draft.status = 'not-started'
          draft.currentStepIndex = 0
          draft.startTime = undefined
          draft.endTime = undefined

          // Reset all steps to not-started
          Object.keys(draft.stepState).forEach((stepId) => {
            draft.stepState[stepId] = { status: 'not-started' }
          })

          if (draft.routine?.steps?.[0]?.id) {
            draft.currentStepId = draft.routine.steps[0].id
          }
        }),

      // Move to next step
      nextStep: () =>
        set((draft) => {
          const state = get()
          const routine = state.routine

          if (!routine?.steps) return

          const currentIndex = state.currentStepIndex
          const currentStepId = state.currentStepId

          // Mark current step as completed
          if (currentStepId) {
            draft.stepState[currentStepId] = {
              ...draft.stepState[currentStepId],
              status: 'completed',
              completionTime: dayjs(),
            }
          }

          const nextIndex = currentIndex + 1

          if (nextIndex >= routine.steps.length) {
            // Routine completed
            draft.status = 'completed'
            draft.endTime = dayjs()
            draft.currentStepId = undefined
          } else {
            // Move to next step
            draft.currentStepIndex = nextIndex
            const nextStepId = routine.steps[nextIndex]?.id
            draft.currentStepId = nextStepId || undefined

            // Mark next step as in-progress
            if (nextStepId) {
              draft.stepState[nextStepId] = {
                status: 'in-progress',
                startTime: dayjs(),
              }
            }
          }
        }),
    })),
  )
