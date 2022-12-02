import { Box, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import PostComponent from '../../components/post'
import TitleComponent from '../../components/title'
import { publicAxios } from "../../service/publicAxios";

export default function PostsPage({ articles }) {
    return (
        <>
            <Head>
                <title>Etiket</title>
                <meta name="description" content="HEMI Blog App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box>
                <TitleComponent>
                    Etiket
                </TitleComponent>


            </Box>
        </>
    )
}