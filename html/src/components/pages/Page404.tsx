import { Text, Box, Heading, Button } from "@chakra-ui/react"
import { memo, VFC } from "react"
import { useClickLink } from "../../hooks/useClickLink";

export const Page404: VFC = memo(() => {
  const [onClickLink] = useClickLink();

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, gray.800, gray.800)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        bg={'pink.400'}
        color={'white'}
        onClick={() => onClickLink('/')}
        _hover={{
          bg: 'pink.300'
        }}
        variant="solid">
        Go to Home
      </Button>
    </Box>
  )
})