import React from 'react'
import RoutineProvider from './RoutineProvider'
import RoutineDisplay from './RoutineDisplay'

type RoutineProps = {
  routineId: string
}

const Routine: React.FC<RoutineProps> = ({ routineId }) => {
  return (
    <RoutineProvider routineId={routineId}>
      <RoutineDisplay />
    </RoutineProvider>
  )
}

export default Routine
