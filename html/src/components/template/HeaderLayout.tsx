import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon, HamburgerIcon, Icon } from '@chakra-ui/icons';
import { Box, Text, Button, Collapse, Flex, Heading, IconButton, Link, Spacer, Stack, useColorModeValue, useDisclosure, Popover, PopoverTrigger, PopoverContent, useBreakpointValue, Avatar } from '@chakra-ui/react';
import { memo, VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DesktopNav } from '../organisms/layout/DesktopNav';
import { MobileNav } from '../organisms/layout/MobileNav';

export const HeaderLayout = (props: any) => {
  const {isOpen, onToggle} = useDisclosure();

  const navigate = useNavigate();
  const onClickLink = (href: string) => {
    navigate(href);
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.50', 'gray.800')}
        color={useColorModeValue('gray.500', 'white')}
        minH={'60px'}
        py={{base: 2}}
        px={{base: 4}}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
          <Flex
            flex={{base:1, md: 'auto'}}
            ml={{base: -2}}
            display={{base: 'flex', md: 'none'}}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} />: <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
          </Flex>
          <Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}}>

            <Link
                onClick={() => onClickLink('/')}
                fontSize={'sm'}
                fontWeight={500}
                color={useColorModeValue('gray.800', 'white')}
                textAlign={useBreakpointValue({base: 'center', md: 'left'})}
                fontFamily={'heading'}
                _hover={{
                  textDecoration: 'none',
                }}
                >
                Task Man
              </Link>
            <Flex display={{base: 'none', md: 'flex'}} ml={10}>
                <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{base: 1, md: 0}}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
              <Link onClick={() => onClickLink('/profile')}>
              <Avatar
                size={'sm'}
                src={
                  'https://source.unsplash.com/random'
                }
              />
              </Link>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'Link'}
                cursor={'pointer'}
                onClick={() => onClickLink('/sign-in')}>
                  Sign In
              </Button>
              <Button
                display={{base: 'none', md: 'inline-flex'}}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                onClick={() => onClickLink('/sign-up')}
                _hover={{
                  bg: 'pink.300'
                }}>
                Sign Up
              </Button>
          </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
