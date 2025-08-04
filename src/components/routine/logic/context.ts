import { useMemo, useEffect, createContext, useContext } from 'react'
import { useRoutineQuery } from './query'
import { createRoutineStore } from './store'
import { RoutineState } from '../types'

export const RoutineContext = createContext<RoutineState | null>(null)

export function useRoutineManager(id?: string): RoutineState {
  const query = useRoutineQuery(id)

  // Memoize the store creation to prevent recreating on every render
  const useRoutineStore = useMemo(() => createRoutineStore(), [id])
  const routineStore = useRoutineStore()

  // Initialize routine when data is loaded
  useEffect(() => {
    if (query.data && !routineStore.routine) {
      routineStore.initializeRoutine(query.data)
    }
  }, [query.data, routineStore])

  return {
    ...routineStore,
    isLoading: query.isLoading || !routineStore.routine,
    error: query.error ?? undefined,
  }
}

export function useRoutine() {
  const context = useContext(RoutineContext)
  if (!context) {
    throw new Error('useRoutine must be used within a RoutineProvider')
  }

  return context
}
