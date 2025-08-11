'use client'
import { Box, Card, HStack, Spinner, Stack, Stat, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import TechCard from '../ui/TechCard'
import RoutineControls from './RoutineControls'
import RoutineStepList from './RoutineStepList'
import { useRoutine } from './logic/context'
import { chirp } from './util'
import DurationDisplay from '../ui/time/DurationDisplay'
import DurationSince from '../ui/time/DurationSince'
import TechStat from '../ui/TechStat'
import { useTransparentCss } from '../ui/util'

type RoutineDisplayProps = {}

const RoutineDisplay: React.FC<RoutineDisplayProps> = () => {
  // Immer state for managing routine step states
  const {
    routine,
    isLoading,
    error,
    stepState,
    status,
    startRoutine,
    nextStep,
    currentStepId,
    startTime,
    endTime,
  } = useRoutine()

  const listBgColor = useTransparentCss('colorPalette.950', 0.75)

  useEffect(() => {
    if (currentStepId) {
      chirp()
    }
  }, [currentStepId])

  return (
    <TechCard minHeight={'100%'} size={'sm'}>
      <Card.Header>
        <Text fontSize="2xl" fontWeight="bold">
          {routine?.name || 'Unnamed Routine'}
        </Text>
      </Card.Header>
      <Card.Body>
        <Stack gap={4} flex={1}>
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
            <RoutineStepList routine={routine!} stepState={stepState} />
          </Box>
          <HStack>
            <TechStat label="CURRENT STEP">
              <DurationSince
                startTime={currentStepId ? stepState[currentStepId].startTime : undefined}
              />
            </TechStat>
            <TechStat label="TOTAL TIME ELAPSED">
              <DurationSince startTime={startTime} endTime={endTime} />
            </TechStat>
          </HStack>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Stack width="full">
          <RoutineControls status={status} onStart={startRoutine} onNext={nextStep} />
        </Stack>
      </Card.Footer>
    </TechCard>
  )
}

export default RoutineDisplay
