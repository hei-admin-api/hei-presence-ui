import { IconButton, Td, useDisclosure } from '@chakra-ui/react';
import React, { useCallback, useMemo } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Table } from '../../../../common/components';
import { EditDrawer } from '../../../../common/components/edit/EditDrawer';
import { DishEdit } from './DishEdit';


const actionCell = () => (
  <Td justifyContent="center">
    <IconButton
      aria-label="label"
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      icon={<FaEdit />}
    />
  </Td>
)


export const DishList = () => {
  const columns = useMemo(() => ['Nom', 'Prix', 'Catégorie', 'Nombre de commande', 'Quantité'], []);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderTable = useCallback(() => <Table resource="dishes" fields={columns} />, []);

  return renderTable();
}
