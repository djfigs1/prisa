import { formatTime } from '@/components/routine/util'
import { Text, TextProps } from '@chakra-ui/react'
import React, { memo } from 'react'

export type DurationDisplayProps = TextProps & {
  duration?: number
  includeHours?: boolean
}

const DurationDisplay: React.FC<DurationDisplayProps> = memo((props) => {
  const formattedText = formatTime(props.duration, props.includeHours)
  return (
    <Text whiteSpace="nowrap" {...props}>
      {formattedText}
    </Text>
  )
})

export default DurationDisplay
