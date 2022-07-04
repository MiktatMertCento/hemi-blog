import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Avatar, Box, Divider, Flex, Grid, GridItem, Heading, IconButton, Spacer, Text } from '@chakra-ui/react';
import catImage from '../../assets/cat.jpg'
import Head from 'next/head';
import { LinkIcon, SettingsIcon } from '@chakra-ui/icons';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';


export default function PostDetailPage({ data }) {
    const router = useRouter();
    const { id } = router.query

    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <>
            <Head>
                <title>{id}</title>
            </Head>

            <Grid templateColumns='repeat(12, 1fr)'>
                <GridItem display={{ base: "none", md: "block" }} colSpan={{ base: 0, md: 2 }}>

                </GridItem>

                <GridItem overflowY="hidden" padding={{ base: 0, md: 10 }} colSpan={{ base: 12, md: 7 }} >
                    <Flex gap={4}>
                        <Avatar name='Miktat Cento' border="1px" src='https://i.pinimg.com/564x/2a/5b/be/2a5bbebb7bfee3740822b332f7151ebb.jpg' size='lg' />
                        <Flex flexDir="column" gap={2} w="100%">
                            <Flex justifyContent="space-between" alignItems="center">
                                <Heading fontSize='2rem'>
                                    Miktat Cento {id}
                                </Heading>

                                <Flex gap={1} display={{ base: "none", md: "block" }}>
                                    <IconButton icon={<SettingsIcon />} variant="ghost" />
                                    <IconButton icon={<LinkIcon />} variant="ghost" />
                                </Flex>
                            </Flex>

                            <Flex gap={2} alignItems="center">
                                <Text fontSize='0.75rem'>Nov 25, 2020</Text>
                                <Text>·</Text>
                                <Text fontSize='0.75rem'>7 min read</Text>
                            </Flex>

                            <Flex gap={2} display={{ base: "flex", md: "none" }}>
                                <IconButton icon={<SettingsIcon />} variant="outline" />
                                <IconButton icon={<LinkIcon />} variant="outline" />
                            </Flex>
                        </Flex>
                    </Flex>

                    <Box>
                        <Text my={4} fontWeight="bold" lineHeight="1.2" fontSize='3xl'>
                            Bir Yazılımcı Olarak Türkiye’den Gitmek (Bölüm 1: Nedenler)
                        </Text>

                        <Box>
                            <ReactMarkdown components={ChakraUIRenderer()} skipHtml >
                                {data}
                            </ReactMarkdown>
                        </Box>
                    </Box>

                </GridItem>

                <GridItem display={{ base: "none", md: "block" }} colSpan={{ base: 0, md: 3 }}>

                </GridItem>
            </Grid>


        </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await axios.get("https://miktatcento.org/test")

    // Pass data to the page via props
    return { props: { data: res.data } }
}