import React from 'react'
import { RoutineContext, useRoutineManager } from './logic/context'

type RoutineProviderProps = {
  routineId?: string
  children?: React.ReactNode
}

const RoutineProvider: React.FC<RoutineProviderProps> = ({ routineId, children }) => {
  const routine = useRoutineManager(routineId)
  return <RoutineContext.Provider value={routine}>{children}</RoutineContext.Provider>
}

export default RoutineProvider
