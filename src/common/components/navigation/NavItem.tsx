import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { NavItemProps } from "../../../types/proptypes";
import { Link } from "react-router-dom";

export const NavItem = ({ icon, to, children, ...rest }: NavItemProps) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
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
