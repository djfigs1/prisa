import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'

type PageLayoutProps = {
  children?: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Flex bgColor={'colorPalette.950'} minHeight="100vh">
      <Container paddingTop={8} paddingBottom={8}>
        {children}
      </Container>
    </Flex>
  )
}

export default PageLayout
