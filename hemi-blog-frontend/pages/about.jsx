import { Flex, Grid, GridItem, Text, Input, InputGroup, InputLeftElement, Textarea, Button, Divider, FormControl, Box } from '@chakra-ui/react'
import { EmailIcon, EditIcon, InfoIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import React from 'react'
import TitleComponent from '../components/title'
import axios from 'axios'
import Image from 'next/image'

export default function AboutPage(props) {
    return (
        <>
            <Head>
                <title>Hakkında</title>
            </Head>

            <TitleComponent>Hakkımızda</TitleComponent>
            <Text fontSize='1rem'>
                {props.images}
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
    try {
       /* await axios.options("https://bf.dallemini.ai/generate");

        const dallEResponse = await axios.post("https://bf.dallemini.ai/generate", {
            prompt: "avocado is won vote and new leader turkey"
        })*/

        return { props: { images: "Bu blog yapım aşamasındadır." } }
    } catch (err) {
        console.log(err)
        return { props: { baconIpsum: JSON.stringify(err) } }
        /*return {
            notFound: true
        };*/
    }
}