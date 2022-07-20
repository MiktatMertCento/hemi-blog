import { Flex, Grid, GridItem, Text, Input, InputGroup, InputLeftElement, Textarea, Button, Divider, FormControl, Box } from '@chakra-ui/react'
import { EmailIcon, EditIcon, InfoIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import React from 'react'
import TitleComponent from '../components/title'

export default function AboutPage(props) {
    return (
        <>
            <Head>
                <title>Hakkında</title>
            </Head>

            <TitleComponent>Hakkımızda</TitleComponent>
            <Text fontSize='1rem'>
                {props.baconIpsum}
            </Text>

            <Box mx={1} my={7}>
                <Divider />
            </Box>


            <Flex justifyContent="center" >
                <Grid mt={5} gap={4} w={{ base: "100%", md: 400 }}>
                    <GridItem>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' >
                                <InfoIcon />
                            </InputLeftElement>
                            <Input placeholder='İsminiz' type="text" />
                        </InputGroup>
                    </GridItem>

                    <GridItem>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <EmailIcon />
                            </InputLeftElement>
                            <Input placeholder='E-Mailiniz' type="email" />
                        </InputGroup>
                    </GridItem>

                    <GridItem>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <EditIcon />
                            </InputLeftElement>
                            <Textarea placeholder='Mesajınız' type="text" resize='none' paddingInlineEnd='1rem' paddingInlineStart='2.5rem' maxH='15rem' h='15rem' />
                        </InputGroup>
                    </GridItem>

                    <GridItem justifySelf="end">
                        <Button type="submit">Gönder</Button>
                    </GridItem>
                </Grid>
            </Flex>
        </>
    )
}


export async function getServerSideProps() {
   // const res = await fetch(`https://baconipsum.com/api/?type=meat-and-filler`)
    //const baconIpsum = await res.json()

    return { props: { baconIpsum: "baconIpsum[0]" } }
}