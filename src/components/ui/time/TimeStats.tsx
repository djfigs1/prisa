import dayjs from 'dayjs'
import React, { memo, useEffect } from 'react'

export type TimeStatsProps = {
  startTime?: dayjs.Dayjs
  endTime?: dayjs.Dayjs
  updateRate?: number
  children?: (duration?: number) => React.ReactNode
}

const TimeStats: React.FC<TimeStatsProps> = memo(({ startTime, endTime, updateRate, children }) => {
  const [duration, setDuration] = React.useState<number | undefined>(undefined)
  useEffect(() => {
    // If completionTime is specified, use it
    if (startTime && endTime) {
      setDuration(endTime.diff(startTime, 'second'))
      return
    }

    // If startTime is defined, start a timer to calculate elapsed time
    if (startTime) {
      const updateElapsedTime = () => {
        const now = dayjs()
        const elapsedSeconds = now.diff(startTime, 'second')
        setDuration(elapsedSeconds)
      }

      // Update immediately
      updateElapsedTime()

      // Set up interval to update every second
      const interval = setInterval(updateElapsedTime, updateRate ?? 1000)

      // Cleanup interval on unmount or dependency change
      return () => clearInterval(interval)
    } else {
      // If neither completionTime nor startTime is defined, reset displayTime
      setDuration(undefined)
    }
  }, [startTime, endTime, updateRate])
  return <>{children?.(duration)}</>
})

export default TimeStats
