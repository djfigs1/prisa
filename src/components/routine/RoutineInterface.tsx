'use client'
import { Box, Card, Spinner, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useImmer } from 'use-immer'
import TechCard from '../ui/TechCard'
import RoutineControls from './RoutineControls'
import type { Routine } from '@/payload-types'
import RoutineStepList from './RoutineStepList'
import { RoutineStepState } from './types'
import RoutineLogic from './RoutineLogic'

type RoutineInterfaceProps = {
  routineId?: string
}

const RoutineInterface: React.FC<RoutineInterfaceProps> = ({ routineId }) => {
  // Immer state for managing routine step states
  const [stepStates, setStepStates] = useImmer<Record<string, RoutineStepState>>({})

  const {
    data: routine,
    isLoading,
    error,
  } = useQuery<Routine>({
    queryKey: ['routine', routineId],
    queryFn: async () => {
      if (!routineId) throw new Error('Routine ID is required')

      const response = await fetch(`/api/routines/${routineId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch routine: ' + response.statusText)
      }
      return response.json()
    },
    enabled: !!routineId, // Only run query if routineId exists
  })

  // Initialize step states when routine data is loaded
  React.useEffect(() => {
    if (routine?.steps) {
      setStepStates((draft) => {
        routine.steps?.forEach((step) => {
          if (step.id && !draft[step.id]) {
            draft[step.id] = {
              status: 'not-started',
            }
          }
        })
      })
    }
  }, [routine, setStepStates])

  if (!routineId) {
    return (
      <Box bg="red.100" color="red.800" p={4} borderRadius="md">
        <Text fontWeight="bold">Error:</Text>
        <Text>No routine ID provided</Text>
      </Box>
    )
  }

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <Spinner size="lg" />
        <Text ml={3}>Loading routine...</Text>
      </Box>
    )
  }

  if (error) {
    return (
      <Box bg="red.100" color="red.800" p={4} borderRadius="md">
        <Text fontWeight="bold">Error:</Text>
        <Text>Error loading routine: {(error as Error).message}</Text>
      </Box>
    )
  }

  return (
    <RoutineLogic routine={routine!}>
      <TechCard>
        <Card.Header>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            {routine?.name || 'Unnamed Routine'}
          </Text>
          <RoutineStepList routine={routine!} stepState={stepStates} />
        </Card.Header>
        <Card.Body></Card.Body>
        <Card.Footer>
          <RoutineControls />
        </Card.Footer>
      </TechCard>
    </RoutineLogic>
  )
}

export default RoutineInterface
