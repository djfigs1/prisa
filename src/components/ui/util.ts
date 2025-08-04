import { useToken } from '@chakra-ui/react'

export function useTransparentCss(color: string, alpha: number): string {
  const colorCss = useToken('colors', color)
  const css = `color-mix(in srgb, ${colorCss} ${alpha * 100}%, transparent)`

  return css
}
