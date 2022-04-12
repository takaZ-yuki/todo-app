import { Flex, useColorModeValue, Box, VStack, Heading, FormControl, FormLabel, InputGroup, Input, Textarea, Button } from "@chakra-ui/react";
import { memo, VFC } from "react"

import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const Contact: VFC = memo(() => {
  return (
    <Flex
      bg={useColorModeValue('wgite', 'gray.900')}
      align="center"
      justify="center"
      id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              Get in Touch
            </Heading>

            <Box
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              p={8}
              color={useColorModeValue('gray.700', 'whiteAlpha.900')}
              shadow="base">
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>

                  <InputGroup>
                    <Input type="text" name="name" placeholder="Your Name" />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>

                  <InputGroup>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>

                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    resize="none"
                  />
                </FormControl>

                <PrimaryButton buttonProps={{loadingText: 'Submitting', size: "lg"}}>
                  送信
                </PrimaryButton>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
})