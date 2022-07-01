import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Avatar, Box , Divider, Flex, Grid, GridItem, Heading, Spacer, Text} from '@chakra-ui/react';
import catImage from '../../assets/cat.jpg'
import Head from 'next/head';
import { LinkIcon } from '@chakra-ui/icons';

export default function Post() {
    const router = useRouter();
    const { id } = router.query

    return (
        <>
        <Head>
            <title>{ id }</title>
        </Head>
            <Box mt='5rem' p='2rem'>
                <Flex justifyContent='center' gap='2rem' flexDirection={['column', 'row']}>
                    <Box w='20rem' h='20rem' position='relative'><Image
                        src={catImage}
                        layout='fill'
                        objectFit='cover'
                        alt='Cat Image'
                    /></Box>
                    <Text fontSize='2xl'>{ id }</Text>
                </Flex>
            </Box>
            <Flex><Divider mx='3rem' /></Flex>

            <Flex gap='1rem' my='3rem'>
                <Avatar name='Author' src='https://bit.ly/dan-abramov' size='lg'/>
                <Box>
                  <Heading fontSize='2rem'>Author</Heading>
                  <Flex gap='0.50rem'><Text fontSize='0.75rem'>Time-Date</Text><Text fontSize='0.75rem'>8 Min</Text></Flex>
                </Box>
                <Spacer />
                <Flex alignItems='center' justifyContent='flex-end'><LinkIcon /></Flex>
            </Flex>
            <Flex justifyContent='center'><Text fontSize='3xl'>Post Title</Text></Flex>
            <Box mt='3rem'>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius perspiciatis saepe repellat cumque eos maxime iure quibusdam suscipit, totam vero nam nisi aliquam qui? Illo deserunt magnam provident pariatur maxime officiis repellendus deleniti totam voluptas obcaecati quae nisi ipsa excepturi, perferendis asperiores distinctio! Doloremque earum, autem velit voluptates neque cum.</Text>
            </Box>
        </>
    )
}
