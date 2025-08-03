'use client'

import { Card, CardRootProps, useToken } from '@chakra-ui/react'
import React from 'react'
import { transparentCss } from './util'

const BackgroundColor = 'colorPalette.950'
const ForegroundColor = 'colorPalette.300'
const DotSize = 12

const TechCard: React.FC<CardRootProps> = (props) => {
  return (
    <Card.Root
      backdropFilter={'blur(16px)'}
      bgColor={transparentCss(BackgroundColor, 0.7)}
      borderColor={transparentCss('colorPalette.solid', 0.7)}
      color={ForegroundColor}
      bgPos="center"
      bgSize={`${DotSize}px ${DotSize}px`}
      borderWidth={1.5}
      bgImage={`radial-gradient(circle at 1px 1px, ${transparentCss(ForegroundColor, 0.15)} 1px, transparent 0)`}
    >
      {props.children}
    </Card.Root>
  )
}

export default TechCard
