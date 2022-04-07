import { memo, VFC } from "react";
import { Stack, useColorModeValue } from "@chakra-ui/react";
import { NAV_ITEMS } from "../../../router/headerSettings";
import { MobileNavItem } from "./MobileNavItem";

export const MobileNav: VFC = memo(() => {
  return (
    <Stack
    bg={useColorModeValue('white', 'gray.800')}
    p={4}
    display={{md: 'none'}}>
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem}/>
    ))}
    </Stack>
  )
});