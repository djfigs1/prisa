import { Badge, Box } from '@chakra-ui/react'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { formatTime } from './util'
import { RoutineStepStatus } from './types'

type RoutineStepTimeProps = {
  status?: RoutineStepStatus
  estimatedCompletionTime?: number
  startTime?: dayjs.Dayjs
  completionTime?: dayjs.Dayjs
}

const RoutineStepTime: React.FC<RoutineStepTimeProps> = ({
  estimatedCompletionTime,
  completionTime,
  startTime,
}) => {
  const [displayTime, setDisplayTime] = React.useState<number | undefined>()

  useEffect(() => {
    // If completionTime is specified, use it
    if (startTime && completionTime) {
      setDisplayTime(startTime.diff(completionTime, 'second'))
      return
    }

    // If startTime is defined, start a timer to calculate elapsed time
    if (startTime) {
      const updateElapsedTime = () => {
        const now = dayjs()
        const elapsedSeconds = now.diff(startTime, 'second')
        setDisplayTime(elapsedSeconds)
      }

      // Update immediately
      updateElapsedTime()

      // Set up interval to update every second
      const interval = setInterval(updateElapsedTime, 1000)

      // Cleanup interval on unmount or dependency change
      return () => clearInterval(interval)
    } else {
      // If neither completionTime nor startTime is defined, reset displayTime
      setDisplayTime(undefined)
    }
  }, [completionTime, startTime])

  const displayTimeFormatted = formatTime(displayTime)
  const estimatedTimeFormatted = formatTime(estimatedCompletionTime)

  return (
    <Box
      bgColor={'colorPalette.950'}
      paddingTop={1}
      paddingBottom={1}
      paddingLeft={2}
      paddingRight={2}
      borderColor={'colorPalette.fg'}
      borderWidth={1}
      fontSize={'xs'}
    >
      {displayTimeFormatted} / {estimatedTimeFormatted}
    </Box>
  )
}

export default RoutineStepTime
