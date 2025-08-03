'use client'

import { ChakraProvider, defineConfig, defaultConfig, createSystem } from '@chakra-ui/react'
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: 'red',
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: 'var(--prisa-font)' },
        heading: { value: 'var(--prisa-font)' },
      },
    },
  },
})

const system = createSystem(defaultConfig, config)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
