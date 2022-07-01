import Image from "next/image"

function Error({ statusCode }) {
  return (
    <>
      <Image src={`https://http.cat/${statusCode}`} alt={`${statusCode}`} />
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