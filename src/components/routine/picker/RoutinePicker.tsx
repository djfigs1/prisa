'use client'

import TechCard from '@/components/ui/TechCard'
import React from 'react'
import { useRoutines } from '../logic/query'
import { Box, Spinner, Text, Stack, Button, HStack, Card } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import type { Routine } from '@/payload-types'
import { useTransparentCss } from '@/components/ui/util'

type RoutinePickerProps = {}

const RoutinePicker: React.FC<RoutinePickerProps> = ({}) => {
  const router = useRouter()
  const { isLoading, error, data: routines } = useRoutines()

  const handleOpenRoutine = (routineId: string) => {
    router.push(`/routine/${routineId}`)
  }

  const listBgColor = useTransparentCss('colorPalette.950', 0.75)

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <Spinner size="lg" />
        <Text ml={3}>Loading routines...</Text>
      </Box>
    )
  }

  if (error) {
    return (
      <Box bg="red.100" color="red.800" p={4} borderRadius="md">
        <Text fontWeight="bold">Error:</Text>
        <Text>Error loading routines: {(error as Error).message}</Text>
      </Box>
    )
  }

  if (!routines || !routines.docs || routines.docs.length === 0) {
    return (
      <TechCard size="sm">
        <Card.Body>
          <Text textAlign="center" color="gray.500">
            No routines found
          </Text>
        </Card.Body>
      </TechCard>
    )
  }

  return (
    <TechCard size="sm" minHeight={'100%'}>
      <Card.Header>
        <Card.Title>Select a Routine</Card.Title>
      </Card.Header>

      <Card.Body>
        <Box
          bgColor={listBgColor}
          borderWidth={1}
          borderStyle={'solid'}
          borderColor={'colorPalette.800'}
          padding={4}
          minHeight={'100%'}
          overflowX={'none'}
          borderRadius={'md'}
          flex={1}
        >
          <Stack gap={3}>
            {routines.docs.map((routine: Routine) => (
              <HStack
                key={routine.id}
                justify="space-between"
                align="center"
                p={3}
                borderRadius="md"
              >
                <Box flex={1}>
                  <Text fontWeight="medium">{routine.name}</Text>
                  {routine.steps && (
                    <Text fontSize="sm" color="gray.400">
                      {routine.steps.length} step{routine.steps.length !== 1 ? 's' : ''}
                    </Text>
                  )}
                </Box>
                <Button size="sm" onClick={() => handleOpenRoutine(routine.id)}>
                  Open
                </Button>
              </HStack>
            ))}
          </Stack>
        </Box>
      </Card.Body>
    </TechCard>
  )
}

export default RoutinePicker
