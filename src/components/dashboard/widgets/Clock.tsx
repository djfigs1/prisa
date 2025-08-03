'use client'

import { Stack, Text } from '@chakra-ui/react'
import dayjs, { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react'

const ClockFormat = 'hh:mm:ss A'

type ClockProps = {}

const Clock: React.FC<ClockProps> = ({}) => {
  const [displayTime, setDisplayTime] = useState<Dayjs>(dayjs())

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const updateTime = () => {
      const now = dayjs()
      setDisplayTime(now)

      // Schedule next tick exactly at the next full second
      const delay = 1000 - now.millisecond()
      timeoutId = setTimeout(updateTime, delay)
    }

    updateTime()

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <Stack textAlign="center" gap="4" lineHeight={1}>
      <Text fontSize="5xl">{displayTime.format(ClockFormat)}</Text>
      <Text>{displayTime.format('dddd, MMMM D')}</Text>
    </Stack>
  )
}

export default Clock
