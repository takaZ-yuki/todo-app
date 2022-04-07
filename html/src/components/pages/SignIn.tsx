import { Link, Text, Flex, useColorModeValue, Stack, Heading, Box, FormControl, FormLabel, Input, Checkbox, Button } from "@chakra-ui/react"
import { memo, VFC } from "react"
import { useClickLink } from "../../hooks/useClickLink";

export const SignIn: VFC = memo(() => {
  const [onClickLink] = useClickLink();

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'} onClick={() => onClickLink('/forgot-password')}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'pink.400'}
                color={'white'}
                _hover={{
                  bg: 'pink.300'
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
})