import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import { publicAxios } from "../../service/publicAxios";
import { Grid, GridItem, List, ListItem, UnorderedList } from "@chakra-ui/react";
import PostComponent from "../../components/post";

export default function PostDetailPage(props) {
    const router = useRouter();
    const {id} = router.query

    return (
        <>
            <Head>
                <title>{`${props.authorInfo.authorName}`}</title>
            </Head>


            {props.authorInfo.authorName}
            <img src={props.authorInfo.authorProfilePhoto} width="200px" height="200px"/>
            {props.authorInfo.authorBiography}

            <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(12, 1fr)' gap={4} pb="10">
                {
                    props.authorInfo.authorArticles.map(article => (
                        <GridItem key={article._id} h="250px" rowSpan={2} colSpan={{ base: 12, md: 4, '2xl': 3 }}>
                            <PostComponent postInfo={article} />
                        </GridItem>
                    ))
                }
            </Grid>
        </>
    )
}

export async function getServerSideProps({res, query}) {
    try {
        const response = await publicAxios.get("/getAuthorInfoWtihId", {
            data: {authorId: query.id}
        })

        return {props: {authorInfo: response.data.authorInfo}}
    } catch (err) {
        return {
            notFound: true
        };
    }
}