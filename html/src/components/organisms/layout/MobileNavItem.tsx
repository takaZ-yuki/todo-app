import { VFC, memo } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text, Link, useDisclosure, Stack, Flex, useColorModeValue, Icon, Collapse } from "@chakra-ui/react";
import { NavItemType } from "../../../types/navItemType";
import { useClickLink } from "../../../hooks/useClickLink";

export const MobileNavItem: VFC<Omit<NavItemType, 'subLabel'>> = memo((props) => {
  const {label, href, children} = props;
  const { isOpen, onToggle } = useDisclosure();
  const [onClickLink] = useClickLink();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        onClick={() => onClickLink(href)}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} onClick={() => onClickLink(child.href)}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
});
