import { Box } from "@chakra-ui/react"
import Image from "next/image"

function Error({ statusCode }) {
  return (
    <>
      <Box pos="relative" w="30rem" h="30rem" borderRadius="15px" overflow="clip">
        <Image src={`https://http.cat/${statusCode}`} alt={statusCode} layout="fill" objectFit="contain" />
      </Box>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error