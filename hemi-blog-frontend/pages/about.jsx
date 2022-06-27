import { Box, Flex , Grid, GridItem, Text, Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
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
                <Box width='20rem' height='20rem' backgroundColor='red' ></Box>
                <Text maxWidth='20rem' fontSize='1.2rem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptate, asperiores optio quod inventore nulla sit deserunt eaque molestiae consequatur.</Text>


            </Flex>
            <Grid justifyContent='center' mt='5rem' gap='3'>
                <GridItem><InputGroup w='30rem'><InputLeftElement 
                pointerEvents='none'
                children={<InfoOutlineIcon color='white' />} />
                <Input placeholder='İsminiz' />
                </InputGroup>
                </GridItem>
                <GridItem><InputGroup w='30rem'><InputLeftElement 
                pointerEvents='none'
                children={<EmailIcon color='white' />} />
                <Input placeholder='E-Mailiniz' />
                </InputGroup>
                </GridItem>
                <GridItem><InputGroup w='30rem'><InputLeftElement 
                pointerEvents='none'
                children={<EditIcon color='white' />} />
                <Input placeholder='Mesajınız' h='20rem' />
                </InputGroup>
                </GridItem>
            </Grid>

        </>
    )
}
