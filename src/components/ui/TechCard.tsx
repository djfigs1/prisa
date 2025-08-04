'use client'

import { Card, CardRootProps, useToken } from '@chakra-ui/react'
import React from 'react'
import { useTransparentCss } from './util'

const BackgroundColor = 'colorPalette.900'
const ForegroundColor = 'colorPalette.300'
const DotSize = 12

const TechCard: React.FC<CardRootProps> = (props) => {
  const bgColor = useTransparentCss(BackgroundColor, 0.7)
  const borderColor = useTransparentCss('colorPalette.solid', 0.7)
  const dotColor = useTransparentCss(ForegroundColor, 0.075)
  return (
    <Card.Root
      backdropFilter={'blur(16px)'}
      bgColor={bgColor}
      borderColor={borderColor}
      color={ForegroundColor}
      bgPos="center"
      bgSize={`${DotSize}px ${DotSize}px`}
      borderWidth={1.5}
      bgImage={`radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`}
      {...props}
    >
      {props.children}
    </Card.Root>
  )
}

export default TechCard
