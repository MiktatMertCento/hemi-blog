import { Box, Grid, Text } from "@chakra-ui/react"
import Head from "next/head"
import Image from "next/image"
import TitleComponent from "../components/title"

function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>Kedi {statusCode} gördü.</title>
      </Head>


      <Grid placeItems="center">
        <Box pos="relative" w="430px" h="430px" overflow="clip">
          {
            statusCode && <Image src={`https://http.cat/${statusCode}`} alt={statusCode} layout="fill" objectFit="contain" />
          }
        </Box>
        <TitleComponent>
          {
            statusCode
              ? `Kedi ${statusCode} gördü.`
              : 'An error occurred on client'
          }
        </TitleComponent>
      </Grid>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error