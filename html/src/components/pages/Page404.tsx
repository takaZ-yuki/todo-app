import { Text, Box, Heading, Button } from "@chakra-ui/react"
import { memo, VFC } from "react"
import { useClickLink } from "../../hooks/useClickLink";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

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

      <PrimaryButton
        onClick={() => onClickLink('/')}
        buttonProps={{variant: "solid", w: "auto"}}>
        Go to Home
      </PrimaryButton>
    </Box>
  )
})