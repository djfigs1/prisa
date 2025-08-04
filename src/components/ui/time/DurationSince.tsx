import dayjs from 'dayjs'
import React, { memo, useEffect } from 'react'
import DurationDisplay, { DurationDisplayProps } from './DurationDisplay'
import TimeStats, { TimeStatsProps } from './TimeStats'

type DurationSinceProps = DurationDisplayProps & TimeStatsProps

const DurationSince: React.FC<DurationSinceProps> = memo((props) => {
  return (
    <TimeStats {...props}>
      {(duration) => <DurationDisplay duration={duration} {...props} />}
    </TimeStats>
  )
})

export default DurationSince
