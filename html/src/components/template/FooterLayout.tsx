import { Link, Text, useColorModeValue, Box, Container, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SocialButton } from "../atoms/layout/SocialButton";
import { LogoTransparent } from "../icons";
import { useClickLink } from "../../hooks/useClickLink";

export const FooterLayout: VFC = memo(() => {
  const [onClickLink] = useClickLink();

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <LogoTransparent />
        <Stack direction={'row'} spacing={6}>
          <Link onClick={() => onClickLink('/')} >Home</Link>
          <Link onClick={() => onClickLink('/about')}>About</Link>
          <Link onClick={() => onClickLink('/contact')}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
});
