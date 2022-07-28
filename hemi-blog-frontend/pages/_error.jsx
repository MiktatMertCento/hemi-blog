import { Box, Grid, Text } from "@chakra-ui/react"
import Head from "next/head"
import Image from "next/image"
import TitleComponent from "../components/title"

function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>{`Kedi ${statusCode} gördü.`}</title>
      </Head>


      <Grid placeItems="center">
        <Box pos="relative" w={{ base: "90%", md: "100%" }} h="300px" mt={{ base: 5, md: 10 }} overflow="clip">
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