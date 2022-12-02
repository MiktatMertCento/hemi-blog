import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import { publicAxios } from "../../service/publicAxios";
import { Avatar, Flex, Grid, GridItem, Heading, IconButton, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import PostComponent from "../../components/post";
import { CgShare } from "react-icons/cg";
import { LinkIcon } from "@chakra-ui/icons";
import moment from "moment/moment";

export default function PostDetailPage(props) {
    const router = useRouter();
    const {id} = router.query

    const handleShare = e => {
        const shareData = {
            title: `Miktat Cento -  ${props.article.articleTitle}`,
            text: "Seninle paylaşılan bu içeriği okumak için hemen gel!",
            url: `https://hemi-blog.vercel.app/post/${id}`
        }
        if (navigator.canShare(shareData)) {
            navigator.share(shareData)
        } else {
            //onOpen();
        }
    }

    const handleCopy = e => {
        navigator.clipboard.writeText(`https://hemi-blog.vercel.app/post/${id}`)
    }

    return (
        <>
            <Head>
                <title>{props.authorInfo.authorName}</title>
            </Head>

            <Flex gap={4} marginTop={{base: 5, md: 0}}>
                <Avatar name={props.authorInfo.authorName} border="1px" src={props.authorInfo.authorProfilePhoto} size='lg'/>
                <Flex flexDir="column" gap={2} w="100%">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Heading fontSize='2rem' _hover={{textDecoration: "underline", cursor: "pointer"}}>
                            {props.authorInfo.authorName}
                        </Heading>

                        <Flex gap={1} display={{base: "none", md: "block"}}>
                            <IconButton icon={<CgShare/>} onClick={handleShare} variant="ghost"/>
                            <IconButton icon={<LinkIcon/>} onClick={handleCopy} variant="ghost"/>
                        </Flex>
                    </Flex>

                    <Flex gap={2} alignItems="center">
                        <Text fontSize='0.75rem'>aa</Text>
                        <Text>·</Text>
                        <Text fontSize='0.75rem'>bb</Text>
                    </Flex>

                    <Flex gap={2} display={{base: "flex", md: "none"}}>
                        <IconButton icon={<CgShare/>} onClick={handleShare} variant="outline"/>
                        <IconButton icon={<LinkIcon/>} onClick={handleCopy} variant="outline"/>
                    </Flex>
                </Flex>
            </Flex>

            <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(12, 1fr)' gap={4} pb="10">
                {
                    props.authorInfo.authorArticles.map(article => (
                        <GridItem key={article._id} h="250px" rowSpan={2} colSpan={{base: 12, md: 4, '2xl': 3}}>
                            <PostComponent postInfo={article}/>
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