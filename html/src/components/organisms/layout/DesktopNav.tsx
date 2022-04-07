import { Link, useColorModeValue, Stack, Box, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import { memo } from "react";
import { useClickLink } from "../../../hooks/useClickLink";
import { NAV_ITEMS } from "../../../router/headerSettings";
import { DesktopSubNav } from "./DesktopSubNav";

export const DesktopNav = memo(() => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const [onClickLink] = useClickLink();

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                onClick={() => onClickLink(navItem.href)}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
              border={0}
              boxShadow={'xl'}
              bg={popoverContentBgColor}
              p={4}
              rounded={'xl'}
              minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child}/>
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
});