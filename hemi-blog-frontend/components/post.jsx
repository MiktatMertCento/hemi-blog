import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function PostComponent({ postInfo }) {
    const router = useRouter();

    return (
        <Box pos="relative" h="100%" w="100%" transition="all .2s" _hover={{ boxShadow: "0px 15px 25px -9px rgba(0,0,0,0.65)" }} _active={{ transform: "translateY(4px)" }} borderRadius="lg">
            <Box pos="absolute" top="0" right="0" left="0" bottom="0" bgSize="cover" bgPos="center" bgImage={`url(${postInfo.articleImage})`} borderRadius="lg"/>
            <Box pos="absolute" top="0" right="0" left="0" bottom="0" bgGradient='linear-gradient(to bottom, transparent 0%, black 90%)' opacity=".9" borderRadius="lg" onClick={() => router.push(`/post/${postInfo._id}`)} _hover={{cursor: "pointer"}}/>
            <Box pos="absolute" left="0" bottom="0" padding="16px" borderRadius="lg">
                <Flex flexDir="column">
                    <Text alignSelf="start" color="white" bgColor={postInfo.tag.tagColor} fontWeight="bold" fontSize=".85rem" px={2} py={.5} onClick={() => router.push(`/tag/${postInfo.tag._id}`)} _hover={{cursor: "pointer"}}>{postInfo.tag.tagName}</Text>
                    <Text alignSelf="start" color="white" fontWeight="bold">{postInfo.articleTitle}</Text>
                    <Text alignSelf="start" color="white" onClick={() => router.push(`/author/${postInfo.author._id}`)} _hover={{cursor: "pointer", textDecoration: "underline"}}>{postInfo.author.authorName}</Text>
                </Flex>
            </Box>
        </Box>
    )
}
