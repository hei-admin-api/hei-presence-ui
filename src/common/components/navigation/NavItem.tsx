import { Flex, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { NavItemProps } from "../../../types/proptypes";

export const NavItem = ({ icon, to, children, ...rest }: NavItemProps) => {
  return (
    <Link href={to} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: useColorModeValue('blackAlpha.800', 'gray.800'),
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
