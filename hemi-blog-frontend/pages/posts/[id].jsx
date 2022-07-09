import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Avatar, Box, Button, Flex, Grid, GridItem, Heading, IconButton, Text, useColorMode, useDisclosure } from '@chakra-ui/react';
import Head from 'next/head';
import { LinkIcon, SettingsIcon } from '@chakra-ui/icons';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import("highlight.js/styles/solarized-dark.css");

export default function PostDetailPage(props) {
    const router = useRouter();
    const { id } = router.query

    /*const { colorMode } = useColorMode();
    const [style, setStyle] = useState(colorMode);
    useEffect(() => {
        if (style === "dark") {
            import("highlight.js/styles/atom-one-dark.css");
            setStyle('dark');
        } else {
            import("highlight.js/styles/atom-one-light.css");
            setStyle('light');
        }
    }, [style])*/

    const handleShare = e => {
        const shareData = {
            title: `Miktat Cento -  ${props.article.articleTitle}`,
            text: "Seninle paylaşılan bu içeriği okumak için hemen gel!",
            url: `https://hemi-blog.vercel.app/posts/${id}`
        }
        if (navigator.canShare(shareData)) {
            navigator.share(shareData)
        } else {
            //onOpen();
        }
    }
    return (
        <>
            <Head>
                <title>{`Miktat Cento -  ${props.article.articleTitle}`}</title>
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
                                    <IconButton icon={<SettingsIcon />} onClick={handleShare} variant="ghost" />
                                    <IconButton icon={<LinkIcon />} variant="ghost" />
                                </Flex>
                            </Flex>

                            <Flex gap={2} alignItems="center">
                                <Text fontSize='0.75rem'>Nov 25, 2020</Text>
                                <Text>·</Text>
                                <Text fontSize='0.75rem'>7 min read</Text>
                            </Flex>

                            <Flex gap={2} display={{ base: "flex", md: "none" }}>
                                <IconButton icon={<SettingsIcon />} onClick={handleShare} variant="outline" />
                                <IconButton icon={<LinkIcon />} variant="outline" />
                            </Flex>
                        </Flex>
                    </Flex>

                    <Box>
                        <Text my={4} fontWeight="bold" lineHeight="1.2" fontSize='3xl'>
                            {props.article.articleTitle}
                        </Text>

                        <Box>
                            <ReactMarkdown components={ChakraUIRenderer()} rehypePlugins={[rehypeRaw, remarkGfm, rehypeHighlight]} skipHtml>
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