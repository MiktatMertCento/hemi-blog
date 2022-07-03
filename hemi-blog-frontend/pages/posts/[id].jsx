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
                                Hikayemin ilk bölümünde şimdilik teknik detaylara (vize süreci, iş bulma, CV hazırlama vs. gibi) girmeden bu kararı almamın altında yatan başlıca sebepleri kendimce açıklamaya ve kendimi tanıtmaya çalışacağım.


                                Hakkımda
                                Beni tanımayanlar için kısaca kendimi tanıtayım. Ben Onur Şuyalçınkaya. 1992'de Ankara’da doğdum. Emekli bir albay baba ve emekli bir öğretmen annenin evladı, yüksek mühendis bir abinin kardeşiyim.

                                Liseyi Nişantaşı Nuri Akin Anadolu Lisesi’nde okudum. Lisansımı da Doğuş Üniversitesi’nde tam burslu Bilgisayar Mühendisliği okuyarak tamamladım. Yüksek Lisans’ımı da Bahçeşehir Üniversitesi’nde yine Bilgisayar Mühendisliği üzerine yapıyordum. “Dum” çünkü bıraktım. Aslında ortalamam da fena değildi, 3.32. Tüm derslerimi de başarıyla vermiştim ama tez yazmanın bana göre olmadığını anladığımda bırakma kararı aldım.

                                İş hayatımda ise Apple’da (Akasya’daki) Specialist, Sistaş’ta Full Stack Developer, Yemeksepeti’nde Frontend Engineer olarak çalıştım ve şu an heycar’da Frontend Engineer olarak çalışmaktayım.

                                Neden?
                                Tek bir sebebi yok benim için. Farklı zamanlarda gelişen olaylar ile tetiklendi diyebilirim.

                                2015
                                Yurt dışında yaşama isteği, ilk defa yurt dışına çıktığım 2015 senesinde başladı. 5 sene içinde 8 ülke 12 şehir gezdim, gördüm. Güzel binaların, mutlu insanların, yakışıklı yapıların, şaşaalı hikayelerin olduğu yerler hep cezbetmiştir beni. İşte bu sebeple 2015'ten beri ufak da olsa döviz biriktirmeye başladım. 2015'teki ortalama dolar kuru 2.7, euro kuru ise 2.86'ymış :)

                                Yazılımcı olarak çalıştığım ilk yıllarda, tabiri caizse “Junior” olduğum zamanlar birkaç hüsran dolu yurt dışı iş görüşmesi tecrübem olmuştu. E insanın hevesi kırılıyor haliyle ve bir daha denemeye cesaret edemiyor. En azından benim için öyle oldu. Olay dil seviyesi de değil oysa ki, tamamen “Junior” olmamla alakalı. Ben de “Henüz zamanı değil demek ki” diyerek rafa kaldırmıştım bu olayı. Aklımın bir köşesinde bir gün başaracağım umuduyla…

                                1/3
                                Şöyle bir bakış açım var: Ortalama 70 yıl yaşasam (umarım); ilk 1/3’ü çocuklukla, büyümekle, eğitimle, onla bunla geçti gitti. Yeterli enerjim kalmayacağı için sondaki 1/3’e de yaşamak denemez benim için. E bari o ortadaki 1/3’lük bölümde huzurlu olacağım, televizyonu Twitter’ı açtığımda saçma sapan bir gündem görmeyeceğim bir şekilde yaşayayım.

                                2020
                                Tarihler Ocak 2020, corona öncesi tabi. Müdürümüz şirketin bir odasında toplamış bizi, bir açıklama yapacak. Herkes merakla bekliyor. Lafı uzatmayı pek sevmiyorum deyip, pat diye “Ben iş teklifi aldım Berlin’e taşınıyorum” dedi. Herkes şok. Hem onun adına çok mutlu oluyorum hem de derin düşüncelere dalıyorum. “Ben gitsem nasıl olurdu acaba?” diye.

                                1 ay sonra Şubat’ta aldığım zam beni memnun etmeyince dedim ki şansımı deneyeyim, ne kaybederim. Başladım iş başvurularına. 2 hafta içerisinde yaklaşık 200–300 ilana başvurdum ve bu süreçte 20–30 şirketle görüştüm. 2 adet iş teklifi alıp, bana en mantıklı geleni kabul ettim ve bu zor corona günlerinde buraya gelmeyi başardım. İlgilenenler için bu serinin sonrakı bölümlerinde detaylıca değineceğim bu konuya.

                                İngilizce
                                Bunu sebep olarak değil de teşvik edici bir unsur olarak belirtmem daha doğru olur sanırım. Mesleğiniz evrensel ise (mühendis, mimar, doktor, vs. gibi) ve yabancı diliniz de varsa yurt dışında yaşamak için hiçbir engeliniz yok. Hem mesleğim hem de yabancı dilim yeterli olduğu için bu kesimdenim ben de.


                                https://www.youtube.com/watch?v=MejA5zBQdG0
                                Nereden öğrendiğime gelecek olursak; ilginç ama İngilizce’yi nereden öğrendiğimi asla hatırlamiyorum. Babam albay demiştim, sınıfı da öğretmen. Yani hem İngilizce öğretmeni hem albay. Ama bana verdiği ders sayısı bir elin parmaklarını geçmemiştir. Hayatımda hiç İngilizce dersi alma ihtiyacı da hissetmedim açıkçası. Kulağa biraz garip gelebilir ama tahminim 2000 senesinden beri aralıksız olarak her sene satin alıp oynadığım “Football Manager” serisi. Oyun full diyaloglarla dolu. Dolayısıyla çocuk yaşımda translate kullana kullana oyunu çözdüğümü ve bu şekilde İngilizce’mi ilerlettiğimi tahmin ediyorum.

                                Gelecek Kaygısı
                                Gelelim asıl probleme. Buyrun size üzücü bir istatistik:

                                TÜİK verilerine göre 2019’da 330.289 kişi Türkiye’yi terk etti. Türkiye’yi terk eden her 5 kişiden 2'si 20–34 yaş aralığında. Ve yine veriler gösteriyor ki, gidenlerin büyük bölümü eğitimli-kentli kesim.
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
