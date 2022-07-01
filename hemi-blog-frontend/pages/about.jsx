import { Box, Flex, Grid, GridItem, Text, Input, InputGroup, InputLeftElement, Textarea, Button, Divider, FormControl } from '@chakra-ui/react'
import { PhoneIcon, InfoOutlineIcon, EmailIcon, EditIcon, InfoIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import AboutStyle from '../styles/About.module.css'
import Title from '../components/title'

export default function About(props) {
    return (
        <>
            <Head>
                <title>Hakkında</title>
            </Head>

                <Flex my='5rem' justifyContent='center'>
                    <GridItem colSpan={{ base: 12, md: 6 }}>
                        <Title>Hakkımızda</Title>
                        <Text fontSize='1.2rem'>
                            {props.baconIpsum}
                        </Text>
                    </GridItem>                    
                </Flex>

            <Flex><Divider mx='2rem' /> </Flex>

                <Grid mt={5} justifyContent='center' alignItems='center' gap={4}>
                            <GridItem w={[150, 500]}>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none' >
                                        <InfoIcon />
                                    </InputLeftElement>
                                    <Input placeholder='İsminiz' type="text" />
                                </InputGroup>
                            </GridItem>

                            <GridItem w={[150, 500]}>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <EmailIcon />
                                    </InputLeftElement>
                                    <Input placeholder='E-Mailiniz' type="email" />
                                </InputGroup>
                            </GridItem>

                            <GridItem w={[150, 500]}>
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
        </>
    )
}


export async function getServerSideProps() {
    //const res = await fetch(`https://baconipsum.com/api/?type=meat-and-filler`)
    //const baconIpsum = await res.json()

    return { props: { baconIpsum: 'baconIpsum[0]' } }
}