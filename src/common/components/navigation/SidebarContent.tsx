import { Box, CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { SidebarProps } from "../../../types/proptypes/navigation";
import { NavItem } from "./NavItem";
import { LinkItems } from "./LinkItems";
import { useCallback } from "react";
import { LinkItem } from "../../../types/proptypes/navigation/LinkItem";
import { FaCoffee, FaFileInvoice } from "react-icons/fa";

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

      <NavItem to="dishes" icon={FaCoffee}>
        Plats
      </NavItem>
      
      <NavItem to="orders" icon={FaFileInvoice}>
        Orders
      </NavItem>
    </Box>
  );
};
