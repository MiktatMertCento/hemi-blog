import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  MenuIcon,
  IconButton,
  MenuOptionGroup,
  MenuItemOption
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router'


export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const menuList = [
    {
      title: "Anasayfa",
      path: "/"
    },
    {
      title: "Hakkında",
      path: "/about"
    }
  ]

  const handleRoute = menu => {
    router.push(menu.path)
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center' gap={3}>
            <Box>
              <Text fontWeight="bold">
                HEMİ Blog
              </Text>
            </Box>

            <Box display={{ base: "none", md: "block" }}>
              {
                menuList.map(menu => {
                  return (
                    <Button key={menu.path} onClick={() => handleRoute(menu)} variant={menu.path !== router.pathname ? "ghost" : "solid"}>
                      {menu.title}
                    </Button>
                  )
                })
              }
            </Box>
          </Flex>

          <Flex alignItems='center'>
            <Stack direction='row' spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Box display={{ base: "block", md: "none" }}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                  />

                  <MenuList alignItems='center'>
                    <MenuOptionGroup defaultValue={router.pathname} title='Menü' type='radio'>
                      {
                        menuList.map(menu => {
                          return (
                            <MenuItemOption key={menu.path} onClick={() => handleRoute(menu)} value={menu.path}>
                              {menu.title}
                            </MenuItemOption>
                          )
                        })
                      }
                    </MenuOptionGroup>

                  </MenuList>
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}