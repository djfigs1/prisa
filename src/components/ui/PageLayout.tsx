import { Box, Container } from '@chakra-ui/react'
import React from 'react'

type PageLayoutProps = {
  children?: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box bgColor={'colorPalette.950'} height="100vh">
      <Container paddingTop={8} paddingBottom={8}>
        {children}
      </Container>
    </Box>
  )
}

export default PageLayout
