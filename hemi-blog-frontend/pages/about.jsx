import { Box, Flex, Grid, GridItem, Text, Input, InputGroup, InputLeftElement, Textarea, Button, Divider } from '@chakra-ui/react'
import { PhoneIcon, InfoOutlineIcon, EmailIcon, EditIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import AboutStyle from '../styles/About.module.css'

export default function about() {
    return (
        <>
            <Head>
                <title>Hakkında</title>
            </Head>

            <Text display='flex' justifyContent='center' fontSize='3rem' mt='1rem'>Hakkımızda</Text>
            <Flex p='3rem' justify='center' alignItems='center' gap='6'>
                <Box width='20rem' height='20rem' backgroundColor='gray' boxShadow='lg' ></Box>
                <Text maxWidth='20rem' fontSize='1.2rem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate, asperiores optio quod inventore nulla sit deserunt eaque molestiae consequatur.</Text>


            </Flex>
            <Flex mx='5rem'><Divider/></Flex>
            <Grid justifyContent='center' mt='5rem' gap='3'>
                <GridItem>
                    <InputGroup w='30rem'>
                        <InputLeftElement pointerEvents='none' >
                            <InfoOutlineIcon color='white' />
                        </InputLeftElement>
                        <Input placeholder='İsminiz' />
                    </InputGroup>
                </GridItem>

                <GridItem>
                    <InputGroup w='30rem'>
                        <InputLeftElement pointerEvents='none'>
                            <EmailIcon color='white' />
                        </InputLeftElement>
                        <Input placeholder='E-Mailiniz' />
                    </InputGroup>
                </GridItem>

                <GridItem>
                    <InputGroup w='30rem' >
                        <InputLeftElement pointerEvents='none'>
                            <EditIcon color='white' />
                        </InputLeftElement>
                        <Textarea placeholder='Mesajınız' resize='none' paddingInlineEnd='1rem' paddingInlineStart='2.5rem' maxH='15rem' h='15rem' />
                    </InputGroup>
                    <Flex mt='0.75rem' justifyContent='flex-end' ><Button>Gönder</Button></Flex>
                </GridItem>
            </Grid>
            <Box w='100%' h='10rem' ></Box>

        </>
    )
}
