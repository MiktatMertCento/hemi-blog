import { Box, Flex, Grid, GridItem, Text, Input, InputGroup, InputLeftElement, Textarea, Button, Divider, FormControl } from '@chakra-ui/react'
import { PhoneIcon, InfoOutlineIcon, EmailIcon, EditIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import AboutStyle from '../styles/About.module.css'
import Title from '../components/title'

export default function about() {
    return (
        <>
            <Head>
                <title>Hakkında</title>
            </Head>

            <Box>
                <Grid h='100%' templateColumns='repeat(12, 1fr)' gap={4}>
                    <GridItem colSpan={{ base: 12, md: 6 }}>
                        <Title>Hakkımızda</Title>
                        <Text fontSize='1.2rem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate, asperiores optio quod inventore nulla sit deserunt eaque molestiae consequatur.</Text>
                    </GridItem>

                    <GridItem colSpan={{ base: 12, md: 6 }}>
                        <Grid mt="1rem">
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none' >
                                        <InfoOutlineIcon />
                                    </InputLeftElement>
                                    <Input placeholder='İsminiz' type="text" />
                                </InputGroup>
                            </GridItem>

                            <GridItem mt="4">
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <EmailIcon />
                                    </InputLeftElement>
                                    <Input placeholder='E-Mailiniz' type="email" />
                                </InputGroup>
                            </GridItem>

                            <GridItem mt="4">
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <EditIcon />
                                    </InputLeftElement>
                                    <Textarea placeholder='Mesajınız' type="text" resize='none' paddingInlineEnd='1rem' paddingInlineStart='2.5rem' maxH='15rem' h='15rem' />
                                </InputGroup>
                            </GridItem>

                            <GridItem mt="3" justifySelf="end">
                                <Button type="submit">Gönder</Button>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            </Box>
        </>
    )
}
