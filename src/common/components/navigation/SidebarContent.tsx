import { Box, CloseButton, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { SidebarProps } from "../../../types/proptypes/navigation";
import { NavItem } from "./NavItem";
import { LinkItems } from "./LinkItems";

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          ...
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.label} icon={link.icon} to={link.to}>
          {link.label}
        </NavItem>
      ))}
    </Box>
  );
};
