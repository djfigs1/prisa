import { Routine } from '@/payload-types'
import React from 'react'

type RoutineLogicProps = {
  routine: Routine
  children?: React.ReactNode
}

const RoutineLogic: React.FC<RoutineLogicProps> = ({ children }) => {
  return <>{children}</>
}

export default RoutineLogic
