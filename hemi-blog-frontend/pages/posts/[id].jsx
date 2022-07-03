import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Avatar, Box, Divider, Flex, Grid, GridItem, Heading, IconButton, Spacer, Text } from '@chakra-ui/react';
import catImage from '../../assets/cat.jpg'
import Head from 'next/head';
import { LinkIcon, SettingsIcon } from '@chakra-ui/icons';

export default function PostDetailPage() {
    const router = useRouter();
    const { id } = router.query

    return (
        <>
            <Head>
                <title>{id}</title>
            </Head>

            <Grid templateColumns='repeat(12, 1fr)'>
                <GridItem display={{ base: "none", md: "block" }} colSpan={{ base: 0, md: 2 }}>
                    Sol Menü
                </GridItem>

                <GridItem overflowY="hidden" mt={{ base: 10, md: 0 }} padding={{ base: 0, md: 10 }} colSpan={{ base: 12, md: 7 }} >
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
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae augue ut urna faucibus elementum. Nam lacinia accumsan risus et sodales. Sed feugiat est non sodales facilisis. Praesent tempus leo id purus scelerisque, a faucibus lectus hendrerit. Nullam maximus auctor augue ac molestie. Fusce dolor mi, lobortis ac felis feugiat, aliquam posuere metus. Aliquam et dignissim lorem. Donec elementum placerat eros sed auctor. Ut nisl magna, tempor sed tristique ac, convallis non ante. Sed finibus viverra accumsan. Integer enim augue, efficitur quis malesuada eu, tincidunt vitae tellus. Donec malesuada molestie ipsum. Etiam dignissim nulla porta ex facilisis eleifend. Duis sed ex volutpat, hendrerit leo non, convallis tellus. Curabitur suscipit tortor vitae sapien congue venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                                Maecenas ut velit quis arcu faucibus varius. Morbi faucibus justo et urna efficitur, eget aliquet enim posuere. Fusce tristique mollis ante tincidunt suscipit. Donec id elit orci. Nulla id nibh mattis, auctor neque ac, tristique nisi. Morbi tempus arcu vitae elit consequat ornare. Pellentesque cursus orci convallis diam vehicula, et imperdiet lacus varius. Integer egestas, eros non fringilla elementum, diam nulla vehicula nulla, sed congue quam tortor sed ante. Nulla viverra libero sit amet velit mattis imperdiet. Maecenas purus est, semper ut augue nec, sagittis laoreet felis.

                                Sed et nisl at nibh molestie rutrum non ac dolor. Curabitur vitae massa leo. Nam vitae scelerisque justo, quis molestie mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris egestas arcu accumsan ultricies hendrerit. Nulla ac aliquam arcu. Maecenas a ornare dui.

                                Suspendisse semper lacus metus, at eleifend urna gravida nec. Pellentesque vel diam eu diam maximus faucibus et non dui. Quisque a diam tempor, porta mi id, aliquet libero. Vivamus pellentesque nunc erat, et tempus lacus mollis in. Donec feugiat vehicula sollicitudin. Duis vitae est tortor. Sed in efficitur diam. Nulla magna turpis, aliquet sollicitudin lacinia quis, accumsan sit amet dolor. Nullam at eros gravida, tempor leo eget, tincidunt turpis. Duis sollicitudin, mi ut consectetur blandit, dui lorem fermentum tortor, vitae bibendum nisi arcu sit amet libero. Vestibulum ullamcorper, sem faucibus tincidunt vestibulum, nunc nisi lobortis mi, sit amet sollicitudin urna risus commodo elit. Nulla aliquam hendrerit scelerisque. Fusce viverra blandit metus, quis pellentesque erat viverra quis. Sed quis elementum ipsum. Morbi id dictum mi, ut dictum tortor.

                                Proin tincidunt augue ut nisi aliquam, at scelerisque lorem posuere. Suspendisse non pretium leo, eget vestibulum dui. Duis venenatis elit id dui tincidunt tempus. Nullam efficitur, velit quis imperdiet porttitor, diam metus interdum justo, eget vehicula ipsum tellus at elit. Suspendisse potenti. Etiam et consectetur ipsum. Pellentesque at lorem a elit dapibus tempus ac et arcu. Integer a pretium quam, a finibus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sit amet turpis tellus. Curabitur fringilla dolor risus, eu pharetra ante lobortis quis.
                            </Text>
                        </Box>
                    </Box>

                </GridItem>

                <GridItem display={{ base: "none", md: "block" }} colSpan={{ base: 0, md: 3 }}>
                    Sağ Menü
                </GridItem>
            </Grid>


        </>
    )
}
