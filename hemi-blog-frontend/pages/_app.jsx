import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex zIndex="9999" as="header" position="fixed" top="0" w="100%">
        <Header flexShrink="0" w="100%" />
      </Flex>

      <Flex mt="16" overflowX="auto" w="100%" mb="40px">
        <Box mx="1rem" w="100%">
          <Component {...pageProps} />
        </Box>
      </Flex>

      <Flex>
        <Footer w="100%" />
      </Flex>

    </ChakraProvider>
  )
}

export default MyApp
