import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Avatar, Box, Flex, Grid, GridItem, Heading, IconButton, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { LinkIcon, SettingsIcon } from '@chakra-ui/icons';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import rehypeRaw from "rehype-raw";

export default function PostDetailPage(props) {
    const router = useRouter();
    const { id } = router.query

    return (
        <>
            <Head>
                <title>Miktat Cento - {props.article.articleTitle}</title>
            </Head>

            <Grid templateColumns='repeat(12, 1fr)'>
                <GridItem display={{ base: "none", md: "block" }} colSpan={{ base: 0, md: 2 }}>

                </GridItem>

                <GridItem overflowY="hidden" padding={{ base: 0, md: 10 }} colSpan={{ base: 12, md: 7 }} >
                    <Flex gap={4}>
                        <Avatar name='Miktat Cento' border="1px" src='https://avatars.githubusercontent.com/u/59205839?v=4' size='lg' />
                        <Flex flexDir="column" gap={2} w="100%">
                            <Flex justifyContent="space-between" alignItems="center">
                                <Heading fontSize='2rem'>
                                    Miktat Cento
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
                            {props.article.articleTitle}
                        </Text>

                        <Box>
                            <ReactMarkdown components={ChakraUIRenderer()} rehypePlugins={[rehypeRaw]} skipHtml>
                                {props.article.articleContent}
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

export async function getServerSideProps({ res, query }) {
    try {
        const response = await axios.get("https://BlogBackend.miktatcento.repl.co/articles", {
            data: { id: query.id }
        })

        return { props: { article: response.data.articles[0] } }
    } catch (err) {
        return {
            notFound: true
        };
    }
}