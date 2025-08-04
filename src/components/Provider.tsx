'use client'

import { ChakraProvider, defineConfig, defaultConfig, createSystem } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
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
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={system}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}
