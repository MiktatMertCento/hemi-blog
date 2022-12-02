import { Box, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import PostComponent from '../../components/post'
import TitleComponent from '../../components/title'
import { publicAxios } from "../../service/publicAxios";

export default function PostsPage({articles, tag}) {
    return (
        <>
            <Head>
                <title>Etiket Detay - {tag.tagName}</title>
                <meta name="description" content="HEMI Blog App"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Box>
                <TitleComponent>
                    {tag.tagName}
                </TitleComponent>

                {
                    articles.length > 0
                    ? <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(12, 1fr)' gap={4} pb="10">
                            {
                                articles.map(article => (
                                    <GridItem key={article._id} h="250px" rowSpan={2} colSpan={{base: 12, md: 4, '2xl': 3}}>
                                        <PostComponent postInfo={article}/>
                                    </GridItem>
                                ))
                            }
                        </Grid>
                    : <Text mt={3} fontWeight="bold">Bu etikete ait bir yazı bulunmamaktadır.</Text>
                }

            </Box>
        </>
    )
}

export async function getServerSideProps({res, query}) {
    const response = await publicAxios.get("/getArticles", {
        data: {tagId: query.id}
    })

    const articles = response.data.articles
    const tag = response.data.tag;

    return {props: {articles, tag}}
}