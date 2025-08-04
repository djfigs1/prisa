import { Stat } from '@chakra-ui/react'
import React, { memo } from 'react'

type TechStatProps = {
  label?: React.ReactNode
  children?: React.ReactNode
}

const TechStat: React.FC<TechStatProps> = memo(({ label, children }) => {
  return (
    <Stat.Root>
      <Stat.Label color={'colorPalette.400'}>{label}</Stat.Label>
      <Stat.ValueText>{children}</Stat.ValueText>
    </Stat.Root>
  )
})

export default TechStat
