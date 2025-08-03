import { IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdDoNotDisturb } from 'react-icons/md'

type DNDProps = {}

const DND: React.FC<DNDProps> = ({}) => {
  const [dnd, setDnd] = React.useState(false)
  return (
    <IconButton
      size="2xl"
      variant={dnd ? 'solid' : 'subtle'}
      onClick={() => setDnd(!dnd)}
      aria-label="Do Not Disturb"
    >
      <MdDoNotDisturb />
    </IconButton>
  )
}

export default DND
